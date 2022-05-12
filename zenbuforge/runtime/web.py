import json

import browser     # pylint: disable=import-error
import emscripten  # pylint: disable=import-error
import panda3d.core as p3d


def _list_uris(filename):
    gltf = {}
    uris = set()
    with open(filename, 'r', encoding='utf-8') as fin:
        gltf = json.load(fin)

    def _walk_json(source, callback=None):
        callback(source)
        if isinstance(source, dict):
            for value in source.values():
                _walk_json(value, callback)
        elif isinstance(source, list):
            for value in source:
                _walk_json(value, callback)

    def print_values(source):
        if isinstance(source, dict) and 'uri' in source:
            uris.add(source['uri'])

    _walk_json(gltf, callback=print_values)
    return uris


def _fetch_uris(base, uris, callback):
    completed = []

    def check_complete(file):
        completed.append(file)
        print(f'Fetched {file}')
        if len(completed) == len(uris):
            print('All references fetched')
            callback()

    def onerror(file):
        print(f'Unable to fetch ${file}')

    for uri in uris:
        full_uri = f'{base}/{uri}'
        print(f'Fetching {full_uri}')
        emscripten.async_wget(full_uri, uri, check_complete, onerror)

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
            def on_ref_fetched():
                callback(p3d.Filename('.', 'model'))
            base = url.replace(url.split('/')[-1], '')
            uris = _list_uris('model')
            _fetch_uris(base, uris, on_ref_fetched)
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
