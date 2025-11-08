---
layout: base.njk
description: bite-sized notes about whatever, or small stuff I wanna quickly share
title: Notebook
---

## {{ description }}

<ol reversed class=blog>
{%- for post in collections.note | reverse -%}
  <li>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    {{ post.date | asPostDate }}
  </oi>
{%- endfor -%}
</ul>