---
layout: base.njk
description: List of distant broadcast stations I have recieved, anything from AM/TV to TV, and possibly more later on
title: DX Logs
---

## {{ description }}

<ol reversed class=blog>
{%- for post in collections.dxlog | reverse -%}
  <li>
    <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
  </oi>
{%- endfor -%}
</ul>

   