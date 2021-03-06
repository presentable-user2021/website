---
title: "xaringanthemer"
subtitle: "Custom CSS Themes for xaringan"
excerpt: "Give your xaringan slides some style without (much) CSS."
date: 2021-04-01
author: "Garrick Aden-Buie"
draft: false
tags:
  - pre-work
layout: single
links:
- icon: home
  icon_pack: fas
  name: website
  url: https://pkg.garrickadenbuie.com/xaringanthemer
- icon: github
  icon_pack: fab
  name: code
  url: https://github.com/gadenbuie/xaringanthemer
- icon: r-project
  icon_pack: fab
  name: CRAN
  url: https://cran.r-project.org/web/packages/xaringanthemer/
---
<script src="{{< blogdown/postref >}}index_files/clipboard/clipboard.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.js"></script>
<script>window.xaringanExtraClipboard(null, {"button":"Copy Code","success":"Copied!","error":"Press Ctrl+C to Copy"})</script>



<div class="f2 i lh-title custom-heading-font">
Give your <a href="https://github.com/yihui/xaringan" target="_blank" rel="noopener">xaringan</a> slides some style without (much) CSS.
</div>

## Installation

You can install **xaringanthemer** from CRAN.
Please ensure you have the latest version: **0.4.0**.

``` r
install.packages("xaringanthemer", dependencies = TRUE)
```

Make sure you include `dependencies = TRUE` so that the suggested packages are also installed.
In particular, we want to be sure you have the [showtext](https://github.com/yixuan/showtext) package since it's used by xaringanthemer for custom ggplot2 themes.

Alternatively, you can install the development version of xaringanthemer from [r-universe](https://gadenbuie.r-universe.dev) or
[GitHub](https://github.com/gadenbuie/xaringanthemer).

``` r
options(repos = c(
  gadenbuie = "https://gadenbuie.r-universe.dev", 
  getOption("repos")
))
install.packages("xaringanthemer", dependencies = TRUE)

# install.packages("remotes")
remotes::install_github("gadenbuie/xaringanthemer")
```

## Features

There???s a lot more that **xaringanthemer** can do! [Discover
xaringanthemer???s
features.](https://pkg.garrickadenbuie.com/xaringanthemer/articles/xaringanthemer.html)
