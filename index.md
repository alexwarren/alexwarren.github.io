---
layout: page
title: Alex Warren
---

<div class="jumbotron index-jumbotron">
    <h1 class="display-4">Alex Warren</h1>
</div>

Hello! I am Alex Warren, and I am a developer. I currently work at [Trainline](https://www.thetrainline.com/) as a team lead. Previously I worked at [Stack Overflow](https://stackoverflow.com) as a full-stack web developer, and before that I built [textadventures.co.uk](http://textadventures.co.uk) and the [Quest](https://github.com/textadventures/quest) text adventure engine.

<div class="row mb-5">
    <div class="col-md">
        <div class="card h-100 shadow">
            <div class="card-body h-100">
                <h5 class="card-title"><a href="/blog">Blog</a></h5>
                <ul>
                {% for post in site.posts limit:3 %}
                <li>
                <a href="{{ post.url }}">{{ post.title }}</a>
                </li>
                {% endfor %}
                </ul>
            </div>
            <div class="card-body">
                <a href="/blog" class="btn btn-primary">More Posts...</a>
            </div>
        </div>
    </div>
    <div class="col-md">
        <div class="card h-100 shadow">
            <div class="card-body h-100">
                <h5 class="card-title"><a href="/talks">Talks</a></h5>
                <ul>
                {% for post in site.talks reversed limit:3 %}
                <li>
                <a href="{{ post.url }}">{{ post.title }}</a>
                </li>
                {% endfor %}
                </ul>
            </div>
            <div class="card-body">
                <a href="/talks" class="btn btn-primary">More Talks...</a>
            </div>
        </div>
    </div>
    <div class="col-md">
        <div class="card h-100 shadow">
            <div class="card-body h-100">
                <h5 class="card-title"><a href="/projects">Projects</a></h5>
                <ul>
                    <li><a href="/projects/quest">Quest</a></li>
                    <li><a href="/projects/squiffy">Squiffy</a></li>
                    <li><a href="/projects/textadventures">textadventures.co.uk</a></li>
                </ul>
            </div>
            <div class="card-body">
                <a href="/projects" class="btn btn-primary">More Projects...</a>
            </div>
        </div>
    </div>
</div>

## Other Links

- [Twitter: @alexwarren](https://twitter.com/alexwarren)
- [GitHub: alexwarren](https://github.com/alexwarren)
- [Stack Overflow profile](https://stackoverflow.com/users/31280/alex-warren)
- [LinkedIn profile](https://www.linkedin.com/in/alexwarren/) and [CV](https://stackoverflow.com/cv/alexwarren)

You can email me at <alex@alexwarren.uk>.