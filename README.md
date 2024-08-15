# Zenbuforge Level
Zenbuforge Level is a collaborative 3D level editor.
It is based on the glTF format and is designed to allow users to create 3D levels together for any game engine that supports glTF import.
This project is still in its very early stages and is not intended for anything close to a production work flow.
Everything in this project is subject to change.

## Viewport controls
* Q: Move camera down
* E: Move camera up
* W: Move camera forward
* A: Move camera left
* S: Move camera backward
* D: Move camera right
* Arrow Keys: Rotate camera

## Real time collaboration
Real time collaboration is done using WebRTC and Yjs.
In order to connect multiple instances together, you will need to setup the signaling server found in the [y-webrtc](https://github.com/yjs/y-webrtc) project with a proper certificate.
Once a signaling server is setup, you can connect to it by specifying it in the server property of a project.
A Google STUN server is automatically used, but no TURN server is being used at this time.
