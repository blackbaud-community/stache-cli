---
layout: layout-container
showHeadings: false
order: 60
name: YAML pattern 2
description: A listing of helpful videos to grow your Stache
published: true
showInNav: true
showInHeader: true
showInFooter: false
installvideos:
  - title: Installing Stache
    description: Building your first 'Stache website is easy and straight-forward, but there are a few prerequisites and requirements you’ll need to make sure your system has before you start.
    video_src_url: https://www.youtube.com/embed/PnrFSweRknY
    
  - title: stache new and prepare commands
    description: The 'stache new' command creates a new 'Stache website on your local file system. The 'stache prepare' command installs the necessary 'Stache internals into your website folder. After you prepare the website, you can issue the 'stache serve' to build and locally serve the website.
    video_src_url: https://www.youtube.com/embed/G-MbZol2zD8

creatingcontentvideos:
  - title: Stache.yml - Part 1
    description: Modify your website's configuration file (stache.yml) to change the website's title and footer.
    video_src_url: https://www.youtube.com/embed/cSvPfxVMCIM
---

<pre><code class="language-yaml">
layout: layout-container
</code></pre>

# YAML Pattern 2: Videos

<p class="alert alert-info">This page is an example of the [YAML navigation pattern]({{stache.config.stache_docs}}YAML-pattern).</p>
<p class="alert alert-success">Check out Stache Docs for a comprehensive look at all our <a href="{{stache.config.stache_docs_navpatterns}}">navigation patterns</a></p>

## Installing and Serving 

<div class="resources">
{{# eachWithMod installvideos mod=3 }}
{{# if firstOrMod0 }}<div class="row">{{/ if }}
<div class="col-sm-6 col-md-4">
<div class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title">{{ title }}</h3>
</div>
<div class="panel-body">
{{# if description }}<div class="embed-responsive embed-responsive-16by9"><iframe width="200" height="113" src="{{video_src_url}}" frameborder="0" allowfullscreen></iframe></div>{{/ if }}
</div>
{{# if description }}<div class="panel-footer">{{ description }}</div>{{/ if }}</div>
</div>
{{# if lastOrMod1 }}</div>{{/ if }}
{{/ eachWithMod }}
</div>

## Creating Content

<div class="code">
{{# eachWithMod creatingcontentvideos mod=3 }}
{{# if firstOrMod0 }}<div class="row">{{/ if }}
        <div class="col-sm-6 col-md-4">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">{{ title }}</h3>
              </div>
              <div class="panel-body">{{# if description }}<div class="embed-responsive embed-responsive-16by9"><iframe width="200" height="113" src="{{video_src_url}}" frameborder="0" allowfullscreen></iframe></div>{{/ if }}</div>
                {{# if description }}<div class="panel-footer">{{ description }}</div>{{/ if }} 
            </div>  
        </div>
{{# if lastOrMod1 }}</div>{{/ if }}
   {{/ eachWithMod }}
</div>






