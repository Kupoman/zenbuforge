import { WebrtcProvider } from 'y-webrtc';

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

        const requiredExts = [
          'KHR_lights_punctual',
        ];
        requiredExts.forEach((ext) => {
          const array = this.jsonProxy.extensionsRequired;
          if (!array.includes(ext)) {
            array.push(ext);
          }
        });

        const usedExts = [
          'KHR_lights_punctual',
        ];
        usedExts.forEach((ext) => {
          const array = this.jsonProxy.extensionsUsed;
          if (!array.includes(ext)) {
            array.push(ext);
          }
        });
      })
      .then(() => {
        if (!this.server) {
          return;
        }

        try {
          this.networkProvider = new WebrtcProvider(
            this.id,
            this.ydoc,
            {
              signaling: [
                this.server,
              ],
              filterBcConns: true,
              peerOpts: {
                iceServers: [
                  { urls: 'stun:stun.l.google.com:19302' },
                ],
              },
            },
          );
        } catch (error) {
          console.warn(error);
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
