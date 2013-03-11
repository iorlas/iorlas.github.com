---
layout: post
title: Python: Quack Quack
published: false
---

2.6
>>> class test(object):
...     def next(self):
...             pass
... 
>>> from collections import Iterator
>>> isinstance(test(), Iterator)
True

2.7
>>> class test(object):
...     def next(self):
...             pass
... 
>>> from collections import Iterator
>>> isinstance(test(), Iterator)
False

2.7
>>> class test(object):
...     def next(self):
...             pass
...     def __iter__(self):
...             pass
... 
>>> isinstance(test(), Iterator)
True