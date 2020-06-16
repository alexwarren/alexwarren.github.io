---
layout: list
title: Talks
---

# Talks

<ul>
{% for post in site.posts %}
{% if post.type == "talk" %}
<li>
<a href="{{ post.url }}">{{ post.title }}</a>
<span class="date">
{{ post.date | date: "%-d %B %Y" }}
</span>
</li>
{% endif %}
{% endfor %}
</ul>