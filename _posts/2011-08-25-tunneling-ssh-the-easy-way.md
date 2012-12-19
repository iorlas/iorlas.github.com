--- 
layout: post
title: Tunneling SSH The Easy Way
tags: []

status: publish
type: post
published: true
meta: 
  _edit_last: "17422583"
  jabber_published: "1314241081"
---
One of the benefits of having an academic ssh account is that I can use it to access library resources such as papers on [Springer](http://www.springer.com/).

A simple way of doing that is using it as a proxy through ssh tunnel. All you need is [Openssh](http://www.openssh.com/). It is available in either * nix or Windows(Cygwin).

1.
  Creating a tunnel

      ssh -ND 9999 username@university.edu

  In which `9999` is the proxy port you created locally.

2.
  Use it in browser. The proxy address should be

      localhost:9999

  Just make sure you are using SOCKS5 proxy option.

Another annoying thing is that every time I try to establish a ssh connection, it asks for my password. Here is a [solution](http://linuxproblem.org/art_9.html).

Basically what it does is first generate a local key:

    ssh-keygen -t rsa

Then append it to the remote server's `authorized_keys` file

    cat ~/.ssh/id_rsa.pub | ssh username@university.edu 'cat >> .ssh/authorized_keys'
