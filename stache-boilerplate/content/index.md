---
layout: layout-base
order: 1
description: This is the homepage description.
---

<header class="welcome" data-stellar-background-ratio="0.5">
  <div class="text-vertical-center">
    <h1>Welcome to {{ stache.config.product_name_short }}</h1>
    <h2>See the h1 tag above?  'Your New Website' can be changed by changing the 'product_name_short' YAML variable within this site's stache.yml file.</h2>
    <ul class="list-inline">
      <li>
        <a href="#about" class="btn btn-lg btn-primary smooth-scroll">Learn More</a>
      </li>
    </ul>
  </div>
</header>

<section id="about" class="about section-padding">
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center">
        <h2>'Stache Documentation</h2>
        <p class="lead">Our 'Stache website provides comprehensive documentation.</p>
        <p><a href="{{stache.config.stache_docs}}" class="btn btn-lg btn-primary">View Our Docs</a></p>
      </div>  <!-- .col-sm-12 -->
    </div>  <!-- .row -->
  </div>  <!-- .container -->
</section>  <!-- .about -->

<section id="features" class="learn section-padding bg-primary">
  <div class="container">
    <div class="row text-center">
      <div class="col-lg-10 col-lg-offset-1">
        
        <h2>Learn</h2>
         <p class="lead">Our Stache Docs have great content:</p>
        <div class="row"> 
          <div class="col-md-3 col-sm-6">
            <a href="{{ stache.config.stache_docs_tutorials }}" class="btn-fa-link">
              <span class="fa-stack fa-4x">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-graduation-cap fa-stack-1x text-primary"></i>
              </span>  <!-- .fa-stack -->
            </a>  <!-- .btn-fa-link -->
            <h4><strong>Guided Tutorials</strong></h4>
            <p>Short, simple guides intended to help you get started using our tools and processes.</p>
          </div>  <!-- .col-md-3 -->
          
          <div class="col-md-3 col-sm-6">
            <a href="{{ stache.config.stache_docs_docs }}" class="btn-fa-link">
              <span class="fa-stack fa-4x">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-file-text fa-stack-1x text-primary"></i>
              </span>  <!-- .fa-stack -->
            </a>  <!-- .btn-fa-link -->
            <h4><strong>Docs</strong></h4>
            <p>Deeper documentation for topics such as installation, markdown tips, front matter, stache commands...</p>
          </div>  <!-- .col-md-3 -->
          
          <div class="clearfix visible-sm-block"></div>
          
          <div class="col-md-3 col-sm-6">
            <a href="{{ stache.config.stache_docs_navpatterns }}" class="btn-fa-link">
              <span class="fa-stack fa-4x">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-compass fa-stack-1x text-primary"></i>
              </span>  <!-- .fa-stack -->
            </a>  <!-- .btn-fa-link -->
            <h4><strong>Navigation Patterns</strong></h4>
            <p>Super-smooth side navigation is a snap with our Sidebar, Showcase, and YAML patterns.</p>
          </div>  <!-- .col-md-3 -->
          
           <div class="col-md-3 col-sm-6">
            <a href="{{ stache.config.stache_docs_resources }}" class="btn-fa-link">
              <span class="fa-stack fa-4x">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-youtube fa-stack-1x text-primary"></i>
              </span>  <!-- .fa-stack -->
            </a>  <!-- .btn-fa-link -->
            <h4><strong>Resources</strong></h4>
            <p>A gallery of helpful resources and related tools including Markdown, FAQ, Code Samples, and Videos.</p>
          </div>  <!-- .col-md-3 -->
          
        </div>  <!-- .row -->
      </div>  <!-- .col-lg-10 -->
    </div>  <!-- .row -->
  </div>  <!-- .container -->
</section>  <!-- .learn -->

<section id="services" class="services section-padding bg-secondary">
  <div class="container">
    <div class="row text-center">
      <div class="col-lg-10 col-lg-offset-1">
        
        <h2>Features</h2>
        <div class="row">
          
          <div class="col-sm-3">
            <a href="{{ stache.config.portal }}{{ getOperationUri name='Address (Create)' }}" class="btn-fa-link">
              <span class="fa-stack fa-4x">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-users fa-stack-1x text-primary"></i>
              </span>  <!-- .fa-stack -->
            </a>  <!-- .btn-fa-link -->
            <h4><strong>Feature 1</strong></h4>
            <p>This is paragraph describing a feature of this site. </p>
          </div>  <!-- .col-md-4 -->
          
          <div class="col-sm-3">
            <a href="###########" class="btn-fa-link">
              <span class="fa-stack fa-4x">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-terminal fa-stack-1x text-primary"></i>
              </span>  <!-- .fa-stack -->
            </a>  <!-- .btn-fa-link -->
            <h4><strong>Feature 2</strong></h4>
            <p>This is paragraph describing a feature of this site. </p>
          </div>  <!-- .col-md-4 -->
          
          <div class="col-sm-3">
            <a href="{{ stache.config.resources_status }}" class="btn-fa-link">
              <span class="fa-stack fa-4x">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-tachometer fa-stack-1x text-primary"></i>
              </span>  <!-- .fa-stack -->
            </a>  <!-- .btn-fa-link -->
            <h4><strong>Feature 3</strong></h4>
           <p>This is paragraph describing a feature of this site. </p>
          </div>  <!-- .col-md-4 -->
          
          <div class="col-sm-3">
            <a href="{{ stache.config.portal_analytics }}" class="btn-fa-link">
              <span class="fa-stack fa-4x">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-bar-chart fa-stack-1x text-primary"></i>
              </span>  <!-- .fa-stack -->
            </a>  <!-- .btn-fa-link -->
            <h4><strong>Feature 4</strong></h4>
            <p>This is paragraph describing a feature of this site. </p>
          </div>  <!-- .col-md-4 -->
          
        </div>  <!-- .row -->
      </div>  <!-- .col-lg-10 -->
    </div>  <!-- .row -->
  </div>  <!-- .container -->
</section>  <!-- .services -->

<section id="start" class="start section-padding">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h2>Get Help</h2>
        <p>Got questions?  We want to help! 
          Check out <a href="{{ stache.config.stache_docs_resources_faq }}">frequently asked questions</a>.</p>
      </div>  <!-- .col-sm-12 -->
    </div>  <!-- .row -->
  </div>  <!-- .container -->
</section>
