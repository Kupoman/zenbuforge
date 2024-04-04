import * as uuid from 'uuid';

import * as ImGui from './extern/imgui.mjs';

import AbstractView from './AbstractView.mjs';
import * as Draw from './DrawProperty.mjs';

class ProjectListView extends AbstractView {
  constructor(options) {
    super('Projects', '', options);
    this.importUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Box/glTF-Embedded/Box.gltf';
    this.newProjectName = 'Untitled';
  }

  draw(model) {
    const updates = [];
    if (ImGui.BeginTable('Projects', 3)) {
      ImGui.TableSetupColumn('FirstButton', ImGui.TableColumnFlags.WidthFixed);
      ImGui.TableSetupColumn('SecondButton', ImGui.TableColumnFlags.WidthFixed);
      ImGui.TableSetupColumn('Name', ImGui.TableColumnFlags.WidthStretch);

      ImGui.TableNextColumn();

      ImGui.TableNextColumn();
      if (ImGui.Button('Create')) {
        updates.push({
          action: 'add',
          id: this.newProjectName,
          data: {
            id: uuid.v4(),
          },
        });
        this.newProjectName = '';
      }

      ImGui.TableNextColumn();
      Draw.Text('', this, 'newProjectName');
      ImGui.TableNextRow();

      Object.entries(model).forEach(([name, data]) => {
        ImGui.PushID(name);
        ImGui.TableNextColumn();
        if (ImGui.Button('Switch')) {
          updates.push({
            action: 'rpc',
            id: 'loadProject',
            data: [data.id],
          });
        }

        ImGui.TableNextColumn();
        if (ImGui.Button('Delete')) {
          updates.push({
            action: 'delete',
            id: name,
          });
        }

        ImGui.TableNextColumn();
        ImGui.Text(name);

        ImGui.TableNextRow();
        ImGui.PopID(name);
      });
      ImGui.EndTable();
    }

    if (ImGui.Button('Import')) {
      updates.push({
        action: 'rpc',
        id: 'loadFile',
        data: [this.importUrl],
      });
    }
    return updates;
  }
}

export default ProjectListView;
