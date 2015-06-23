---
layout: layout-sidebar
order: 30
name: Layouts
description: Use the layout YAML front matter variable to define the layout to use for your content parent folder and optionally the parent's child folders.  
icon: fa fa-sitemap
---

# Layouts

Use `layout` to optionally define or override the layout to use for the content. Without a `layout` front matter variable, the page will default to `layout-container`.  Layouts are based on Bootstrap's responsive, mobile first fluid <a href="http://getbootstrap.com/css/#overview-container">container</a> and <a href="http://getbootstrap.com/css/#grid">grid system</a> that scales up to 12 columns as the device or viewport size increases.  

<p class="alert alert-success">Check out Stache Docs for a comprehensive look at all our <a href="{{stache.config.stache_docs_docs}}" >Docs</a></p>


## layout: layout-base

`layout-base` which provides a full width container, _spanning the entire width of your view port_.  `layout-base` provides a containing element to wrap site contents and house the bootstrap <a href="http://getbootstrap.com/css/#overview-container">container</a> and <a href="http://getbootstrap.com/css/#grid">grid</a> system. 

<p class="alert alert-info">For an example of `layout-base` in action, check out the <a href="{{ stache.config.base}}">home page</a>. See how the content spans the entire width of the webpage?</p>

## layout: layout-container  

`layout-container` is a responsive _fixed width_ container for proper alignment and padding. Unlike `layout-base` which provides a full width container, spanning the entire width of your view port,  `layout-container` is a fixed width container.  `layout-container` is the default layout for a page.  This means if no `layout` variable is provided within the front matter, then `layout-container` is used as the default.  `layout-container` provides a containing element to wrap site contents and house the bootstrap <a href="http://getbootstrap.com/css/#overview-container">container</a> and <a href="http://getbootstrap.com/css/#grid">grid</a> system. 

<p class="alert alert-info">For an example of `layout-container` in action, check out the <a href="{{ stache.config.yaml_pattern}}">YAML-pattern</a>.  Notice how the content is contained within a fixed width with margins on each side of the content. </p>

## layout: layout-sidebar

`layout: layout-sidebar` tells 'Stache to render the side navigation on the left hand side of the page.  The header level 2 (h2) tags are used as the individual side navigation items. In fact, looking at the markdown for this page you will see that it uses `layout: layout-sidebar`.  Use `layout: layout-sidebar` to implement the <a href="{{ stache.config.sidebar_pattern}}">Sidebar navigation pattern</a>.    

<p class="alert alert-info">For an example of `layout-sidebar` in action, check out the <a href="{{ stache.config.sidebar_pattern}}">Sidebar navigation pattern</a>.</p>


## layout: layout-showcase

Use `layout: layout-showcase` to implement the <a href="{{ stache.config.showcase_pattern}}">Showcase navigation pattern</a>.    Use this pattern when you have a series of items to show off, such as code samples or tutorials.   The Showcase pattern is a folder driven pattern. The pattern consists a parent directory containing an content file, index.md, and several child subdirectories, each containing an index.md content file.

<p class="alert alert-info">For an example of `layout-showcase` in action, check out the <a href="{{ stache.config.showcase_pattern}}">Showcase navigation pattern</a>.</p>

