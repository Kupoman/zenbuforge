import {
  openDB,
} from 'idb';

const VERSION = 1;
const DB_NAME = 'zenbuforge';
const STORE_NAME = 'projects';

class ProjectListModel {
  constructor() {
    this.db = null;
    this.isBusy = false;
    this._updates = [];
    this._projects = {};
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
        store.delete(update.id);
      }
      if (update.action === 'add') {
        store.put(update.data, update.id);
      }
    });
    await this.refreshProjects();
    this.isBusy = false;
  }

  getViewProxy() {
    return this._projects;
  }

  applyUpdates(updates) {
    this._updates.push(...updates);

    if (this.isBusy || this._updates.length === 0) {
      return;
    }

    this.commit(this._updates);
    this._updates = [];
  }
}

export default ProjectListModel;
