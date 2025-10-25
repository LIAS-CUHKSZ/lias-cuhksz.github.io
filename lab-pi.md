---
title: Lab PI
layout: labpi
show_sidebar: false
hide_footer: false
hero_height: is-small
---

<h1 style="font-size:35px;">Faculty</h1>
<br>
<div class="columns is-multiline">
  {% assign sorted_faculty = site.team | where:"category","lab_head" %}
  {% for person in sorted_faculty %}
  <div class="column is-3-desktop is-6-tablet">
    <a href="{{ person.url | prepend: site.baseurl }}">
      <div class="card">
        {% if person.image %}
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="{{ person.image }}" alt="{{ person.title }}" />
          </figure>
        </div>
        {% endif %}
        <div class="card-content">
          <p class="title is-5">{{ person.title }}</p>
          <p class="subtitle is-6">{{ person.subtitle }}</p>
        </div>
      </div>
    </a>
  </div>
  {% endfor %}
</div>