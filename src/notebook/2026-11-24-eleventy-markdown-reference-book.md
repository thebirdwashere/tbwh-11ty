---
layout: base.njk
title: Eleventy + Markdown Reference Book
date: 2026-11-24T07:09:28.665Z
description: Eleventy and Markdown-based website tips/snippets mostly for my own reference while writing this website.
tags:
    - note
categories: []
---

## {{ description }}

#### Embed images in Markdown

```
![error loading text here](img location here "hover text here")
```

#### Colorize text in Markdown with HTML

```
<span style="color: red">**text here, with example Markdown**</span>
```


#### Created on {{ page.date | asPostDate }}