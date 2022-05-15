# Zenbuforge
One day I hope to see this project turn into a platform for collaborative game development.
For now it is a simple glTF viewer.

To load a model, reference it with the `file` query parameter:
```
https://kupoman.github.io/zenbuforge/?file=https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF-Binary/Duck.glb
```
For now, only embedded and binary glTF files are supported.
Any file that references additional files, such as textures, outside of the file will not work.
