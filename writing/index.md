---
layout: index
title: Writing
---

# Writing

<ul>
	{% for post in site.posts %}
	<li>
		<a href="{{ post.url }}">{{ post.title }}</a>
		<span class="date">{{ post.date | date: "%-d %B %Y" }}</span>
	</li>
	{% endfor %}
</ul>