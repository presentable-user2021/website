---
title: "01: Setting the stage"
weight: 1
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
  url: "/materials/act-01/01-review/#activity"
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

## Goal

Preview a slide deck with inf\_mr() that has a customized title slide and helpful setup code chunk
- Use `infinite_moon_reader()` for quick iteration with xaringan slides
- Setup for success using xaringan’s built-in settings

## Material

-   review YAML
-   review content classes (e.g. `.pull-left[ ]`, class: inverse)
-   review syntax (e.g. `---` is a new slide, `???` adds presenter notes)

## Activity

Time: ⏱ 10 minutes

Open and preview this slide deck: materials/act-01/01-review.Rmd

-   run `inf_mr()`
-   adjust slide ratio
-   customize parameters in YAML
-   create basic title slide using parameters and content classes
