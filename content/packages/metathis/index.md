---
title: "metathis"
subtitle: "Easy Custom Metadata Tags"
excerpt: "&lt;meta&gt; tags and social media cards for R-made web things."
date: 2021-02-01
author: "Garrick Aden-Buie"
draft: false
tags:
  - pre-work
layout: single
links:
- icon: home
  icon_pack: fas
  name: website
  url: https://pkg.garrickadenbuie.com/metathis
- icon: github
  icon_pack: fab
  name: code
  url: https://github.com/gadenbuie/metathis
- icon: r-project
  icon_pack: fab
  name: CRAN
  url: https://cran.r-project.org/web/packages/metathis/
---

<div class="f2 i lh-title custom-heading-font">
<code>&lt;meta&gt;</code> tags and social media cards for R-made web things.
</div>

## Installation

You can install **metathis** from CRAN

``` r
install.packages("metathis")
```

or you can install the development version of metathis from [r-universe](https://gadenbuie.r-universe.dev) or
[GitHub](https://github.com/gadenbuie/metathis).

``` r
install.packages("metathis", repos = "https://gadenbuie.r-universe.dev")

# install.packages("remotes")
remotes::install_github("gadenbuie/metathis")
```

## Why metathis?

The goal of **metathis** is to help you add HTML `<meta>` tags to your
[R Markdown](https://rmarkdown.rstudio.com) and
[Shiny](https://shiny.rstudio.com) apps.

HTML `<meta>` tags provide browsers and social media with metadata about
HTML pages. Using `<meta>` tags will help your users find your articles,
Shiny apps, and presentations, and will help you make sure they look
great in social media timelines.

**metathis** makes the process of adding these tags to your R Markdown
pages and Shiny apps easier by using the
[htmltools](https://github.com/rstudio/htmltools) package to add
`<meta>` tags as a dependency, added directly to the document in an R
code chunk or your Shiny app UI rather than requiring you to adjust
templates or write additional files.

If you want great looking social media cards, the
[`meta_social()`](http://pkg.garrickadenbuie.com/metathis/reference/meta_social.html)
function will help you add everything you need for Twitter, Facebook and
other social media sites that support the Open Graph protocol.
