import * as uuid from 'uuid';

import * as utils from './Utils.mjs';

export const ARRAY_PROPS = [
  'extensionsUsed',
  'extensionsRequired',
];

export const COLLECTION_PROPS = [
  'buffers',
  'bufferViews',
  'accessors',

  'animations',
  'skins',

  'images',
  'samplers',
  'textures',

  'materials',
  'meshes',
  'cameras',
  'nodes',
  'scenes',
];

export const MAP_PROPS = [
  'asset',
  'extensions',
  'extras',
];

export const VALUE_PROPS = [
  'scene',
];

export function getId(obj) {
  if ('get' in obj) {
    return obj.get('extensions').ZF_id.id;
  }
  return obj?.extensions?.ZF_id?.id;
}

export function addIdExtension(data) {
  const local = JSON.parse(JSON.stringify(data));
  this.COLLECTION_PROPS.forEach((prop) => {
    (local[prop] || []).forEach((item) => {
      if (!item.extensions) {
        item.extensions = {};
      }
      if (!item.extensions.ZF_id) {
        item.extensions.ZF_id = { id: uuid.v4() };
      }

      if (prop === 'bufferViews') {
        const ref = local.buffers[item.buffer];
        const id = getId(ref);
        item.extensions.ZF_id.buffer = id;
      }

      if (prop === 'accessors') {
        const ref = local.bufferViews[item.bufferView];
        const id = getId(ref);
        item.extensions.ZF_id.bufferView = id;
      }

      if (prop === 'meshes') {
        item.extensions.ZF_id.primitives = (item.primitives || []).map((prim) => {
          const ids = {};
          if (utils.isDefined(prim.material)) {
            ids.material = getId(local.materials[prim.material]);
          }

          if (utils.isDefined(prim.indices)) {
            ids.indices = getId(local.accessors[prim.indices]);
          }

          ids.attributes = Object.fromEntries(
            Object.entries(prim.attributes)
              .map(([key, value]) => [
                key,
                getId(local.accessors[value]),
              ]),
          );
          return ids;
        });
      }

      if (prop === 'nodes') {
        if (utils.isDefined(item.mesh)) {
          const ref = local.meshes[item.mesh];
          const id = getId(ref);
          item.extensions.ZF_id.mesh = id;
        }

        if (utils.isDefined(item.children)) {
          item.extensions.ZF_id.children = [];
        }
        (item.children || []).forEach((child) => {
          const ref = local.nodes[child];
          let id = getId(ref);
          if (!utils.isDefined(id)) {
            id = uuid.v4();
            ref.extensions = ref.extensions || {};
            ref.extensions.ZF_id = ref.extensions.ZF_id || {};
            ref.extensions.ZF_id.id = id;
          }
          item.extensions.ZF_id.children.push(id);
        });
      }

      if (prop === 'scenes') {
        if (utils.isDefined(item.nodes)) {
          item.extensions.ZF_id.nodes = item.nodes.map((node) => {
            const ref = local.nodes[node];
            return ref.extensions.ZF_id.id;
          });
        }
      }
    });
  });

  return local;
}
