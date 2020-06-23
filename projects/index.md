---
layout: list
title: Projects
---

# Projects

<div class="row row-cols-1 row-cols-md-2">
    {% for project in site.projects reversed %}
        <div class="col mb-4">
            <div class="card h-100">
                {% if project.logo %}
                <div class="card-img-top project-logo">
                    <a href="{{project.url}}">
                    <img src="/images/projects/{{ project.logo }}" class="project-logo">
                    </a>
                </div>
                {% endif %}
                <div class="card-body">
                    <h5 class="card-title"><a href="{{project.url}}">{{ project.title }}</a></h5>
                    <div class="card-text">{{ project.description }}</div>
                    <div class="card-text">
                        {% for tag in project.techtags %}
                        <span class="badge badge-primary">{{ tag }}</span>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    {% endfor %}
</div>