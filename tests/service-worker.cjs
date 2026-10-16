const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const listeners = new Map();
const calls = [];
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../public/service-worker.js'), 'utf8'), {
  self: {
    addEventListener: (name, handler) => listeners.set(name, handler),
    skipWaiting: async () => calls.push('skipWaiting'),
    clients: { claim: async () => calls.push('claim') },
    registration: { unregister: async () => calls.push('unregister') },
  },
});
(async () => {
  assert.deepEqual([...listeners.keys()], ['install', 'activate']);
  for (const name of ['install', 'activate']) {
    let pending;
    listeners.get(name)({ waitUntil: (promise) => { pending = promise; } });
    assert.ok(pending instanceof Object || typeof pending?.then === 'function');
    await pending;
  }
  assert.deepEqual(calls, ['skipWaiting', 'claim', 'unregister']);
  console.log('PASS: retirement lifecycle, no fetch handler or storage access');
})().catch((error) => { console.error(error); process.exitCode = 1; });
