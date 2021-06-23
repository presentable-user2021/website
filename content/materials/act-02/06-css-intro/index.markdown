---
title: "06: Introduction to CSS"
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
  url: "/materials/act-02/06-css-intro/#activity"
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

End goal: control the precise placement and size of content on the slide.

## Activity

Time: ⏱ 10 minutes

Open and preview this slide deck: materials/act-02/06-css-intro.Rmd

This section won’t involve break out groups, instead follow-along with short on-your-own tasks:

-   Start with small demo slides that uses an extra css file with empty classes
-   Put `.big[ ]` around a word in the slide
-   Open the slides in Chrome or Firefox
-   Right click on that word and select *Inspect element*
-   What rules are being applied to this element?
-   Add a rule for the `.big` class to set `font-size: 2em`
-   **Your turn:** set the color to yellow
-   **Your turn:** find another property to change, using <kbd>Tab</kbd>
-   Copy the rule into the CSS file
    -   Aside: can also use a `css` chunk
-   **Your turn:** Write a new rule called `.fade` that sets `opacity: 0.66;`
-   **Your turn:** Put `.fade[]` around an image
-   Anatomy of a CSS rule
-   What’s the difference between inline and block elements?
-   Show using `.fade[]` around an image inline and around a block
    -   Reminder: Use the browser to see what you get
-   Add `.bottom-right` to the CSS classes around the image
-   Use `position: absolute` to put the image absolutely where you want it
-   Pixels vs ems
-   **Your turn:** choose values that you like for `bottom` and `right`, then copy the rule into the stylesheet
-   **Your turn:** Use `.bottom-right` together with the `knitr::fig_chunk()` trick (already set up) to put a plot in the bottom right corner
    -   Will lead to discovering the biggest difference between inline and block: block elements have a *height* and a *width*
    -   Use `width` to size the plot appropriately
