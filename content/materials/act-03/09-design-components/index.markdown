---
title: "09: Design Components"
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
  url: "/materials/act-03/09-design-components/#activity"
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

Create consistency with reusable design components.

To motivate: an activity inspired by [Can’t Unsee](https://cantunsee.space/): compare two slides on the screen. Which one looks “most correct?” (I think this activity would fit a little better in \#7 but I could use it here, too)

How can we create consistency and re-usability?

1.  At the *text* level
    -   Using markdown or inline classes, esp color classes, like `.yellow[word]`
    -   👉 Rely on xaringanthemer and be consistent with structure.
2.  At the *block* level
    -   Boxes or groups of content that appear on the slide
    -   👉 Write CSS classes (maybe more than one class!)
3.  At the *slide* level
    -   When the whole slide is a little different
    -   E.g. the `header_background` from xaringanthemer
    -   👉 Write a slide-level CSS class in combination with `layout: true` and `template` from remark

## Activity

Time: ⏱ 10 minutes

Open and preview this slide deck: materials/act-03/09-design-components.Rmd

Two options (attendees will pick one to work on)

1.  Create a quote with attribution box — large quote text, small attribution text
    -   Write a CSS `.quote` and `.attribution` class
2.  Create a slide template for a slide with an image on the right
    -   Slide-level CSS for `.image-sidebar-right` and `.image-sidebar-right .attribution`
    -   Template slide using remark variables for the image and attribution details

## Exploration

[xaringan-template-layout-with-variables.Rmd](https://gist.github.com/gadenbuie/74a3fef858117301c17b1d829297e8be)
