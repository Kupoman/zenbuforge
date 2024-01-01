import {
  openDB,
} from 'idb';

class ProjectData {
  constructor() {
    this.db = null;
    this._dbName = 'zenbuforge';
    this._storeName = 'projects';
  }

  async init() {
    this.db = await openDB(this._dbName, 0, {
      upgrade(db) {
        const store = db.createObjectStore(this._storeName);
        store.put('demo', {});
      },
    });
  }

  async getProjects() {
    const keys = await this.db.transaction(this._storeName)
      .objectStore(this._storeName)
      .getAll();
    const values = await this.db.transaction(this._storeName)
      .objectStore(this._storeName)
      .getAll();

    return keys.flatten((acc, key, index) => acc[key] = values[index], {});
  }
}

export default ProjectData;
