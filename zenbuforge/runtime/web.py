import importlib

import browser
import emscripten
import panda3d.core as p3d


class WebRuntime():
    def fetch_model(self, callback):
        params = browser.Reflect.construct(
            browser.URLSearchParams,
            browser.Array(browser.window.location.search)
        )
        url = params.get('file')
        if not url:
            url = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Embedded/Box.gltf'
        else:
            url = browser.decodeURI(url)

        def onload(file):
            callback(p3d.Filename('.', 'model'))
        def onerror(file):
            print(f'Unable to fetch ${file}')

        emscripten.async_wget(url, 'model', onload, onerror)

    def update(self, base, task):
        viewportElement = browser.window
        viewportAttribute = 'inner'
        if not viewportElement.innerWidth:
            attribute = client
            viewportElement = (
                browser.document.documentElement if browser.document.documentElement
                else browser.document.body
            )
        width = viewportElement[f'{viewportAttribute}Width']
        height = viewportElement[f'{viewportAttribute}Height']

        canvas = browser.document.getElementById('canvas')
        canvas.width = width
        canvas.height = height

        props = p3d.WindowProperties()
        props.setSize(width, height)
        base.win.requestProperties(props)

        return task.cont
