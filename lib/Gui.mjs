import * as ImGui from './imgui.mjs';
import * as ImGuiCanvas from './imgui_impl.mjs';

import ProjectStorage from './ProjectStorage.mjs';
import * as Draw from './DrawProperty.mjs';

class Gui {
  constructor(canvas, dataState, commands) {
    this.canvas = canvas;
    this.dataState = dataState;
    this.commands = commands;
    this.selection = null;

    this.projectInput = {
      isManagerActive: true,
      newProjectName: '',
    };
    this.projectStorage = new ProjectStorage();
    this.projectActions = [
      {
        name: 'Manage',
        callback: () => {
          this.projectInput.isManagerActive = true;
        },
      },
      {
        name: 'Import',
        callback: () => {},
      },
    ];

    this.width = 100;
    this.height = 100;

    this._isActive = false;
  }

  async init() {
    await ImGui.default();
    ImGui.CreateContext();
    ImGui.StyleColorsDark();
    ImGuiCanvas.Init(this.canvas);

    await this.projectStorage.init();
  }

  render() {
    ImGuiCanvas.RenderDrawData(ImGui.GetDrawData());
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }

  drawProjectDialog() {
    ImGui.SetNextWindowSize(new ImGui.ImVec2(400, 0));
    ImGui.Begin('Projects', null, ImGui.WindowFlags.AlwaysAutoResize);
    const projects = this.projectStorage.getProjects();

    if (ImGui.BeginTable('Projects', 3)) {
      ImGui.TableSetupColumn('FirstButton', ImGui.TableColumnFlags.WidthFixed);
      ImGui.TableSetupColumn('SecondButton', ImGui.TableColumnFlags.WidthFixed);
      ImGui.TableSetupColumn('Name', ImGui.TableColumnFlags.WidthStretch);

      ImGui.TableNextColumn();

      ImGui.TableNextColumn();
      if (ImGui.Button('Create')) {
        this.projectStorage.addProject(this.projectInput.newProjectName);
        this.projectInput.newProjectName = '';
      }

      ImGui.TableNextColumn();
      Draw.Text('', this.projectInput, 'newProjectName');
      ImGui.TableNextRow();

      Object.entries(projects).forEach(([name, data]) => {
        ImGui.PushID(name);
        ImGui.TableNextColumn();
        if (ImGui.Button('Switch')) {
          this.commands.loadProject(data);
        }

        ImGui.TableNextColumn();
        if (ImGui.Button('Delete')) {
          this.projectStorage.deleteProject(name);
        }

        ImGui.TableNextColumn();
        ImGui.Text(name);

        ImGui.TableNextRow();
        ImGui.PopID(name);
      });
      ImGui.EndTable();
    }

    if (ImGui.Button('Close')) {
      this.projectInput.isManagerActive = false;
    }
  }

  drawAssetPanel() {
    const sections = [
      'scenes',
      'nodes',
      'meshes',
      'materials',
      'textures',
      'cameras',
    ];

    ImGui.SetNextWindowPos(new ImGui.ImVec2(0, 0));
    ImGui.SetNextWindowSize(new ImGui.ImVec2(200, this.height));
    ImGui.Begin('Project', null, ImGui.WindowFlags.AlwaysAutoResize);

    if (ImGui.IsWindowFocused()) {
      this._isActive = true;
    }

    if (this.dataState.isInitialized()) {
      ImGui.Text('Actions');
      this.projectActions.forEach((action) => {
        ImGui.PushID(action.name);
        if (ImGui.Button(action.name)) {
          action.callback();
        }
        ImGui.PopID(action.name);
      });

      ImGui.Text('Data');
      sections.forEach((sectionId) => {
        if (ImGui.TreeNode(sectionId.toUpperCase())) {
          this.dataState[sectionId].forEach((item, id) => {
            const name = item.get('name') || id;
            if (ImGui.Selectable(name)) {
              this.selection = item;
            }
          });
          ImGui.TreePop();
        }
      });

      if (ImGui.TreeNode('Users')) {
        this.dataState.getUsers().forEach((user) => {
          const tag = user.isLocal ? '(You)' : '';
          if (ImGui.Selectable(`${user.username}${tag}`)) {
            this.selection = user;
          }
        });
      }
    } else {
      ImGui.Text('Loading File');
    }

    ImGui.End();
  }

  drawDetailPanel() {
    ImGui.SetNextWindowPos(new ImGui.ImVec2(this.width - 300, 0));
    ImGui.SetNextWindowSize(new ImGui.ImVec2(300, this.height));
    ImGui.Begin('Details');

    if (ImGui.IsWindowFocused()) {
      this._isActive = true;
    }

    if (this.selection) {
      this.selection.drawEditor();
    }

    ImGui.End();
  }

  update(elapsedTime) {
    this._isActive = false;
    if (this.dataState.isInitialized() && !this.selection) {
      this.selection = this.dataState.nodes[0];
      //this.selection = this.dataState.asset;
    }
    ImGuiCanvas.NewFrame(elapsedTime);
    ImGui.NewFrame();

    this.drawAssetPanel();
    this.drawDetailPanel();
    if (this.projectInput.isManagerActive) {
      this.drawProjectDialog();
      this.projectStorage.update();
    }

    ImGui.EndFrame();
    ImGui.Render();
  }

  isActive() {
    return this._isActive;
  }
}

export default Gui;
