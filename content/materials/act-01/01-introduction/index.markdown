---
title: "01: Setting the stage"
weight: 1
show_post_date: false
publishDate: 2021-07-06
excerpt: ""
links:
- icon: images
  icon_pack: fas
  name: slides
  url: "/slides/01-introduction.html"
- icon: theater-masks
  icon_pack: fas
  name: activity
  url: "/materials/act-01/01-introduction/#activity"
---

<script src="{{< blogdown/postref >}}index_files/clipboard/clipboard.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.js"></script>
<script>window.xaringanExtraClipboard(null, {"button":"Copy Code","success":"Copied!","error":"Press Ctrl+C to Copy"})</script>
<script src="{{< blogdown/postref >}}index_files/fitvids/fitvids.min.js"></script>
<div class="shareagain" style="min-width:300px;margin:1em auto;">
<iframe src="/slides/01-introduction.html" width="1600" height="900" style="border:2px solid currentColor;" loading="lazy" allowfullscreen></iframe>
<script>fitvids('.shareagain', {players: 'iframe'});</script>
</div>

## Topic

We will review some of the built-in features of the <span class="pkg">xaringan</span> and use `xaringan::infinite_moon_reader()` to render a live preview of the slides for quick iterations.

## Activity

<div class="activity-table">

|               |                                       |
|:--------------|:--------------------------------------|
| Time          | 10 minutes                            |
| Materials     | `01-introduction/01-start.Rmd`        |
| Activity Mode | Break out room & work with your group |

</div>

<div class="activity-step">

Open and preview this slide deck: `01-introduction/01-start.Rmd`

Restart your R session and run `xaringan::infinite_moon_reader()` to preview the slides rendered in HTML.

</div>

<div class="activity-step">

xaringan scavenger hunt!

Explore the HTML slide deck and see if you can identify the following classes and features built into xaringan, then check the Rmd file to see if you were correct.

<div class="checklist">

-   <input id="" type="checkbox"></input> lists (ordered and unordered)
-   <input id="" type="checkbox"></input> quotes inserted with `>`
-   <input id="" type="checkbox"></input> `.pull-left[]` and `.pull-right[]`
-   <input id="" type="checkbox"></input> `.left-column[]` and `.right-column[]`
-   <input id="" type="checkbox"></input> `.right[]`
-   <input id="" type="checkbox"></input> `.footnote[]`
-   <input id="" type="checkbox"></input> images inserted with `background-image:` or `![alt](url)`
-   <input id="" type="checkbox"></input> slide classes like `inverse`, `middle`, `center`
-   <input id="" type="checkbox"></input> horizontal bars using `---`
-   <input id="" type="checkbox"></input> presenter notes using `???` (hint: press the letter <kbd>P</kbd>)

</div>

</div>

<div class="activity-step">

**Bonus:** Play around with some of the YAML parameters

-   Adjust the slide `ratio` (e.g. `4:3`)
-   Pick another syntax [highlighting style](https://github.com/gnab/remark/wiki/Configuration#highlighting) for `highlightStyle`
-   Change the [slide number format](https://github.com/yihui/xaringan/wiki/Slide-number#slide-number-format) for `slideNumberFormat`

</div>
