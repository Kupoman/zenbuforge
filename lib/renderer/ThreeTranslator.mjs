import * as THREE from 'three';

import Translator from './translator.mjs';
import GltfTypes from './gltfTypes.mjs';

function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}

function threeDestroy(resource) {
  if ('dispose' in resource) {
    resource.dispose();
  }
}

function updateUserData(resource, resourceJson) {
  Object.assign(resource.userData, resourceJson.extras ?? {});
}

function bufferAttributeCreate() {
  return new THREE.BufferAttribute();
}

const COMPONENT_VIEW = {
  5120: Int8Array,
  5121: Uint8Array,
  5122: Int16Array,
  5123: Uint16Array,
  5125: Uint32Array,
  5126: Float32Array,
};

const COMPONENT_COUNTS = {
  SCALAR: 1,
  VEC2: 2,
  VEC3: 3,
  VEC4: 4,
  MAT2: 4,
  MAT3: 9,
  MAT4: 16,
};

function bufferAttributeUpdate(resource, resourceJson, translator) {
  const bufferView = translator.collections['/bufferViews'].get(resourceJson.bufferView);
  const componentCount = COMPONENT_COUNTS[resourceJson.type];
  const offset = (bufferView.byteOffset ?? 0) + (resourceJson.byteOffset ?? 0);
  const view = new COMPONENT_VIEW[resourceJson.componentType](
    bufferView.buffer.data,
    offset,
    resourceJson.count * componentCount,
  );
  const isNormalized = resourceJson.normalized ?? false;
  const newArray = new THREE.BufferAttribute(view, componentCount, isNormalized);

  resource.copy(newArray);

  resource.name = resourceJson.name ?? '';
}

function imageCreate() {
  return document.createElementNS('http://www.w3.org/1999/xhtml', 'img');
}

function imageUpdate(resource, resourceJson) {
  resource.src = resourceJson.uri;
}

function imageDestroy(resource) {
  resource.remove();
}

function textureCreate() {
  const texture = new THREE.Texture();
  texture.flipY = false;
  return texture;
}

function textureUpdate(resource, resourceJson, translator) {
  const image = translator.collections['/images'].get(resourceJson.source);
  resource.image = image;
  resource.needsUpdate = true;

  resource.name = resourceJson.name ?? '';
  updateUserData(resource, resourceJson);
}

function materialCreate() {
  return new THREE.MeshStandardMaterial();
}

function materialUpdate(resource, resourceJson, translator) {
  const textures = translator.collections['/textures'];
  if (isDefined(resourceJson.pbrMetallicRoughness)) {
    const pbr = resourceJson.pbrMetallicRoughness;
    if (isDefined(pbr.baseColorTexture)) {
      resource.map = textures.get(pbr.baseColorTexture.index);
    } else {
      resource.map = null;
    }
    if (isDefined(pbr.baseColorFactor)) {
      resource.color.setRGB(
        pbr.baseColorFactor[0],
        pbr.baseColorFactor[1],
        pbr.baseColorFactor[2],
        THREE.LinearSRGBColorSpace,
      );
      resource.opacity = pbr.baseColorFactor[3];
    } else {
      resource.color.set(1.0, 1.0, 1.0);
      resource.opacity = 1.0;
    }
    if (isDefined(pbr.metallicRoughnessTexture)) {
      const texture = textures.get(pbr.metallicRoughnessTexture.index);
      resource.metalnessMap = texture;
      resource.roughnessMap = texture;
    } else {
      resource.metalnessMap = null;
      resource.roughnessMap = null;
    }
    resource.metalness = pbr.metallicFactor ?? 1.0;
    resource.roughness = pbr.roughnessFactor ?? 1.0;
  }

  if (isDefined(resourceJson.normalTexture)) {
    resource.normalMap = textures.get(resourceJson.normalTexture.index);
    const scale = resourceJson.normalTexture.scale ?? 1.0;
    resource.normalScale = new THREE.Vector2(scale, scale);
  } else {
    resource.normalMap = null;
  }

  if (isDefined(resourceJson.occlusionTexture)) {
    resource.aoMap = textures.get(resourceJson.occlusionTexture.index);
    resource.aoMapIntensity = resourceJson.occlusionTexture.strength ?? 1.0;
  } else {
    resource.aoMap = null;
  }

  if (isDefined(resourceJson.emissiveTexture)) {
    resource.emissiveMap = textures.get(resourceJson.emissiveTexture.index);
  } else {
    resource.emissiveMap = null;
  }
  if (isDefined(resourceJson.emissiveFactor)) {
    resource.emissive.setRGB(
      resourceJson.emissiveFactor[0],
      resourceJson.emissiveFactor[1],
      resourceJson.emissiveFactor[2],
      THREE.LinearSRGBColorSpace,
    );
  } else {
    resource.emissive.set(0.0, 0.0, 0.0);
  }

  resource.depthWrite = true;

  if (resourceJson.alphaMode === 'BLEND') {
    resource.transparent = true;
    resource.alphaTest = 0.0;
    resource.depthWrite = false;
  } else if (resourceJson.alphaMode === 'MASK') {
    resource.transparent = false;
    resource.alphaTest = resourceJson.alphaCutoff ?? 0.5;
  } else { // OPAQUE
    resource.transparent = false;
    resource.alphaTest = 0.0;
  }

  resource.side = (resourceJson.doubleSided) ? THREE.DoubleSide : THREE.FrontSide;

  resource.needsUpdate = true;
  resource.name = resourceJson.name ?? '';
  updateUserData(resource, resourceJson);
}

function meshCreate() {
  return new THREE.Group();
}

