import sys

import panda3d.core as p3d


class DesktopRuntime():
    def fetch_model(self, callback):
        callback(sys.argv[1])

    def update(self, base, task):
        return task.cont
