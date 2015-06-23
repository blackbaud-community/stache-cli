---
layout: layout-container
order: 50
name: YAML pattern 1
description: A gallery of helpful Markdown resources and related tools.
thumbnail: /assets/img/markdown100.png
published: true
showInNav: true
showInHeader: true
showInFooter: true
markdownresources:
  - title: What is markdown?
    description: Markdown means that your website is being built correctly.. by professionals.
    website: http://whatismarkdown.com/
    itemimage: /assets/img/markdown100.png

  - title: Markdown tutorial
    description: Unlike cumbersome word processing applications, text written in Markdown can be easily shared between computers, mobile phones, and people. It’s quickly becoming the writing standard for academics, scientists, writers, and many more. Websites like GitHub and reddit use Markdown to style their comments.
    website: http://markdowntutorial.com/


  - title: Markdown Basics
    description: Markdown allows you to write using an easy-to-read, easy-to-write plain text format, which then converts to valid HTML for viewing on GitHub
    website: https://help.github.com/articles/markdown-basics/
    itemimage: /assets/img/githubrocket.png
    
  - title: Daring Fireball
    description: Offers a brief overview of what it’s like to use Markdown. The syntax page provides complete, detailed documentation for every feature.
    website: http://daringfireball.net/projects/markdown/basics 
    itemimage: /assets/img/daringfireball.png
    
  - title: Brackets
    description: A modern, open source text editor that understands web design.  This editor is wonderful (and free). 
    website: http://brackets.io/
    itemimage: /assets/img/brackets100.png

  - title: MarkdownPad
    description: MarkdownPad is a full-featured Markdown editor for Windows.
    website: http://markdownpad.com/
    itemimage: /assets/img/markdownpad.png
    
  - title: Pandoc
    description: The swiss-army knife of document conversion
    website: <%= stache.config.docs_tools %>#pandoc
---

<pre><code class="language-yaml">
layout: layout-container
</code></pre>

# YAML Pattern 1: Fancy links

<p class="alert alert-info">This page is an example of the [YAML navigation pattern]({{stache.config.stache_docs}}YAML-pattern).</p>
<p class="alert alert-success">Check out Stache Docs for a comprehensive look at all our <a href="{{stache.config.stache_docs_navpatterns}}">navigation patterns</a></p>

## Helpful markdown resources

<div class="code">

  <div class="clearfix"></div>

  {{# eachWithMod markdownresources mod=3 }}

    {{# if firstOrMod0 }}<div class="row">{{/ if }}
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
             {{# if itemimage }}<img src="{{ itemimage }}" alt="" />{{/ if }}
            <div class="caption">
              <h3>{{ title }}</h3>
               {{# if description }}
                <p>{{ description }}</p>
              {{/ if }}
              <p><a href="{{ website }}" class="btn btn-primary" role="button">Learn More</a></p>
            </div>
          </div>
        </div>
    {{# if lastOrMod1 }}</div>{{/ if }}
  {{/ eachWithMod }}

</div>
