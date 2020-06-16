---
layout: list
title: Projects
---

# Projects

<div class="row mb-5">
    <div class="col-md">
        <div class="card h-100 shadow" style="max-width: 22rem">
            <div class="card-img-top" style="padding: 10px">
                <img src="/images/projects/quest.png">
            </div>
            <div class="card-body h-100">
                <h5 class="card-title"><a href="quest">Quest</a></h5>
                <div class="card-text">A text adventure game system for the web and Windows</div>
                <div class="card-text">
                    <span class="badge badge-success">Open source</span>
                    <span class="badge badge-primary">C#</span>
                    <span class="badge badge-primary">ASP.NET MVC</span>
                    <span class="badge badge-primary">JavaScript</span>
                    <span class="badge badge-primary">WinForms</span>
                    <span class="badge badge-primary">WPF</span>
                    <span class="badge badge-primary">JQuery</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div>
<ul>
{% for project in site.projects reversed %}
<li><a href="{{project.url}}">{{ project.title }}</a></li>
{% endfor %}
</ul>
</div>