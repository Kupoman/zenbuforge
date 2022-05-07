from .web import WebRuntime
from .desktop import DesktopRuntime


def make():
    return WebRuntime()
