from .desktop import DesktopRuntime

RUNTIME = DesktopRuntime
try:
    from .web import WebRuntime
    RUNTIME = WebRuntime
except ImportError:
    pass


def make():
    return RUNTIME()
