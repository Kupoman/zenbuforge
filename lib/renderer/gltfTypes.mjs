import { dataUriToBuffer } from 'data-uri-to-buffer';

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

function assignDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        assignDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }
}

class gltfTypes {
  static create() {
    return {};
  }

  static update(resource, resourceJson) {
    assignDeep(resource, resourceJson);
  }

  static update_buffers(resource, resourceJson) {
    gltfTypes.update(resource, resourceJson);
    resource.data = dataUriToBuffer(resource.uri).buffer;
    delete resource.uri;
  }

  static update_bufferViews(resource, resourceJson, translator) {
    gltfTypes.update(resource, resourceJson);
    resource.buffer = translator.collections['/buffers'].get(resource.buffer);
  }

  static update_accessors(resource, resourceJson, translator) {
    gltfTypes.update(resource, resourceJson);
    resource.bufferView = translator.collections['/bufferViews'].get(resource.bufferView);
  }

  static update_images(resource, resourceJson, translator) {
    gltfTypes.update(resource, resourceJson);
    if (isDefined(resource.bufferView)) {
      resource.bufferView = translator.collections['/bufferViews'].get(resource.bufferView);
    }
    if (isDefined(resource.uri)) {
      const mimeTypeMatch = resource.uri.match(/data:([^;]*);base64,/);
      gltfTypes.update_buffers(resource, resourceJson);
      resource.mimeType = mimeTypeMatch[1];
    }
  }

  static update_textures(resource, resourceJson, translator) {
    gltfTypes.update(resource, resourceJson);
    resource.sampler = translator.collections['/samplers'].get(resource.sampler);
    resource.source = translator.collections['/images'].get(resource.source);
  }

  static update_materials(resource, resourceJson, translator) {
    gltfTypes.update(resource, resourceJson);
    const textures = translator.collections['/textures'];
    if (resource.pbrMetallicRoughness) {
      const pbr = resource.pbrMetallicRoughness;
      if (isDefined(pbr.baseColorTexture)) {
        pbr.baseColorTexture.index = textures.get(pbr.baseColorTexture.index);
      }
      if (isDefined(pbr.metallicRoughnessTexture)) {
        pbr.metallicRoughnessTexture.index = textures.get(pbr.metallicRoughnessTexture.index);
      }
    }
    if (isDefined(resource.normalTexture)) {
      resource.normalTexture.index = textures.get(resource.normalTexture.index);
    }
    if (isDefined(resource.occlusionTexture)) {
      resource.occlusionTexture.index = textures.get(resource.occlusionTexture.index);
    }
    if (isDefined(resource.emissiveTexture)) {
      resource.emissiveTexture.index = textures.get(resource.emissiveTexture.index);
    }
  }

  static update_meshes(resource, resourceJson, translator) {
    gltfTypes.update(resource, resourceJson);

    Object.values(resource.primitives ?? []).forEach((prim) => {
      Object.entries(prim.attributes).forEach(([key, value]) => {
        prim.attributes[key] = translator.collections['/accessors'].get(value);
      });
      if (isDefined(prim.indices)) {
        prim.indices = translator.collections['/accessors'].get(prim.indices);
      }
      if (isDefined(prim.material)) {
        prim.material = translator.collections['/materials'].get(prim.material);
      }
    });
  }

  static update_nodes(resource, resourceJson, translator) {
    gltfTypes.update(resource, resourceJson);

    if (isDefined(resource.camera)) {
      resource.camera = translator.collections['/cameras'].get(resource.camera);
    }

    Object.values(resource.children ?? []).forEach((child, i) => {
      const translatedChild = translator.collections['/nodes'].get(child);
      if (isDefined(translatedChild)) {
        resource.children[i] = translatedChild;
        return;
      }

      translator.collections['/nodes'].update(child, {}, translator);
      resource.children[i] = translator.collections['/nodes'].get(child);
    });

    if (isDefined(resource.mesh)) {
      resource.mesh = translator.collections['/meshes'].get(resource.mesh);
    }
  }

  static update_scenes(resource, resourceJson, translator) {
    gltfTypes.update(resource, resourceJson);

    Object.values(resource.nodes ?? []).forEach((node, i) => {
      resource.nodes[i] = translator.collections['/nodes'].get(node);
    });
  }

  static destroy() {
  }

  static register(translator) {
    const types = [
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

    types.forEach((type) => {
      translator.registerCollection(
        `/${type}`,
        gltfTypes[`create_${type}`] ?? gltfTypes.create,
        gltfTypes[`update_${type}`] ?? gltfTypes.update,
        gltfTypes[`destroy_${type}`] ?? gltfTypes.destroy,
      );
    });
  }
}

export default gltfTypes;
