import math

import browser
import emscripten

from direct.showbase.ShowBase import ShowBase
import panda3d.core as p3d


import simplepbr
import gltf


p3d.loadPrcFileData(
    '',
    'default-model-extension\n'
    'vfs-implicit-pz false\n'
    'model-path .\n'
)


class App(ShowBase):

    def __init__(self):
        super().__init__()

        gsg = self.win.get_gsg()
        extensions = [
            'EXT_color_buffer_float',
        ]
        for ext in extensions:
            if gsg.has_extension(ext):
                print(ext, 'is enabled')
            else:
                print(ext, 'is disabled')

        self.pipeline = simplepbr.init(
            use_330=True,
            use_hardware_skinning=False,
            msaa_samples=0
        )

        taskMgr.add(self.update_canvas, 'update_canvas_task')
        self.model_root = p3d.NodePath()

        self.accept('w', self.toggle_wireframe)
        self.accept('t', self.toggle_texture)
        self.accept('n', self.toggle_normal_maps)
        self.accept('e', self.toggle_emission_maps)
        self.accept('o', self.toggle_occlusion_maps)
        self.accept('a', self.toggle_ambient_light)
        self.accept('shift-l', self.model_ls)
        self.accept('shift-a', self.model_analyze)

        self.fetch_model()

    def fetch_model(self):
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
            self.load_model()
        def onerror(file):
            print(f'Unable to fetch ${file}')

        emscripten.async_wget(url, 'model', onload, onerror)


    def load_model(self):
        bamfilepath = 'scratch.bam'
        gltf_settings = None
        loader_kwargs = {
        }
        with open(bamfilepath, 'w') as bamfile:
            try:
                gltf.converter.convert(p3d.Filename('.', 'model'), bamfilepath, gltf_settings)
                self.model_root = loader.load_model(p3d.Filename('.', bamfilepath), **loader_kwargs)
            except:
                raise RuntimeError("Failed to convert glTF file")

        self.model_root.reparent_to(self.render)

        bounds = self.model_root.getBounds()
        center = bounds.get_center()
        if bounds.is_empty():
            radius = 1
        else:
            radius = bounds.get_radius()

        fov = self.camLens.get_fov()
        distance = radius / math.tan(math.radians(min(fov[0], fov[1]) / 2.0))
        self.camLens.set_near(min(self.camLens.get_default_near(), radius / 2))
        self.camLens.set_far(max(self.camLens.get_default_far(), distance + radius * 2))
        trackball = self.trackball.node()
        trackball.set_origin(center)
        trackball.set_pos(0, distance, 0)
        trackball.setForwardScale(distance * 0.006)

        # Create a light if the model does not have one
        if not self.model_root.find('**/+Light'):
            self.light = self.render.attach_new_node(p3d.PointLight('light'))
            self.light.set_pos(distance, -distance, distance)
            self.render.set_light(self.light)

        # Move lights to render
        self.model_root.clear_light()
        for light in self.model_root.find_all_matches('**/+Light'):
            light.parent.wrt_reparent_to(self.render)
            self.render.set_light(light)

        # Add some ambient light
        self.ambient = self.render.attach_new_node(p3d.AmbientLight('ambient'))
        self.ambient.node().set_color((.2, .2, .2, 1))
        self.render.set_light(self.ambient)

        if self.model_root.find('**/+Character'):
            self.anims = p3d.AnimControlCollection()
            p3d.autoBind(self.model_root.node(), self.anims, ~0)
            if self.anims.get_num_anims() > 0:
                self.anims.get_anim(0).loop(True)

    def toggle_normal_maps(self):
        self.pipeline.use_normal_maps = not self.pipeline.use_normal_maps

    def toggle_emission_maps(self):
        self.pipeline.use_emission_maps = not self.pipeline.use_emission_maps

    def toggle_occlusion_maps(self):
        self.pipeline.use_occlusion_maps = not self.pipeline.use_occlusion_maps

    def toggle_ambient_light(self):
        if self.render.has_light(self.ambient):
            self.render.clear_light(self.ambient)
        else:
            self.render.set_light(self.ambient)

    def model_ls(self):
        self.model_root.ls()

    def model_analyze(self):
        self.model_root.analyze()

    def update_canvas(self, task):
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
        self.win.requestProperties(props)

        return task.cont


def main():
    App().run()

if __name__ == '__main__':
    main()
