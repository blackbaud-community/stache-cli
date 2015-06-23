---
layout: layout-container
showHeadings: false
order: 70
name: YAML pattern 3
description: A listing of helpful code samples.
published: true
showInNav: true
showInHeader: true
showInFooter: false
code:
  - title: Code Sample 1
    description: This is the application code that goes with our Web API tutoroial.  It includes an example of using the Authorization Code flow.
    repo: stache/
    tutorial: <%= stache.config.base %>

  - title: Code Sample 2
    description: A more specific example of the constituent api where we search based on different criteria.
    repo: stache-cli/
---

<pre><code class="language-yaml">
layout: layout-container
</code></pre>

# YAML Pattern 3: Code Samples

<p class="alert alert-info">This page is an example of the [YAML navigation pattern]({{stache.config.stache_docs}}YAML-pattern).</p>
<p class="alert alert-success">Check out Stache Docs for a comprehensive look at all our <a href="{{stache.config.stache_docs_navpatterns}}">navigation patterns</a></p>

<div class="code">

  <div class="clearfix"></div>

  {{# eachWithMod code mod=3 }}

    {{# if firstOrMod0 }}
      <div class="row">
    {{/ if }}
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
             {{# if itemimage }}
               <img src="{{ itemimage }}" alt="" />
            {{/ if }}
            <div class="caption">
              <h3>{{ title }}</h3>
               {{# if description }}
                <p>{{ description }}</p>
              {{/ if }}
              <a href="{{ ../stache.config.github }}{{ repo }}"  target="_blank" class="btn btn-primary" role="button">View Code</a>
              {{# if tutorial }}
                <a href="{{ tutorial }}" class="btn btn-white">
                  View Tutorial
                </a>
              {{/ if }}
            </div>
          </div>
        </div>
    {{# if lastOrMod1 }}
      </div>
    {{/ if }}

  {{/ eachWithMod }}

</div>





