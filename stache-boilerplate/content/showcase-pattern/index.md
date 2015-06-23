---
layout: layout-showcase
order: 30
name: Showcase pattern
description: a folder driven pattern that displays a showcase of child content items on the parent page
published: true
showInNav: true
showInHeader: true
showInFooter: true
---


# Showcase pattern
  
  
<pre><code class="language-yaml">
layout: layout-showcase
</code></pre>


<p class="alert alert-success">Check out Stache Docs for a comprehensive look at all our <a href="{{stache.config.stache_docs_navpatterns}}" >navigation patterns</a></p>

The Showcase pattern enables the ability to coordinate and organize related content files together. Use this pattern when you have a series of items to show off, such as code samples or tutorials. 

The Showcase pattern is a folder driven pattern. **The** pattern consists a parent directory containing an content file, index.md, and several child subdirectories, each containing an index.md content file. The Showcase pattern will display a showcase of child content items on the parent page where layout: layout-showcase is defined:  
