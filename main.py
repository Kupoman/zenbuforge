import math
from direct.showbase.ShowBase import ShowBase
import panda3d.core as p3d


import simplepbr
import gltf


import zenbuforge


p3d.loadPrcFileData(
    '',
    'default-model-extension\n'
    'vfs-implicit-pz false\n'
    'model-path .\n'
)


class App(ShowBase):

    def __init__(self):
        super().__init__()

        self.runtime = zenbuforge.runtime.make(self)

        self.pipeline = simplepbr.init(
            use_330=True,
            use_hardware_skinning=False,
            msaa_samples=0
        )

        self.taskMgr.add(self.runtime.update, 'Update Runtime')
        self.model_root = p3d.NodePath()
        self.light = p3d.NodePath()
        self.ambient = p3d.NodePath()
        self.anims = p3d.AnimControlCollection()

        self.accept('w', self.toggle_wireframe)
        self.accept('t', self.toggle_texture)
        self.accept('n', self.toggle_normal_maps)
        self.accept('e', self.toggle_emission_maps)
        self.accept('o', self.toggle_occlusion_maps)
        self.accept('a', self.toggle_ambient_light)
        self.accept('shift-l', self.model_ls)
        self.accept('shift-a', self.model_analyze)

        self.runtime.fetch_model(self.load_model)


    def load_model(self, filename):
        bamfilepath = 'scratch.bam'
        gltf_settings = None
        loader_kwargs = {
        }
        with open(bamfilepath, 'wb'):
            try:
                gltf.converter.convert(filename, bamfilepath, gltf_settings)
                self.model_root = self.loader.load_model(
                    p3d.Filename('.', bamfilepath),
                    **loader_kwargs
                )
            except Exception as error:
                raise RuntimeError("Failed to convert glTF file") from error

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


def main():
    App().run()

if __name__ == '__main__':
    main()
