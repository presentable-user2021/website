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

## Activity

<div class="activity-table">

|           |                                |
|:----------|:-------------------------------|
| Time      | 10 minutes                     |
| Materials | `01-introduction/01-start.Rmd` |

</div>

<div class="activity-step">

Open and preview this slide deck: `01-introduction/01-start.Rmd`

Restart your R session and run `xaringan::infinite_moon_reader()` to preview the slides rendered in HTML

</div>

<div class="activity-step">

xaringan scavenger hunt!

Explore the HTML slide deck and see if you can identify the following classes and features built into xaringan, then check the Rmd file to see if you were correct
- lists (ordered and unordered)
- quotes inserted with `>`
- `.pull-left[]` and `.pull-right[]`
- `.left-column[]` and `.right-column[]`
- `.right[]`
- `.footnote[]`
- images inserted with `background-image:` or `![alt](url)`
- slide classes like `inverse`, `middle`, `center`
- horizontal bars using `---`
- presenter notes using `???` (hint: press the letter <kbd>P</kbd>)

</div>

<div class="activity-step">

**Bonus:** Play around with some of the YAML parameters

-   Adjust the slide `ratio` (e.g. `4:3`)
-   Pick another syntax [highlighting style](https://github.com/gnab/remark/wiki/Configuration#highlighting) for `highlightStyle`
-   Change the [slide number format](https://github.com/yihui/xaringan/wiki/Slide-number#slide-number-format) for `slideNumberFormat`

</div>
