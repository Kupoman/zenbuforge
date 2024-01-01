import * as uuid from 'uuid';

import {
  openDB,
} from 'idb';

const VERSION = 1;
const DB_NAME = 'zenbuforge';
const STORE_NAME = 'projects';

class ProjectStorage {
  constructor() {
    this.db = null;
    this.isBusy = false;
    this._updates = [];
    this._projects = [];
  }

  async init() {
    this.db = await openDB(DB_NAME, VERSION, {
      upgrade(db) {
        db.createObjectStore(STORE_NAME);
      },
    });
    await this.refreshProjects();
  }

  async refreshProjects() {
    const keys = await this.db.transaction(STORE_NAME)
      .objectStore(STORE_NAME)
      .getAllKeys();
    const values = await this.db.transaction(STORE_NAME)
      .objectStore(STORE_NAME)
      .getAll();

    this._projects = Object.fromEntries(keys.map((key, i) => [key, values[i]]));
  }

  async commit(updates) {
    this.isBusy = true;
    const tx = this.db.transaction(STORE_NAME, 'readwrite');
    const store = await tx.objectStore(STORE_NAME);
    updates.forEach((update) => {
      if (update.action === 'delete') {
        store.delete(update.key);
      }
      if (update.action === 'put') {
        store.put(update.value, update.key);
      }
    });
    await this.refreshProjects();
    this.isBusy = false;
  }

  getProjects() {
    return this._projects;
  }

  addProject(key) {
    const id = uuid.v4();
    this._updates.push({
      action: 'put',
      key: key || id,
      value: {
        id,
      },
    });
  }

  deleteProject(key) {
    this._updates.push({
      action: 'delete',
      key,
    });
  }

  update() {
    if (this.isBusy || this._updates.length === 0) {
      return;
    }

    this.commit(this._updates);
    this._updates = [];
  }
}

export default ProjectStorage;
