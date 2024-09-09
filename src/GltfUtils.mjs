import JSONPath from 'jsonpath';

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

const REFERENCE_PROPS = [
  {
    path: '$.bufferViews[*].buffer',
    collection: 'buffers',
  },
  {
    path: '$.accessors[*].bufferView',
    collection: 'bufferViews',
  },
  {
    path: '$.textures[*].source',
    collection: 'images',
  },
  {
    path: '$.textures[*].sampler',
    collection: 'samplers',
  },
  {
    path: '$.materials[*].normalTexture.index',
    collection: 'textures',
  },
  {
    path: '$.materials[*].occlusionTexture.index',
    collection: 'textures',
  },
  {
    path: '$.materials[*].emissiveTexture.index',
    collection: 'textures',
  },
  {
    path: '$.materials[*].pbrMetallicRoughness.baseColorTexture.index',
    collection: 'textures',
  },
  {
    path: '$.materials[*].pbrMetallicRoughness.metallicRoughnessTexture.index',
    collection: 'textures',
  },
  {
    path: '$.meshes[*].primitives[*].material',
    collection: 'materials',
  },
  {
    path: '$.meshes[*].primitives[*].indices',
    collection: 'accessors',
  },
  {
    path: '$.meshes[*].primitives[*].attributes[*]',
    collection: 'accessors',
  },
  {
    path: '$.nodes[*].mesh',
    collection: 'meshes',
  },
  {
    path: '$.nodes[*].camera',
    collection: 'cameras',
  },
  {
    path: '$.nodes[*].extensions.KHR_lights_punctual.light',
    collection: 'extensions.KHR_lights_punctual.lights',
  },
  {
    path: '$.nodes[*].children[*]',
    collection: 'nodes',
  },
  {
    path: '$.scenes[*].nodes[*]',
    collection: 'nodes',
  },
];

export function getId(obj) {
  return obj?.extras?.id;
}

export function toMapRefs(obj) {
  COLLECTION_PROPS.forEach((prop) => {
    (obj[prop] ?? []).forEach((r) => {
      r.extras ??= {};
      r.extras.id ??= uuid.v4();
    });
  });

  obj.extensions.KHR_lights_punctual.lights.forEach((r) => {
    r.extras ??= {};
    r.extras.id ??= uuid.v4();
  });

  REFERENCE_PROPS.forEach((ref) => {
    const nodes = JSONPath.nodes(obj, ref.path);
    nodes.forEach((node) => {
      let parent = obj;
      node.path.slice(1, -1).forEach((i) => {
        parent = parent[i];
      });

      let collection = obj;
      ref.collection.split('.').forEach((i) => {
        collection = collection[i];
      });
      const refObj = collection[node.value];

      const refProp = node.path[node.path.length - 1];
      parent[refProp] = refObj.extras.id;
    });
  });
}

export function toArrayRefs(data) {
  const indexLut = {
    'extensions.KHR_lights_punctual.lights': {},
  };
  COLLECTION_PROPS.forEach((collection) => {
    indexLut[collection] = {};
    (data[collection] ?? []).forEach((resource, i) => {
      indexLut[collection][resource.extras.id] = i;
    });
  });
  (data.extensions.KHR_lights_punctual.lights ?? []).forEach((resource, i) => {
    indexLut['extensions.KHR_lights_punctual.lights'][resource.extras.id] = i;
  });

  REFERENCE_PROPS.forEach((ref) => {
    const nodes = JSONPath.nodes(data, ref.path);
    nodes.forEach((node) => {
      let parent = data;
      node.path.slice(1, -1).forEach((i) => {
        parent = parent[i];
      });

      const refProp = node.path[node.path.length - 1];
      parent[refProp] = indexLut[ref.collection][node.value];
    });
  });
}

export function initNames(data) {
  const local = data;
  COLLECTION_PROPS.forEach((prop) => {
    (local[prop] || []).forEach((item) => {
      item.name = item.name || item.extras.id;
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
    node.extras ??= {};
    node.extras.rotationEuler = [0, 0, 0];
  });
}

export function ensureLightExtension(data) {
  const local = data;
  (local.nodes || []).forEach((node) => {
    node.extensions ??= {};
    node.extensions.KHR_lights_punctual ??= {};
  });
  local.extensions ??= {};
  local.extensions.KHR_lights_punctual ??= {
    lights: [],
  };
}

export function normalize(data) {
  ensureLightExtension(data);
  toMapRefs(data);
  initNames(data);
  ensureTRSNodes(data);
}
