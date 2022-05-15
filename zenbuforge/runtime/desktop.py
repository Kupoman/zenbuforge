import sys


class DesktopRuntime():
    def __init__(self, base):
        self._base = base

    def fetch_model(self, callback):
        with open(sys.argv[1], 'rb') as stream:
            callback(stream)

    def update(self, task):
        return task.cont
