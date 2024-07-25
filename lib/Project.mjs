import * as gltf from './GltfUtils.mjs';
import PersistedData from './PersistedData.mjs';

class Project extends PersistedData {
  init() {
    return Promise.resolve()
      .then(() => super.init())
      .then(() => {
        gltf.MAP_PROPS.forEach((prop) => {
          this.jsonProxy[prop] ??= {};
        });

        gltf.COLLECTION_PROPS.forEach((prop) => {
          this.jsonProxy[prop] ??= {};
        });

        gltf.ARRAY_PROPS.forEach((prop) => {
          this.jsonProxy[prop] ??= [];
        });
        this.jsonProxy.extensions ??= {};
        this.jsonProxy.extensions.KHR_lights_punctual ??= { lights: {} };

        this.jsonProxy.asset.version = '2.0';
      });
  }
}

export default Project;
