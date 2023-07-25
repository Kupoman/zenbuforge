import math

import direct
from direct.showbase.ShowBaseGlobal import globalClock


class OrbitCameraController(direct.showbase.DirectObject.DirectObject):
    def __init__(self, camera_np, mouse_watcher, window):
        self.x_sensitivity = 10000
        self.y_sensitivity = 10000
        self.zoom_sensitivity = 0.05

        self.heading = 0
        self.pitch = 0
        self.distance = 0
        self._target = camera_np.parent.attach_new_node('camera_target')
        self._camera = camera_np
        self._mw = mouse_watcher
        self._window = window
        self._prev_x = 0
        self._prev_y = 0

        self._camera.reparent_to(self._target)
        direct.task.TaskManagerGlobal.taskMgr.add(self.update, 'Update Camera')

        self._is_rotating = False
        self.accept('mouse1', self.start_rotation)
        self.accept('mouse1-up', self.end_rotation)
        self.accept('wheel_up', self.zoom_in)
        self.accept('wheel_down', self.zoom_out)

    def start_rotation(self):
        self._is_rotating = True
        if self._mw.has_mouse():
            self._prev_x = self._mw.get_mouse_x()
            self._prev_y = self._mw.get_mouse_y()

    def end_rotation(self):
        self._is_rotating = False

    def zoom_in(self):
        self.distance = self.distance * (1.0 - self.zoom_sensitivity)

    def zoom_out(self):
        self.distance = self.distance * (1.0 + self.zoom_sensitivity)

    def set_target_pos(self, pos):
        self._target.set_pos(pos)

    def focus_model(self, model):
        cam_lens = self._camera.find('**/+Camera').node().get_lens()
        bounds = model.getBounds()
        center = bounds.get_center()
        if bounds.is_empty():
            radius = 1
        else:
            radius = bounds.get_radius()

        fov = cam_lens.get_fov()
        distance = radius / math.tan(math.radians(min(fov[0], fov[1]) / 2.0))
        cam_lens.set_near(min(cam_lens.get_default_near(), radius / 2))
        cam_lens.set_far(max(cam_lens.get_default_far(), distance + radius * 2))
        self.set_target_pos(center)
        self.distance = distance

    def update(self, task):
        dt = globalClock.get_dt()
        if self._is_rotating and self._mw.has_mouse():
            cur_x = self._mw.get_mouse_x()
            self.heading = self.heading - (cur_x - self._prev_x) * dt * self.x_sensitivity
            self._prev_x = cur_x

            cur_y = self._mw.get_mouse_y()
            self.pitch = self.pitch + (cur_y - self._prev_y) * dt * self.y_sensitivity
            self._prev_y = cur_y

            # Wrap around cursor
            win_size = self._window.get_properties().get_size()
            abs_x = int((cur_x + 1.0) * 0.5 * win_size.x)
            abs_y = int((-cur_y + 1.0) * 0.5 * win_size.y)
            self._window.move_pointer(0, abs_x % win_size.x, abs_y % win_size.y)

        self._target.set_hpr(self.heading, self.pitch, 0)
        self._camera.set_pos(0, -self.distance, 0)
        self._camera.look_at(self._target)

        return task.cont
