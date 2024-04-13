import assert from 'assert';
import { readFile } from 'fs/promises';

import Importer from '../lib/Importer.mjs';

async function loadFileMap(fileNames) {
  return Promise.all(fileNames.map((name) => Promise.resolve()
    .then(() => readFile(`./test/${name}`))
    .then((data) => ({
      name,
      buffer: data,
    }))));
}

async function importFileMap(fileMap, displayOutput) {
  const importer = new Importer();
  await importer.processFileMap(fileMap);

  if (displayOutput) {
    console.log('Importer messages:', importer.messages);
    console.log('Importer debugs messages:', importer.debugs);
  }

  assert.deepEqual([], importer.errors);
  assert.deepEqual([], importer.warnings);

  return importer.results;
}
describe('Importer', function () {
  it('should embed buffer URIs', async function () {
    const fileMap = await loadFileMap(['Box.gltf']);
    const results = await importFileMap(fileMap);
    const bufferUri = results[0].buffers[0].uri;
    assert.strictEqual('data:application/octet-stream;base64', bufferUri.split(',')[0]);
  });
});
