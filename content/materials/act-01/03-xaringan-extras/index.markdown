---
title: "03: xaringan extras"
weight: 3
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
  url: "/materials/act-01/03-xaringan-extras/#activity"
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

Use features from `xaringanExtra`, `xaringan`, and `rmarkdown` that strengthen clarity and accessibility of technical presentations.

-   Presenter notes
-   Separate code chunks and their output
    -   `ref.label` trick for code and plots on different slides
    -   `knitr::fig_chunk("<label>", "<ext>")`
-   xaringanExtra
    -   Panelsets (segue from above)
    -   Tile View
    -   Editable and Scribble
    -   extra css

## Activity

Time: ⏱ 10 minutes

Open and preview this slide deck: materials/act-01/03-xaringan-extras.Rmd

-   Start with slides that have code, a scatter plot and a line plot (scatter + regression)
-   Dress up slides with panelset to flip between the three
-   Add scribble and turn it into a guess-the-regression game
