---
layout: layout-sidebar
order: 20
name: Sidebar pattern
description: render side navigation on the left hand side of the page using H2 tags
published: true
showInNav: true
showInHeader: true
showInFooter: true
---

<pre><code class="language-yaml">
layout: layout-sidebar
</code></pre>


# Sidebar navigation pattern #

<p class="alert alert-info">This page is an example of the [sidebar navigation pattern]({{stache.config.stache_docs}}sidebar-pattern).</p>
<p class="alert alert-success">Check out Stache Docs for a comprehensive look at all our <a href="{{stache.config.stache_docs_navpatterns}}">navigation patterns</a></p>

## Introduction 

This page demonstrates a simple sidebar navigation pattern. Go ahead and click on a navigation item on this page.  The `layout: layout-sidebar` key: value pair within the page's <a href="{{ stache.config.docs_front_matter}}">YAML Front Matter (YFM)</a> section tells 'Stache to render the side navigation on the left hand side of the page (or at the top of the page depending on the size of the browser's viewport) using the H2 tags (## in Markdown) defined within the content.   This is the simplest of patterns since the index.md file for this page resides within a directory on the file system with no sibling or child directories.  _As a result the side navigation only represents the H2 tags for the '\sidebar-pattern\index.md' content file._   

To implement the Sidebar pattern, do the following:

- Use the 'H2' markdown tag (##) on headers within your content (markdown) file.
- Use the `layout-sidebar` layout within the front matter section of the content file.
- The content file should not have any sibling or child directories

## Examining the live sample

For this page, look at the three side navigation items on the lefthand side of the page:

1. Introduction
2. Zombie Ipsum
3. Lebowski ipsum

Notice how the H2 tags (##) drive the list of side navigation items for the page:

<pre>
  <code class="language-html javascript">
  ---
  layout: layout-sidebar
  order: 30
  name: Sidebar layout
  ---
  
  # Sidebar layout #
  
  ## Introduction 

  This page demonstrates a simple sidebar layout ...
  
  ## Examining the live sample

  For this page, look at the three side navigation ...
  
  ## Zombie Ipsum
  
  Zombies reversus ab inferno, nam malum cerebro. ... 
  
  ## Lebowski ipsum
  
  The Dude abides. Dolor sit amet ...
  
  </code>
</pre>

## Zombie Ipsum

Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. Summus sit, morbo vel maleficia? De Apocalypsi undead dictum mauris. Hi mortuis soulless creaturas, imo monstra adventus vultus comedat cerebella viventium. Qui offenderit rapto, terribilem incessu. The voodoo sacerdos suscitat mortuos comedere carnem. Search for solum oculi eorum defunctis cerebro. Nescio an Undead zombies. Sicut malus movie horror.

## Lebowski ipsum

The Dude abides. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac. Your "revolution" is over, Mr. Lebowski! Condolences! The bums lost! Lectus quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada. Goodnight, sweet prince. Suscipit malesuada non, ultrices non urna sed orci ipsum, placerat id condimentum rutrum, rhoncus. Hello! Do you speak English? Parla usted Inglese? I'll say it again. Ac lorem aliquam placerat posuere neque, at dignissim magna ullamcorper in aliquam.

Sagittis massa ac tortor ultrices faucibus. …and even if he's a lazy man, and the Dude was certainly that—quite possibly the laziest in Los Angeles County. Curabitur eu mi sapien, ut ultricies. Darkness warshed over the Dude— darker'n a black steer's tookus on a moonless prairie night. There was no bottom. Ipsum morbi eget risus nulla nullam vel. Jeez. I miss vinyl. Nisi enim, vel auctor ante morbi id urna.
