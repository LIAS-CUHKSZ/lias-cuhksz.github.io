---
title: Lab PI
subtitle: 
layout: lab_pi
show_sidebar: false
hide_footer: false
sort: subtitle
hero_image: 
image: 
hero_height: is-small
---

<h1 style="font-size:35px;">Faculty</h1>
<br>
<div class="columns is-multiline">
  <div class="column is-12">
    {{ page.content }}
  </div>

  {% assign sorted_products = site.team | where:"category","lab_head" %}
  {% for product in sorted_products %}
  <div class="column is-3-desktop is-6-tablet">

    <a href="{{ product.url | prepend: site.baseurl }}">

      <div class="card">

        {% if product.image %}
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="{{ product.image }}" alt="{{ product.title }}" />
          </figure>
        </div>
        {% endif %}
        <div class="card-content">

          <p class="title is-5">{{ product.title }}</h2>
          <p class="subtitle is-6">{{ product.subtitle }}</p>

        </div>
      </div>
    </a>
  </div>
{% endfor %}
</div>
