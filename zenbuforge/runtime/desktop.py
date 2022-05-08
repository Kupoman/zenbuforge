import sys

import panda3d.core as p3d


class DesktopRuntime():
    def __init__(self, base):
        self._base = base

    def fetch_model(self, callback):
        callback(sys.argv[1])

    def update(self, task):
        return task.cont
