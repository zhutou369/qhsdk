---
layout: layout.njk
title: WhatsApp网页版 | 官方安全指南
---

<style>
    /* 强制全屏重置 */
    html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; background: #f0f2f5; overflow-x: hidden; }
    :root { --wa-green: #128C7E; --wa-dark: #075E54; }

    .full-header { background: var(--wa-green); color: white; width: 100%; padding: 70px 0; text-align: center; }
    .header-content h1 { margin: 0; font-size: 3rem; font-weight: 800; }

    .main-wrapper { 
        max-width: 1100px; 
        margin: -40px auto 60px; 
        background: white; 
        border-radius: 12px; 
        padding: 40px; 
        box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
        box-sizing: border-box;
    }

    /* 修正后的列表循环样式 */
    .post-card { 
        display: flex; 
        justify-content: space-between; 
        align-items: center;
        padding: 25px 15px; 
        border-bottom: 1px solid #f8f8f8; 
        text-decoration: none; 
        color: #333; 
        transition: 0.3s;
    }
    .post-card:hover { background: #fcfdfd; transform: translateX(10px); color: var(--wa-green); }
    .post-card h2 { margin: 0; font-size: 1.4rem; font-weight: 600; }
    .post-card .date-text { color: #ccc; font-size: 0.9rem; font-family: monospace; }

    .site-footer { text-align: center; padding: 50px 0; background: white; border-top: 1px solid #eee; color: #999; }
</style>

<div class="full-header">
    <div class="header-content">
        <h1>WhatsApp 网页版</h1>
        <p style="margin-top:10px; opacity:0.9; font-size: 1.2rem;">官方安全通讯指南 · 2026 技术支持</p>
    </div>
</div>

<div class="main-wrapper">
    <div style="color: #666; margin-bottom: 30px; line-height: 1.8; border-bottom: 1px solid #eee; padding-bottom: 25px;">
        欢迎访问专业 <strong>WhatsApp网页版</strong> 资讯门户。我们为您提供最安全、最稳定的 <strong>WhatsApp Web</strong> 登录教程与账号安全策略。
    </div>

    <h3 style="border-left: 6px solid var(--wa-green); padding-left: 15px; margin-bottom: 25px; color: var(--wa-dark);">最新资讯动态</h3>

    <div class="post-feed">
        {# 使用 collections.blog 这种 11ty 最标准的集合写法 #}
        {% for post in collections.blog reverse %}
        <a href="{{ post.url }}" class="post-card">
            <h2>{{ post.data.title }}</h2>
            <span class="date-text">{{ post.date | date: "%Y-%m-%d" }}</span>
        </a>
        {% endfor %}
    </div>

    {% if collections.blog.length == 0 %}
    <p style="text-align: center; color: #ccc; padding: 60px;">内容库同步中，请刷新页面...</p>
    {% endif %}
</div>

<footer class="site-footer">
    <p style="font-weight: bold; color: #666; font-size: 1.1rem; margin: 0;">© 2026 WhatsApp网页版. 保留所有权利。</p>
</footer>