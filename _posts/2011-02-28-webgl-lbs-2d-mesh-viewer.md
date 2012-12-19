--- 
layout: post
title: "WebGL LBS: 2D Mesh Viewer"
tags: []

status: publish
type: post
published: true
meta: 
  _edit_last: "17422583"
  jabber_published: "1298925439"
---
Since my recent project on graphics is Linear Blend Skinning based General Armature, I am planning to put it on web.

[WebGL](http://www.khronos.org/webgl/) is part of HTML5. it is based on OpenGL ES. It provides a probability that future 3D applications can be easily get accessed over the internet. Learning that is relatively easy since it is similar to OpenGL. Here is how to start:

[Learning WebGL Lessons](http://learningwebgl.com/blog/?page_id=1217)

[Mozilla's WebGL Doc Center](https://developer.mozilla.org/en/WebGL)

[API Reference](http://www.khronos.org/opengles/sdk/docs/man/)

I found the first one extremely useful. The Mozilla's Doc has some out-dated pages but still worth reading.

The hard part is it's only the experimental version of WebGL API, there is no standard utility libraries such as GLU and GLUT. I don't want to use much of the 3rd party libraries. Plus OpenGL ES is not as powerful as OpenGL(Some of the most frequently used API in OpenGL can not be found in OpenGL ES. In Fact, OpenGL ES was developed for mobile application), Programming on WebGL may be a little difficult.

The first step of doing such a project is getting a mesh viewer working based on WebGL. [Viewer](http://cims.nyu.edu/~ys958/) is a 2D Mesh viewer prototype (of course with my over simplified interface). It can read from a Obj file and put it to the webpage.

Try it your self! Here are some OBJ file:
[alligator](http://cims.nyu.edu/~ys958/models/alligator.obj)
[ginger-bread-man](http://cims.nyu.edu/~ys958/models/ginger-bread-man.obj)
[hand-skeleton](http://cims.nyu.edu/~ys958/models/hand-skeleton.obj)

[In HTML5 there is a new way for javascript to read local files](http://www.w3.org/TR/FileAPI/). It has never been this convenient. Currently you have 3 ways of loading a file:

1. Just drag a file and drop it to the webpage!
2. Click the `choose File` button and load one.
3. Click `Load OBJ` button and paste the content of the OBJ file into the pop-up window.(Actually this is not `loading file`).

Leave the lower div alone. It is a viewer using [THREE.js](https://github.com/mrdoob/three.js/).
