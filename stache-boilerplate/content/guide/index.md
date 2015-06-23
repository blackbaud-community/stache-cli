---
layout: layout-sidebar
order: 10
name: Sample Guide
published: true
showInNav: true
showInHeader: true
showInFooter: true
---

<pre><code class="language-yaml">
layout: layout-sidebar
</code></pre>

# Content Creation Tips 

<p class="alert alert-success">Check out all our <a href="{{stache.config.stache_docs_docs}}" >guides</a> within our Stache Docs.</p>

This guide will teach the newcomer how to apply markdown, html, and handlebar expressions within your content.  Markdown allows you to write using an easy-to-read, easy-to-write plain text format, which then converts to valid HTML for viewing within a web browser.  This guide is not an exhaustive tutorial of Markdown.  We recommend reviewing the following Markdown resources:

##  Headers
See the 'High Life vegan headers' `<h2>` header for this content? It's an atx-style header. To create an atx-style header in markdown, you put 1-6 hash marks (#) at the beginning of the line — the number of hashes equals the resulting HTML header level.

h1 Example:  `#  Content Creation Tips`

h2 Example:  `## High Life vegan headers`

h3 Example:  `### Numbered list`

## Lists ##

MS Word Docs provide a lot of flexibility around mixing content within a numbered list or bullets.  Markdown, not so much.  

### Numbered list

Markdown provides the ability to create numbered lists.  Just don't try to put content between the items in the list.  

To do something, follow these steps:

1. Stuff
2. Select the **Constituent** API.  A list of endpoints will be displayed.
3. Sample code within the list: <code>ID</code>.

### Unordered Lists

- Here is an unordered list.  Note the bullets.
- Another bullet
- Yet another bullet.

<p class="alert alert-success">Learn more about working with <a href="{{stache.config.stache_docs_docs}}content-creation/#lists" >Lists</a> within our Stache Docs.</p>



## Escaping Characters

Markdown allows you to use backslash escape (&#92;) to generate literal characters which would otherwise have special meaning in Markdown’s formatting syntax.  See [daringfireball](http://daringfireball.net/projects/markdown/syntax#backslash) for more info.  

But, there are some exceptions:

### Using HTML escape characters instead of Markdown backslash

Let's play around with a couple of common, yet difficult situations where we need to use HTML escape characters instead of the Markdown backslash escape syntax (&#92;). 

**Example 1:** Escaping an asterisk (&#42;)

When you attempt to escape an asterisk (&#42;) within Markdown, its best to use the HTML escape characters:  (&amp;&#35;42;) instead of a backslash escape character (&#92;).  

So, escaping the asterisk like this: 

&amp;&#35;42;.doc

The content will render like this:

&#42;.doc 

<p class="alert alert-success">Learn more about working with <a href="{{stache.config.stache_docs_docs}}content-creation/#escaping-characters" >Escaping Characters</a> within our Stache Docs.</p>
