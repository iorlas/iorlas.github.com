---
layout: page
title: Yang Song's blog
group: index
---
{% for post in site.posts limit:3 %}
  <div class="post">
    <h2><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h2>
    <div class="body">
      {{ post.content }}
    </div>
    <div class="meta">
      Posted on {{ post.date | date_to_string }}
    </div>
  </div>
  <hr>
{% endfor %}
<ul class="pager">
  <li class="previous">
    <a href="{{ site.baseurl }}/archive/">Read More</a>
  </li>
</ul>
