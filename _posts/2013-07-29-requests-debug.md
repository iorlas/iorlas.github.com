---
published: true
layout: post
title: Requests(httplib3) debug output
---

Для отключения мусора, что может выдавать либа httplib3(из комплекта либы requests), достаточно просто добавить в любой значимый файл вот такой код:
{% highlight python %}
import logging
requests_log = logging.getLogger("requests")
requests_log.setLevel(logging.WARNING)
{% endhighlight %}