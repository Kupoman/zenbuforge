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

function copy(json) {
  return JSON.parse(JSON.stringify(json));
}

export function addIdExtension(data) {
  const local = data;
  this.COLLECTION_PROPS.forEach((prop) => {
    (local[prop] || []).forEach((item) => {
      item.extensions = item.extensions || {};

      if (utils.isDefined(item.extensions.ZF_id) && !item.extensions.ZF_id.invalid) {
        return;
      }

      item.extensions.ZF_id = item.extensions.ZF_id || {};
      item.extensions.ZF_id.id = item.extensions.ZF_id.id || uuid.v4();

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
            ref.extensions.ZF_id.invalid = true;
          }
          item.extensions.ZF_id.children.push(id);
        });

        if (item.extensions.ZF_id.invalid) {
          delete item.extensions.ZF_id.invalid;
        }
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

export function initNames(data) {
  const local = data;
  this.COLLECTION_PROPS.forEach((prop) => {
    (local[prop] || []).forEach((item) => {
      item.name = item.name || '';
    });
  });
}

export function ensureTRSNodes(data) {
  const local = data;
  (local.nodes || []).forEach((node) => {
    if (utils.isDefined(node.matrix)) {
      node.translation = [0.0, 0.0, 0.0];
      node.rotation = [0.0, 0.0, 0.0, 1.0];
      node.scale = [1.0, 1.0, 1.0];
      delete node.matrix;
    }
  });
}
