import { assert } from 'chai';

import { Results } from 'zf-data';

import SessionMiddleware from '../src/SessionMiddleware.mjs';

class StorageMock {
  constructor(data) {
    this.data = {};

    if (typeof data !== 'undefined') {
      Object.entries(data).forEach(([key, value]) => {
        this.data[key] = JSON.stringify(value);
      });
    }
  }

  setItem(key, value) {
    assert.isString(value);
    this.data[key] = value;
  }

  getItem(key) {
    return this.data[key];
  }
}

describe('SessionMiddleware', function () {
  it('should construct', function () {
    const mw = new SessionMiddleware();
    assert.exists(mw);
  });

  async function makeSessionMiddleware(storageMock) {
    const mw = new SessionMiddleware(storageMock ?? new StorageMock());
    await mw.init();
    return mw;
  }

  describe('.init', function () {
    it('should initialize empty values', async function () {
      const storage = new StorageMock();
      const mw = await makeSessionMiddleware(storage);

      const {
        projectSession,
        clientSession,
        userSession,
      } = mw.context;

      assert.deepStrictEqual(projectSession.selections, []);
      assert.deepStrictEqual(projectSession.viewports, [{
        x: 0,
        y: 0,
        width: 1,
        height: 1,
      }]);

      assert.strictEqual(clientSession.projectId, null);

      assert.deepStrictEqual(userSession.projects, {});

      assert.exists(storage.data.clientSession);
      assert.exists(storage.data.userSession);
    });

    it('should read existing values', async function () {
      const data = {
        'projectSession.project': {
          selections: ['foo'],
          viewports: [{
            x: 100,
            y: 100,
            width: 256,
            height: 256,
          }],
        },
        clientSession: {
          projectId: 'project',
        },
        userSession: {
          projects: {
            project: {
              key: 'value',
            },
          },
        },
      };
      const storage = new StorageMock(data);
      const mw = await makeSessionMiddleware(storage);

      assert.deepStrictEqual(mw.context.projectSession, data['projectSession.project']);
      assert.deepStrictEqual(mw.context.clientSession, data.clientSession);
      assert.deepStrictEqual(mw.context.userSession, data.userSession);
    });
  });

  describe('.update', function () {
    it('should write to storage', async function () {
      const data = {
        'projectSession.new': {},
      };
      const storage = new StorageMock(data);
      const mw = await makeSessionMiddleware(storage);
      const update = new Results();

      update.addUserSessionUpdate({
        op: 'add',
        path: '/projects/new',
        value: {},
      });
      assert.changes(() => mw.update(update), storage.data, 'userSession');
      update.clear();

      update.addClientSessionUpdate({
        op: 'add',
        path: '/projectId',
        value: 'new',
      });
      assert.changes(() => mw.update(update), storage.data, 'clientSession');
      update.clear();

      update.addProjectSessionUpdate({
        op: 'replace',
        path: '/selections',
        value: ['foo'],
      });
      assert.changes(() => mw.update(update), storage.data, 'projectSession.new');
      update.clear();
    });

    it('should initialize project session on projectId change', async function () {
      const storage = new StorageMock();
      const mw = await makeSessionMiddleware(storage);

      const update = new Results();
      update.addClientSessionUpdate({
        op: 'add',
        path: '/projectId',
        value: 'new',
      });
      mw.update(update);

      assert.exists(storage.data['projectSession.new']);
    });

    it('should load project session on projectId change', async function () {
      const data = {
        'projectSession.project': {
          selections: ['foo'],
          viewports: [{
            x: 100,
            y: 100,
            width: 256,
            height: 256,
          }],
        },
        clientSession: {
          projectId: 'current',
        },
      };
      const storage = new StorageMock(data);
      const mw = await makeSessionMiddleware(storage);

      const update = new Results();
      update.addClientSessionUpdate({
        op: 'add',
        path: '/projectId',
        value: 'project',
      });
      mw.update(update);

      assert.deepStrictEqual(mw.context.projectSession, data['projectSession.project']);
    });
  });
});
