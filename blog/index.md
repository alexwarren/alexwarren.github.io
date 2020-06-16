---
layout: list
title: Blog
redirect_from: "/writing/"
---

# Blog

{% for post in site.posts %}
{% assign currentdate = post.date | date: "%Y" %}
{% if currentdate != date %}
{% unless forloop.first %}</ul>{% endunless %}
<h2 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h2>
<ul>
{% assign date = currentdate %}
{% endif %}
<li>
<a href="{{ post.url }}">{{ post.title }}</a>
<span class="date">{{ post.date | date: "%-d %B %Y" }}</span>
</li>
{% if forloop.last %}</ul>{% endif %}
{% endfor %}