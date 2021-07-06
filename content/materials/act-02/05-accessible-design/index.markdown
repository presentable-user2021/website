---
title: "05: Accessible Design"
weight: 2
show_post_date: false
publishDate: 2021-07-06
excerpt: ""
links:
- icon: images
  icon_pack: fas
  name: slides
  url: "/slides/05-accessible-design.html"
- icon: theater-masks
  icon_pack: fas
  name: activity
  url: "/materials/act-02/05-accessible-design/#activity"
---

<script src="{{< blogdown/postref >}}index_files/clipboard/clipboard.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.js"></script>
<script>window.xaringanExtraClipboard(null, {"button":"Copy Code","success":"Copied!","error":"Press Ctrl+C to Copy"})</script>
<script src="{{< blogdown/postref >}}index_files/fitvids/fitvids.min.js"></script>
<div class="shareagain" style="min-width:300px;margin:1em auto;">
<iframe src="/slides/05-accessible-design.html" width="1600" height="900" style="border:2px solid currentColor;" loading="lazy" allowfullscreen></iframe>
<script>fitvids('.shareagain', {players: 'iframe'});</script>
</div>

## Activity

<div class="activity-table">

|           |                                  |
|:----------|:---------------------------------|
| Time      | 15 minutes                       |
| Materials | `05-accessible-design/start.Rmd` |

</div>

<div class="activity-step">

Open and preview this slide deck: `05-accessible-design/01-start.Rmd`

Restart your R session and run `xaringan::infinite_moon_reader()` to preview the slides rendered in HTML

</div>

<div class="activity-step">

Add alternative text (alt-text) to the image in the slide

How-to reminders:

-   Markdown: `![alt text goes here](image url goes here)`

-   R Markdown code chunk:

        ```{r, fig.alt = "alt text goes here"}
        knitr::include_graphics("image url goes here")
        ```

</div>

<div class="activity-step">

Make sure the link text makes sense on its own

Ask yourself:

-   Are any of the links ambiguous? E.g. “More,” “Continue”

-   How could these links be rewritten to be descriptive?

Reading: [Introduction to Links and Hypertext by WebAIM](https://webaim.org/techniques/hypertext/#screen_readers)

</div>

<div class="activity-step">

Check color contrast of the `primary_color` and `secondary_color` selected for your style guide

For example:

``` r
style_duo_accent(
  primary_color = "#035AA6",
  secondary_color = "#03A696"
)
```

Color contrast checking tools:

-   **Recommended:** [Contrast Checker by WebAIM](https://webaim.org/resources/contrastchecker/). We like this tool because the site itself is designed to be accessible and the tool gives you the ability to adjust the color lightness.

-   [A11y Rocks! Color Palette Tool by Matt Long](http://a11yrocks.com/colorPalette/). This tool helps you check the color contrast of multiple colors at once and displays the color contrast ratio for each combination.

-   [Accessible color palette builder by Atul Varma](https://toolness.github.io/accessible-color-matrix/). This tool also helps you check multiple color contrasts at once and its minimalist design emphasizes only the combinations that meet color contrast guidelines.

[Color contrast ratio](https://webaim.org/articles/contrast/#ratio) guidelines:

-   WCAG level AAA (enhanced): At least **7:1** for normal text and **4.5:1** for large text

-   WCAG level AA (minimum): **4.5:1** for normal text and **3:1** for large text

</div>
