---
layout: layout.njk
title: 首页
---

# 欢迎来到我的新站点

## 最新文章
<ul>
{%- for post in collections.blog -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>
