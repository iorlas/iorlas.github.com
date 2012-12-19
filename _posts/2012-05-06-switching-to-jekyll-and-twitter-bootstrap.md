--- 
layout: post
title: Switching to Jekyll and Twitter Bootstrap
tags: []

comments: true
status: publish
type: post
published: true
---
After 2 days of work I finally switched my blog from wordpress to Jekyll and Twitter Bootstrap.

I was impressed by the simplicity of generating static webpages by [Jekyll](http://jekyllrb.com/) after reading [an introduction to github pages](http://help.github.com/pages/). Then I did some research on static page generator and Jekyll's resources. I had an initial idea that was to use [Jekyllbootstrap](http://jekyllbootstrap.com/) as the new framework of my blog. But it turns out that after playing with it for a while, I removed most of the code from Jekyllbootstrap, and made my own template that based on Jekyll only. I also generated my customized [Twitter Bootstrap style sheet](http://twitter.github.com/bootstrap/) instead. Without all the serverside code and access to remote SQL server, my blog now is stupid fast.

Another objective of using static page generator like Jekyll is that I want to deploy the blog to remote server with one command. With the help of [a tutorial](http://ryanflorence.com/deploying-websites-with-a-tiny-git-hook/) I've made `~/public_html/` a git clone of the blog repository. I encounter [a updating denied problem](http://www.mail-archive.com/frugalware-devel@frugalware.org/msg04465.html) later, but it is very easy to solve. I just simply did this on remote server:

    git config receive.denycurrentbranch ignore

Now there's another issue about the url: my blog lies under `/_site/` instead of `/`. I have to modify the `.htaccess` file in `~/public_html/` folder in the [this](https://my.bluehost.com/cgi/help/347) way to make a Apache server redirect(ReWrite).

[I've shared the whole folder on Github](https://github.com/yordaa/www.cs.utah.edu--yangsong-/). Make a fork!
