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
  const local = data;
  const processCollection = (prop, collection) => {
    (collection ?? []).forEach((item) => {
      item.extensions = item.extensions || {};

      if (utils.isDefined(item.extensions.ZF_id) && !item.extensions.ZF_id.invalid) {
        return;
      }

      item.extensions.ZF_id = item.extensions.ZF_id || {};
      item.extensions.ZF_id.id = item.extensions.ZF_id.id || uuid.v4();

      if (!utils.isDefined(item.name)) {
        item.name = item.extensions.ZF_id.id;
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

      if (prop === 'textures') {
        const sourceRef = local.images[item.source];
        const sourceId = getId(sourceRef);
        item.extensions.ZF_id.source = sourceId;

        const samplerRef = local.samplers[item.sampler];
        const samplerId = getId(samplerRef);
        item.extensions.ZF_id.sampler = samplerId;
      }

      if (prop === 'materials') {
        if (utils.isDefined(item.pbrMetallicRoughness)) {
          const pbr = item.pbrMetallicRoughness;
          item.extensions.ZF_id.pbrMetallicRoughness = {};
          if (utils.isDefined(pbr.baseColorTexture)) {
            const ref = local.textures[pbr.baseColorTexture.index];
            const id = getId(ref);
            item.extensions.ZF_id.pbrMetallicRoughness.baseColorTexture = { index: id };
          }
        }
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

        if (utils.isDefined(item?.extensions?.KHR_lights_punctual?.light)) {
          const refId = item.extensions.KHR_lights_punctual.light;
          const ref = local.extensions.KHR_lights_punctual.lights[refId];
          const id = getId(ref);
          item.extensions.KHR_lights_punctual.light = id;
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
  };

  processCollection('lights', local?.extensions?.KHR_lights_punctual.lights);
  this.COLLECTION_PROPS.forEach((prop) => processCollection(prop, local[prop]));

  return local;
}

export function removeIdExtension(data) {
  const idToIndex = {};

  const mapToArray = (obj, prop) => {
    idToIndex[prop] = {};
    const map = obj[prop];
    const array = [];
    Object.entries(map ?? {}).forEach(([id, value]) => {
      const length = array.push(value);
      idToIndex[prop][id] = length - 1;
    });
    obj[prop] = array;
  };

  COLLECTION_PROPS.forEach((prop) => mapToArray(data, prop));
  mapToArray(data.extensions.KHR_lights_punctual, 'lights');


  const commonTransform = (resource) => {
    resource.extras ??= {};
    resource.extras.id = resource.extensions.ZF_id.id;
    delete resource.extensions.ZF_id;
  };

  const updateReference = (obj, key, prop) => {
    const reference = obj.extensions.ZF_id[prop];

    if (!reference) {
      return;
    }

    if (Array.isArray(reference)) {
      reference.forEach((r, i) => {
        obj[prop][i] = idToIndex[key][r];
      });
      return;
    }

    obj[prop] = idToIndex[key][reference];
  };

  (data.bufferViews ?? []).forEach((bufferView) => {
    updateReference(bufferView, 'buffers', 'buffer');
    commonTransform(bufferView);
  });

  (data.accessors ?? []).forEach((accessor) => {
    updateReference(accessor, 'bufferViews', 'bufferView');
    commonTransform(accessor);
  });

  (data.textures ?? []).forEach((texture) => {
    updateReference(texture, 'images', 'source');
    updateReference(texture, 'samplers', 'sampler');
    commonTransform(texture);
  });

  (data.materials ?? []).forEach((material) => {
    // TODO: deep props
    commonTransform(material);
  });

  (data.meshes ?? []).forEach((mesh) => {
    // TODO: deep props
    commonTransform(mesh);
  });

  (data.nodes ?? []).forEach((node) => {
    if ('KHR_lights_punctual' in node.extensions) {
      node.extensions.KHR_lights_punctual.light = idToIndex.lights[
        node.extensions.KHR_lights_punctual.light
      ];
    }
    updateReference(node, 'meshes', 'mesh');
    updateReference(node, 'cameras', 'camera');
    updateReference(node, 'nodes', 'children');
    commonTransform(node);
  });

  (data.scenes ?? []).forEach((scene) => {
    updateReference(scene, 'nodes', 'nodes');
    commonTransform(scene);
  });

  data.extensionsRequired = data.extensionsRequired.filter((i) => i !== 'ZF_id');
  data.extensionsUsed = data.extensionsUsed.filter((i) => i !== 'ZF_id');
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

export function ensureLightExtension(data) {
  const local = data;
  (local.nodes || []).forEach((node) => {
    node.extensions ??= {};
    node.extensions.KHR_lights_punctual ??= {};
  });
}

export function normalize(data) {
  this.addIdExtension(data);
  this.initNames(data);
  this.ensureTRSNodes(data);
  this.ensureLightExtension(data);
}
