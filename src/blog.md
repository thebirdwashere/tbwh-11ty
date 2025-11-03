---
layout: base.njk
description: bird's yappings
title: Blog
---

<ol reversed class=blog>
{%- for post in collections.post | reverse -%}
  <li>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
    {{ post.date | asPostDate }}
  </oi>
{%- endfor -%}
</ul>