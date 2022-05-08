import browser     # pylint: disable=import-error
import emscripten  # pylint: disable=import-error
import panda3d.core as p3d


class WebRuntime():
    def __init__(self, base):
        self._base = base

        gsg = self._base.win.get_gsg()
        extensions = [
            'EXT_color_buffer_float',
        ]
        for ext in extensions:
            if gsg.has_extension(ext):
                print(ext, 'is enabled')
            else:
                print(ext, 'is disabled')


    def fetch_model(self, callback):
        params = browser.Reflect.construct(
            browser.URLSearchParams,
            browser.Array(browser.window.location.search)
        )
        url = params.get('file')
        if not url:
            url = (
                'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/'
                'Box/glTF-Embedded/Box.gltf'
            )
        else:
            url = browser.decodeURI(url)

        def onload(_):
            callback(p3d.Filename('.', 'model'))
        def onerror(file):
            print(f'Unable to fetch ${file}')

        emscripten.async_wget(url, 'model', onload, onerror)

    def update(self, task):
        viewport_element = browser.window
        viewport_attribute = 'inner'
        if not viewport_element.innerWidth:
            viewport_attribute = 'client'
            viewport_element = (
                browser.document.documentElement if browser.document.documentElement
                else browser.document.body
            )
        width = viewport_element[f'{viewport_attribute}Width']
        height = viewport_element[f'{viewport_attribute}Height']

        canvas = browser.document.getElementById('canvas')
        canvas.width = width
        canvas.height = height

        props = p3d.WindowProperties()
        props.setSize(width, height)
        self._base.win.requestProperties(props)

        return task.cont
