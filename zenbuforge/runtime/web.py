import io

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
                'Box/glTF-Binary/Box.glb'
            )
        else:
            url = browser.decodeURI(url)

        def onload(_, buffer):
            callback(io.BytesIO(buffer.tobytes()))
        def onerror(_, code, description):
            print(f'Unable to fetch ${url}: ({code}) {description}')
        def onprogress(_, bytes_loaded, bytes_total):
            if bytes_total > 0:
                print(f'File progress: {(bytes_loaded / bytes_total) * 100 :.0f}%')

        emscripten.async_wget2_data(
            url=url,
            requesttype='GET',
            param='',
            onload=onload,
            onerror=onerror,
            onprogress=onprogress,
        )

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
