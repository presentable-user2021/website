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

## Topic

We will implement some accessibility practices important throughout the slide design process.

We will follow recommendations adapted from the Guidelines for Accessibility in the context of scientific communication, developed by Goring et al.

> Simon Goring, Kaitlin Stack Whitney, Aerin Jacob, et al. [Making Scientific Content More Accessible](https://www.authorea.com/users/152134/articles/206076-making-scientific-content-more-accessible). Authorea. October 19, 2017.

## Activity

<div class="activity-table">

|               |                                     |
|:--------------|:------------------------------------|
| Time          | 15 minutes                          |
| Materials     | `05-accessible-design/05-start.Rmd` |
| Activity Mode | Follow along                        |

</div>

<div class="activity-step">

Open and preview this slide deck: `05-accessible-design/05-start.Rmd`

Restart your R session and run `xaringan::infinite_moon_reader()` to preview the slides rendered in HTML

</div>

<div class="activity-step">

Add alternative text (alt-text) to slide 2

Add a text description to the lemur image slide on the slide titled “Ring-tailed Lemurs”

Find the following code chunk in `05-start.Rmd`

```` r
```{r, fig.alt=""}
knitr::include_graphics("ring-tailed-lemur.jpg")
```
````

How-to reminders:

-   Markdown: `![alt text goes here](image url goes here)`

-   R Markdown code chunk:

    ```` r
    ```{r, fig.alt = "alt text goes here"}
    knitr::include_graphics("image url goes here")
    ```
    ````

</div>

<div class="activity-step">

Edit the link text to be more descriptive

Edit the slide titled “Ring-tailed Lemurs” to replace the link titled “here” with link text that makes sense out of context

Find the following markdown text in `05-start.Rmd`

``` md
The Duke Lemur Center provides more information 
[here](https://lemur.duke.edu/accordions/ring-tailed-lemurs-species-page/)
```

Make sure the link text makes sense on its own

Ask yourself:

-   Are any of the links ambiguous? E.g. “More,” “Continue”

-   How could these links be rewritten to be descriptive?

Reading: [Introduction to Links and Hypertext by WebAIM](https://webaim.org/techniques/hypertext/#screen_readers)

</div>

<div class="activity-step">

Check your color palette for contrast

Check color contrast of the `primary_color` and `secondary_color` selected for your style guide against the color of the slide background (likely white, \#FFFFFF)

Adjust the lightness of your colors if needed and try to aim for the higher (AAA) contrast ratio rather than the minimum.

[Color contrast ratio](https://webaim.org/articles/contrast/#ratio) guidelines:

-   WCAG level AAA (enhanced): At least **7:1** for normal text and **4.5:1** for large text

-   WCAG level AA (minimum): **4.5:1** for normal text and **3:1** for large text

Color contrast checking tools:

-   **Recommended:** [Contrast Checker by WebAIM](https://webaim.org/resources/contrastchecker/). We like this tool because the site itself is designed to be accessible and the tool gives you the ability to adjust the color lightness.

-   [A11y Rocks! Color Palette Tool by Matt Long](http://a11yrocks.com/colorPalette/). This tool helps you check the color contrast of multiple colors at once and displays the color contrast ratio for each combination.

-   [Accessible color palette builder by Atul Varma](https://toolness.github.io/accessible-color-matrix/). This tool also helps you check multiple color contrasts at once and its minimalist design emphasizes only the combinations that meet color contrast guidelines.

</div>

<div class="activity-step">

Example of color contrast checking with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

Below is an example of a <span class="pkg">xaringanthemer</span> palette defined by two colors:

``` r
library(xaringanthemer)

style_duo_accent(
  primary_color = "#035AA6",
  secondary_color = "#03A696"
)
```

The primary color (hex code \#035AA6) **passes the AA color contrast guideline** with a contrast ratio of 6.96:1 against a white background

![A foreground color blue with hex code \#035AA6 has a contrast ratio of 6.96:1 against a white background. It passes AA guidelines](contrast-check-blue.png)

The secondary color (hex code \#03A696) **fails the AA color contrast guideline** with a contrast ratio of 3.04:1 against a white background

![A foreground color green with hex code \#03A696 has a contrast ratio of 3.04:1 against a white background. It fails AA guidelines](contrast-check-green-fail.png)

After adjusting the secondary color to a darker hue it **passes the AA color contrast guideline** with a contrast ratio of 4.71:1 against a white background

![An adjusted foreground color of green with hex code \#038275 has a contrast ratio of 4.71:1 against a white background. It passes AA guidelines](contrast-check-green-pass.png)

</div>
