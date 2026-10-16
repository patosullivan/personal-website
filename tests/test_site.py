import hashlib
import json
import re
import tomllib
import unittest
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'

class Tags(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags = []
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        self.tags.append((tag, dict(attrs)))

class SiteTests(unittest.TestCase):
    def test_approved_assets_unchanged(self):
        expected = json.loads((ROOT / 'tests/approved-assets.json').read_text())
        for name, digest in expected.items():
            with self.subTest(name=name):
                self.assertEqual(hashlib.sha256((PUBLIC / name).read_bytes()).hexdigest(), digest)

    def test_page_links_and_initial_assets(self):
        tags = Tags((PUBLIC / 'index.html').read_text()).tags
        self.assertFalse(any(t == 'script' for t, a in tags))
        for tag, attrs in tags:
            for key in ('href', 'src'):
                url = attrs.get(key, '')
                if url and ':' not in url and not url.startswith('#'):
                    self.assertTrue((PUBLIC / url).is_file(), url)
            if tag == 'a' and attrs.get('href', '').endswith('.pdf'):
                self.assertNotIn('download', attrs)
            if tag == 'link' and attrs.get('rel') != 'icon':
                self.assertNotIn('://', attrs.get('href', ''))
        css = (PUBLIC / 'styles.css').read_text()
        self.assertNotIn('https:', css)
        self.assertNotIn('@import', css)
        for url in re.findall(r'url\([\'\"]?([^\)\'\"]+)', css):
            self.assertTrue((PUBLIC / url).is_file(), url)
        initial = sum((PUBLIC / f).stat().st_size for f in (
            'index.html', 'styles.css', 'fonts/patrick-text-variable-latin.woff2'))
        self.assertEqual(initial, 53897)
        self.assertLess(initial, 200000)

    def test_preserved_public_files(self):
        for name, expected in {
            'keybase.txt': 'b193fcc01335a739fd1f3f956898563d2a99f379',
            'robots.txt': 'eb0536286f3081c6c0646817037faf5446e3547d',
        }.items():
            data = (PUBLIC / name).read_bytes()
            actual = hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()
            self.assertEqual(actual, expected)

    def test_static_deployment(self):
        config = tomllib.loads((ROOT / 'netlify.toml').read_text())
        self.assertEqual(config['build']['publish'], 'public')
        self.assertTrue(config['build']['command'].startswith('echo '))
        self.assertEqual(config['headers'][0]['for'], '/service-worker.js')
        self.assertEqual(config['headers'][0]['values']['Cache-Control'], 'no-store')
        for name in ('package.json', 'yarn.lock', '.node-version', '.tool-versions'):
            self.assertFalse((ROOT / name).exists())
        redirects = (PUBLIC / '_redirects').read_text()
        self.assertNotIn('/*', redirects)
        for line in redirects.splitlines():
            source, target, status = line.split()
            self.assertEqual(target, '/')
            self.assertEqual(status, '301')
        self.assertFalse(any(p.name in ('README.md', 'approved-assets.json') for p in PUBLIC.rglob('*')))

if __name__ == '__main__':
    unittest.main()
