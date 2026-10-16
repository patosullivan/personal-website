# Patrick O’Sullivan’s homepage

A static, dependency-free homepage. Serve `public/` directly; there is no application build or package installation.

## Preview and checks

- Preview: `python3 -m http.server 8000 --directory public`
- Static checks (Python 3.11+): `python3 -m unittest discover -s tests -v`
- Service-worker retirement unit test (Node): `node tests/service-worker.cjs`

The initial HTML, CSS, and local variable WOFF2 total 53,897 uncompressed bytes. The résumé PDF loads only when its link is followed. There is no page JavaScript, analytics, or external font request. The embedded SVG favicon needs no separate asset. Light and dark colors follow the system preference.

## Deployment

`netlify.toml` publishes only `public/` and explicitly replaces the old webpack build command with a no-op. No dashboard, DNS, domain, or production-branch settings are changed by these files. Review the deploy preview before merging; merging may trigger the existing continuous-deployment integration.

The old React, Sass, webpack, dependency manifests, and Node 12 version pins are removed. They remain recoverable in Git history. The existing Keybase verification and robots.txt are preserved byte for byte. Former `/Skills`, `/Contact`, and `/Demos` paths redirect to the homepage. Other missing paths return a real 404 instead of the old SPA fallback.

### Returning visitors and the old service worker

Keep `public/service-worker.js` at the original `/service-worker.js` URL. Browsers with the old registration can update to this retirement worker, which skips waiting, takes over from the previous cache-first worker, and unregisters itself. It has no fetch handler and does not delete caches or force a reload. Old caches become unused; other same-origin storage is untouched. The homepage never registers it, so new visitors have no service worker.

A returning visitor may initially see the old page until the browser performs its service-worker update and they reload. Verify this transition with an existing old-site profile on the deployment origin before declaring the migration fully validated. Do not remove the retirement file immediately after deployment.

## Browser acceptance before merge

Check the final deploy preview at 1200px and 390px, 100% zoom, device pixel ratio 1, in light and dark mode. Confirm the bundled Patrick Text font is actually used, body/name are 18px, the thesis is 28px, optical sizing is automatic, focus is visible, and no horizontal overflow occurs. Test 200% zoom, all contact links, the inline favicon, and normal résumé PDF opening. Confirm only local HTML/CSS/font assets load initially. Browser rendering and service-worker lifecycle integration are not covered by the static/unit tests.

## Font and licensing

Patrick Text is the renamed Latin subset of Source Serif 4 Variable, with weight 400–600 and optical-size 8–60 axes. Its glyph coverage is Basic Latin plus é and ’; new copy may need an updated subset. Retain `public/fonts/OFL.txt` and `FONT-NOTICE.txt` when distributing the font. The previous package metadata declared the site code ISC; this migration does not change that declaration or the separate font license.
