import { WebsocketProvider } from 'y-websocket';

import * as gltf from './GltfUtils.mjs';
import PersistedData from './PersistedData.mjs';

class Project extends PersistedData {
  constructor(options) {
    super(options);
    this.server = options?.server;
    this.networkProvider = null;
  }

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
      })
      .then(() => {
        if (this.server) {
          try {
            console.log(`connecting to ${this.server}`);
            this.networkProvider = new WebsocketProvider(this.server, this.id, this.ydoc);
            this.networkProvider.on('status', (event) => {
              console.log(event);
            });
          } catch (error) {
            console.error(error);
          }
        }
      });
  }

  destroy() {
    if (this.networkProvider) {
      this.networkProvider.destroy();
    }
  }
}

export default Project;
