---
layout: default
---
{% for post in site.posts limit:5 %}
  <div class="post">
    <h3><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> <small>@ {{ post.date }}</small></h3>
    <div>{{ post.excerpt }}</div>
    <div class="pagination">
      <ul><li><a href="{{ post.url }}">Читать дальше</a></li></ul>
    </div>
  </div>
{% endfor %}