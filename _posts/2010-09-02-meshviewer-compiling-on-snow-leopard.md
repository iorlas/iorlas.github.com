--- 
layout: post
title: Meshviewer compiling on Snow Leopard
tags: []

status: publish
type: post
published: true
meta: 
  blogger_blog: yordaa.blogspot.com
  blogger_author: yordaa
  blogger_351e74465ea8c1bd2be5fdeb8472a66c_permalink: "3347020540032668719"
  _edit_last: "17422583"
  _oembed_4cf430fafd37874e31d2796490a71f8f: "{{unknown}}"
  _oembed_3e2c9e37a7b9793e9a2e257e9f790086: "{{unknown}}"
  _oembed_bf99278ebd81939cff7eb2b2990f831d: "{{unknown}}"
  _oembed_e8477d18392bc697727be3837b6ec292: "{{unknown}}"
---
This is a memo for successfully compiling the Meshviewer.

Meshviewer depends on several libraries and software installed before compiling. Here is the list:

- Python
- Qt
- PyQt
- CGAL
- TAUCS
- SWIG
- Boost

All of them except TAUCS which is a high performance parse matrix linear solver can be found in macports. So let's start from [installing macports](http://www.macports.org/install.php).

After that install 6 of the 7 packages list above, it may be a very time consuming work:

    sudo port install python26
    sudo port install python_select
    sudo python_select python26
    sudo port install py26-opengl
    sudo port install py26-pyqt4
    sudo port install swig-python
    sudo port install boost +python26
    sudo port install cgal

Now turn to the hard part -- compiling `TAUCS`. [Alec's instructions](http://www.alecjacobson.com/weblog/?p=1183) are very useful, and so are the [comments](http://www.alecjacobson.com/weblog/?p=1191). It seems everything is prepared. But before we began compiling Meshview, let's do a little modification to `boost+python` installed by macports.

    sudo mv /usr/lib/libpython2.6.dylib /usr/lib/libpython2.6.dylib_sys
    sudo ln -s /opt/local/lib/libpython2.6.dylib /usr/lib/libpython2.6.dylib

It is due to [a bug issued by macports](https://trac.macports.org/ticket/21444) but still not fully fixed.

Now let's move to the Meshviewer folder. Edit `CONFIG.cmake` to make it fit all libraries. Also, make sure to use `-arch x86_64` flag for compiler and linker.

    cmake .
    make
    ./window.py

Finished!
