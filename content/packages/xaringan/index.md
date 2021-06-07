---
title: "xaringan"
subtitle: "Be a Presentation Ninja"
excerpt: "An R package for creating slideshows with [remark.js](https://remarkjs.com) through R Markdown."
date: 2021-05-01
author: "Yihui Xie"
draft: false
tags:
  - pre-work
layout: single
links:
- icon: home
  icon_pack: fas
  name: website
  url: https://slides.yihui.org/xaringan//#1
- icon: github
  icon_pack: fab
  name: code
  url: https://github.com/yihui/xaringan
- icon: r-project
  icon_pack: fab
  name: CRAN
  url: https://cran.r-project.org/web/packages/xaringan/
---

An R package for creating slideshows with [remark.js](https://remarkjs.com) through R Markdown. The package name **xaringan** comes from [Sharingan](https://naruto.fandom.com/wiki/Sharingan), a dōjutsu in Naruto with two abilities: the "Eye of Insight" and the "Eye of Hypnotism". A presentation ninja should have these basic abilities, and I think remark.js may help you acquire these abilities, even if you are not a member of the Uchiha clan.

Please see the full documentation as a [presentation here](https://slides.yihui.org/xaringan/) ([中文版在此](https://slides.yihui.org/xaringan/zh-CN.html)). The [remark.js](https://remarkjs.com) website provides a quick introduction to the underlying syntax upon which **xaringan** builds. If you prefer reading a book, **xaringan** is also documented in [the R Markdown book (Chapter 7)](https://bookdown.org/yihui/rmarkdown/xaringan.html). You can use **remotes** to install the package:

```r
remotes::install_github('yihui/xaringan')
```

If you use RStudio, it is easy to get started from the menu `File -> New File -> R Markdown -> From Template -> Ninja Presentation`, and you will see an R Markdown example. Press the `Knit` button to compile it, or use the RStudio Addin `Infinite Moon Reader` to live preview the slides (every time you update and save the Rmd document, the slides will be automatically reloaded; make sure the Rmd document is on focus when you click the addin). Please see the [issue #2](https://github.com/yihui/xaringan/issues/2) if you do not see the template or addin in RStudio.
