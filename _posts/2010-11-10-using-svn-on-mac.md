--- 
layout: post
title: Using SVN on Mac
tags: []

status: publish
type: post
published: true
meta: 
  _edit_last: "17422583"
  jabber_published: "1289369556"
  _wp_old_slug: ""
---
Since I started working on the current project, I began using SVN on Mac to collaborating with other people.

If you're using Windows, you might want to try [Tortoisesvn](http://tortoisesvn.tigris.org/) which is a Windows explorer plugin helping you managing your svn code.

There is a similar project on Mac called [scplugin](http://scplugin.tigris.org/). But I haven't got a chance to try that yet.

Command line SVN is what I've tried. There is a detailed book about it on the web, and here is the [link](http://svnbook.red-bean.com/nightly/en/index.html). A typical set of working steps  are:

1. svn co
2. make some change
3. svn update
4. merge the code until it can compile
5. svn status
6. svn ci

The issue here is if you have something that you don't want it to be synced you have to make SVN ignore it first.

    svn ps svn:ignore x.pro .

Do not miss the dot at the end of this command line(Although I never successfully set the svn:ignore property).

XCode actually can import code from a SVN repository. Also it has a fancy diff functionality which can let user check what're the differences between local code and code from the repository. [Check it](http://developer.apple.com/tools/subversionxcode.html).
