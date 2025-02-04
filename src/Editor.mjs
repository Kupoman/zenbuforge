import Quaternion from 'quaternion';
import { Context, Results } from 'zf-data';

class Editor {
  constructor(dependencies, middlewares) {
    this.system = dependencies.system;

    this.context = new Context();
    this.context.enableProjectData();
    this.context.enableProjectSession();
    this.context.enableClientSession();
    this.context.enableUserSession();
    this.context.enableScratchSession();

    this.middlewares = middlewares;

    if (this.system) {
      this.middlewares.push(this.system);
    }

    this.prevTime = 0;

    this.updates = new Results();

    this.triggers = [
      {
        test: /(add|update):\/nodes\/[^/]*\/extras\/rotationEuler/,
        action: (update, results) => {
          const [, , id] = update.path.split('/');
          const valueRad = update.value.map((v) => (Math.PI * v) / 180);
          const quat = Quaternion.fromEuler(...valueRad, 'XYZ');

          results.addProjectDataUpdate({
            op: 'add',
            path: `/nodes/${id}/rotation`,
            value: [quat.x, quat.y, quat.z, quat.w],
          });
        },
      },
    ];
  }

  async init() {
    await Promise.all(this.middlewares.map(async (middleware) => {
      this.updates.mergeResults(await middleware.init());
    }));
  }

  handleTriggeredUpdates(results) {
    results.projectData.forEach((update) => {
      const key = `${update.op}:${update.path}`;
      this.triggers.forEach((trigger) => {
        if (trigger.test.test(key)) {
          trigger.action(update, results);
        }
      });
    });
  }

  async update(time) {
    const dt = (time - this.prevTime) / 1000;
    this.prevTime = time;

    this.updates.addScratchSessionUpdate({
      op: 'add',
      path: '/dt',
      value: dt,
    });

    this.context.update(this.updates);
    const results = new Results();

    this.middlewares.forEach((middleware) => {
      results.mergeResults(middleware.update(this.updates));
    });

    this.handleTriggeredUpdates(results);

    this.updates.clear();
    this.updates.mergeResults(results);
  }
}

export default Editor;