const ATTRIBUTES = {
  POSITION: 'position',
  NORMAL: 'normal',
  TANGENT: 'tangent',
  TEXCOORD_0: 'uv',
  TEXCOORD_1: 'uv1',
  TEXCOORD_2: 'uv2',
  TEXCOORD_3: 'uv3',
  COLOR_0: 'color',
  WEIGHTS_0: 'skinWeight',
  JOINTS_0: 'skinIndex',
};

function meshUpdate(resource, resourceJson, translator) {
  (resourceJson.primitives ?? []).forEach((primitive, i) => {
    let mesh = resource.children[i];
    if (!isDefined(mesh)) {
      mesh = new THREE.Mesh();
      resource.add(mesh);
    }
    const { geometry } = mesh;

    Object.entries(primitive.attributes ?? {}).forEach(([attrName, attr]) => {
      const threeName = ATTRIBUTES[attrName] ?? attrName.toLowerCase();
      const bufferAttribute = translator.collections['/accessors'].get(attr);
      geometry.setAttribute(threeName, bufferAttribute);
    });

    if (isDefined(primitive.indices)) {
      const indices = translator.collections['/accessors'].get(primitive.indices);
      geometry.setIndex(indices);
    }

    if (isDefined(primitive.material)) {
      const material = translator.collections['/materials'].get(primitive.material);
      mesh.material = material;
    }
  });

  resource.name = resourceJson.name ?? '';
  updateUserData(resource, resourceJson);
}

function groupCreate() {
  return new THREE.Group();
}

function lightUpdate(resource, resourceJson) {
  let light = resource.children[0];

  let currentLightType = 'point';
  if (light?.isDirectionalLight) {
    currentLightType = 'directional';
  } else if (light?.isSpotLight) {
    currentLightType = 'spot';
  }

  if (!isDefined(light) || currentLightType !== resourceJson.type) {
    resource.children.forEach((child) => child.dispose());
    resource.clear();
    if (resourceJson.type === 'point') {
      light = new THREE.PointLight();
    } else if (resourceJson.type === 'directional') {
      light = new THREE.DirectionalLight();
    } else if (resourceJson.type === 'spot') {
      light = new THREE.SpotLight();
    }
    resource.add(light);
  }

  if (isDefined(resourceJson.color)) {
    light.color.set(
      resourceJson.color[0],
      resourceJson.color[1],
      resourceJson.color[2],
    );
  }

  light.intensity = resourceJson?.intensity ?? 1.0;
  if (light.isPointLight || light.isSpotLight) {
    light.distance = resourceJson?.range ?? 0;
  }

  resource.name = resourceJson.name ?? '';
  updateUserData(resource, resourceJson);
}

function nodeUpdate(resource, resourceJson, translator) {
  resource.clear();

  (resourceJson.children ?? []).forEach((child) => {
    let node = translator.collections['/nodes'].get(child);
    if (!isDefined(node)) {
      translator.collections['/nodes'].update(child, {}, translator);
      node = translator.collections['/nodes'].get(child);
    }
    resource.add(node);
  });

  if (isDefined(resourceJson.mesh)) {
    const mesh = translator.collections['/meshes'].get(resourceJson.mesh);
    resource.add(mesh);
  }

  if (isDefined(resourceJson.extensions?.KHR_lights_punctual?.light)) {
    const light = translator.collections['/extensions/KHR_lights_punctual/lights'].get(
      resourceJson.extensions.KHR_lights_punctual.light,
    );
    resource.add(light);
  }

  if (isDefined(resourceJson.translation)) {
    resource.position.set(
      resourceJson.translation[0],
      resourceJson.translation[1],
      resourceJson.translation[2],
    );
  }

  if (isDefined(resourceJson.rotation)) {
    resource.quaternion.set(
      resourceJson.rotation[0],
      resourceJson.rotation[1],
      resourceJson.rotation[2],
      resourceJson.rotation[3],
    );
  }

  if (isDefined(resourceJson.scale)) {
    resource.scale.set(
      resourceJson.scale[0],
      resourceJson.scale[1],
      resourceJson.scale[2],
    );
  }

  resource.name = resourceJson.name ?? '';
  updateUserData(resource, resourceJson);
}

function sceneCreate() {
  return new THREE.Scene();
}

function sceneUpdate(resource, resourceJson, translator) {
  (resourceJson.nodes ?? []).forEach((nodeId) => {
    const node = translator.collections['/nodes'].get(nodeId);
    resource.add(node);
  });

  resource.background = new THREE.Color(0x333333);

  resource.name = resourceJson.name ?? '';
  updateUserData(resource, resourceJson);
}

class ThreeTranslator extends Translator {
  constructor() {
    super();

    this.registerCollection(
      '/extensions/KHR_lights_punctual/lights',
      groupCreate,
      lightUpdate,
      threeDestroy,
    );

    GltfTypes.register(this);

    this.registerCollection(
      '/accessors',
      bufferAttributeCreate,
      bufferAttributeUpdate,
      threeDestroy,
    );

    this.registerCollection(
      '/images',
      imageCreate,
      imageUpdate,
      imageDestroy,
    );

    this.registerCollection(
      '/textures',
      textureCreate,
      textureUpdate,
      threeDestroy,
    );

    this.registerCollection(
      '/materials',
      materialCreate,
      materialUpdate,
      threeDestroy,
    );

    this.registerCollection(
      '/meshes',
      meshCreate,
      meshUpdate,
      threeDestroy,
    );

    this.registerCollection(
      '/nodes',
      groupCreate,
      nodeUpdate,
      threeDestroy,
    );

    this.registerCollection(
      '/scenes',
      sceneCreate,
      sceneUpdate,
      threeDestroy,
    );
  }
}

export default ThreeTranslator;
