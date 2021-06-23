---
title: "02: From style guide to xaringan theme"
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
  url: "/materials/act-01/02-style-guide/#activity"
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

Create a complete theme for xaringan based on your institution or organization’s style guide

-   xaringanthemer helps you build a complete set of styles for your slides
    -   Start with one or two colors: `style_duo_*` or `style_mono_*`
    -   The rest of the function name describes how those colors create the starting theme
    -   The defaults are a starting point
-   The xaringanthemer template helps during the process and includes examples of nearly every slide component.
-   How to use xaringanthemer
    -   (these things are done for you in the template)
    -   Set `css: xaringan-themer.css` in the YAML header
    -   Call `style_*` in an R chunk
    -   OR create the `xaringan-themer.css` file in a separate R script
-   Translating a style guide to slides: keep it simple
    -   Recreate the look and feel, but it doesn’t need to be perfect
    -   Don’t use *every color* or *every font*
        -   Example slides that uses every color in the palette
        -   Example slides that use just one (or two) colors for emphasis
    -   Strive for visual consistency

## Activity

Time: ⏱ 10 minutes

Open and preview this slide deck: materials/act-01/02-style-guide.Rmd

This activity can be a bit longer with a guide to move participants through

1.  Bring your own style guide (or use one of our favorites)
2.  Create a new R Markdown document from xaringanthemer’s *Ninja Themed Presentation* template.
    -   I might put the template in the starter kit with a note that you can get to the same place using the R Markdown template.
3.  **Colors**: Use your style guide to pick *one* or *two* primary colors to be used throughout your slides.
    -   Is one color dominant? Try `style_mono_accent()`
    -   Are two colors commonly paired together? Try `style_duo_accent()`.
4.  **Typography**: style guides typically prescribe specific fonts for headings and text body.
    -   Which fonts does your style guide recommend?
    -   Sans serif fonts are typically easier to read on screens and at a distance. If your style guide uses both serif and sans serif fonts, try to use serif for the headings. Keep in mind that you can deviate a little for the sake of legibility.
    -   Find your recommended fonts on https://fonts.google.com (or a font that is close)
    -   Use the `_font_google` arguments of the `style_` functions, together with `google_font()` to set the fonts for text, heading and code.
5.  **More Colors**: Does your style guide include a palette?
    -   Copy those colors into a named vector, e.g. `c("plum" = "#8B668B")`
    -   Color names need to be one alpha-numeric word (plus `-` or `_`, but no `.`)
    -   Pass the vector to the `colors` argument in `style_`
    -   Use the color in your slides: `.plum[hello]`.
6.  Explore the other arguments, change a few colors
7.  Bonus: Use `theme_xaringan()` to create a plot that matches the theme
