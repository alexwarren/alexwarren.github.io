### <a href="{{ include.url }}">{{ include.title }}</a></h2>

<div class="date">
{{ include.date | date: "%-d %B %Y" }}
</div>

{{ include.excerpt }}

<a href="{{ include.url }}">Read more...</a>