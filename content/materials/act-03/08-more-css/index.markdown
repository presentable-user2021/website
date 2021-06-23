---
title: "08: More CSS"
weight: 2
subtitle: "Insert subtitle here"
excerpt: ""
links:
- icon: images
  icon_pack: fas
  name: slides
  url: "/slides/01-why-online.html"
- icon: theater-masks
  icon_pack: fas
  name: activity
  url: "/materials/act-03/08-more-css/#activity"
---

<script src="{{< blogdown/postref >}}index_files/clipboard/clipboard.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.js"></script>
<script>window.xaringanExtraClipboard(null, {"button":"Copy Code","success":"Copied!","error":"Press Ctrl+C to Copy"})</script>
<script src="{{< blogdown/postref >}}index_files/fitvids/fitvids.min.js"></script>
<div class="shareagain" style="min-width:300px;margin:1em auto;">
<iframe src="/slides/03-why-r.html" width="1600" height="900" style="border:2px solid currentColor;" loading="lazy" allowfullscreen></iframe>
<script>fitvids('.shareagain', {players: 'iframe'});</script>
</div>

## Topic

Utilize CSS & HTML in R Markdown beyond xaringan for clear technical communication.

Learning objectives

-   `.class` and `element` syntax
-   Combining CSS rules
    -   Everything so far has been a single class, how do we put things together?
    -   E.g. `.slide-class h2`
-   Tachyons?
    -   Small CSS classes that do little things that compose together
    -   Don’t have to write big CSS files
-   CSS Grid?
    -   Easy put things in squares (columns and rows)

    -   `display: grid;`

    -   `grid-template-columns: 1fr 2fr;`

    -   make a grid of:

            <icon>  <paragraph>
            <icon>  <paragraph>
            <icon>  <paragraph>

## Activity

Time: ⏱ 10 minutes

Open and preview this slide deck: materials/act-03/08-more-css.Rmd
