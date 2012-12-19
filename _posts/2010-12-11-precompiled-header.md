--- 
layout: post
title: Precompiled Header
tags: []

status: publish
type: post
published: true
meta: 
  _edit_last: "17422583"
  jabber_published: "1292049881"
---
Suffering CGAL's slow compilation time caused by heavily using C++ template, I turn for other's help and start to use precompiled header.

Precompiled header is a compiling technic for people to group their most likely to be used and least likely to be modified `#include` and `#define` statements in a separate header file. Letting compiler compile the file first before compiling any other files will reduce the compilation time.

The thing you have to pay attention when doing this is :

When issue a pre-compilation, flags must be exact the same as you compile other files. For example, If you are compiling CGAL program in this way:

    gcc-4.2 -x c++ -arch x86_64 -fmessage-length=0 -pipe -Wno-trigraphs -fpascal-strings -fasm-blocks -Os -mdynamic-no-pic -fvisibility=hidden -fvisibility-inlines-hidden -gdwarf-2 -frounding-math -c P3D.cpp -o P3D.o

you probably want to compile the precompiled header in this way:

    gcc-4.2 -x c++ -arch x86_64 -fmessage-length=0 -pipe -Wno-trigraphs -fpascal-strings -fasm-blocks -Os -mdynamic-no-pic -fvisibility=hidden -fvisibility-inlines-hidden -gdwarf-2 -frounding-math -c stdafx.h -o stdafx.h.gch

This means when you changed from Debug Mode to Release Mode, the precompiled header must be recompiled.

Another thing is you have to include `stdafx.h` before including any other headers every time you need this header.

Using precompiled header in Xcode in relatively easy. The steps are stated [here](http://serenity.uncc.edu/web/ADC/2005/Developer_DVD_Series/April/ADC%20Reference%20Library/documentation/DeveloperTools/Conceptual/Build_System/Precompiled_Headers/pch.html)
