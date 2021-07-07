---
title: "03: xaringan extras"
weight: 3
show_post_date: false
publishDate: 2021-07-06
excerpt: ""
links:
- icon: images
  icon_pack: fas
  name: slides
  url: "/slides/03-xaringan-extras.html"
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
<iframe src="/slides/03-xaringan-extras.html" width="1600" height="900" style="border:2px solid currentColor;" loading="lazy" allowfullscreen></iframe>
<script>fitvids('.shareagain', {players: 'iframe'});</script>
</div>

## Activity

<div class="activity-table">

|               |                                       |
|:--------------|:--------------------------------------|
| Time          | 6 minutes                             |
| Materials     | `03-xaringan-extras/03-start.Rmd`     |
| Activity Mode | Break out room & work with your group |

</div>

### Goal

`03-start.Rmd` contains one slide with a plot and the code used to create it,
but neither is presented well.
Our goal for this activity is to present both the code and the plot
in a way that helps the presenter and the audience.

### Two Slides

For our first configuration, split the presentation into two slides.
First present the code, followed by the plot on a new slide.

<div class="activity-step">

**Use `knitr::fig_chunk()` or the `ref.label` option to separate the code and the plot.**

<details>
<summary>
<code>knitr::fig\_chunk()</code>
</summary>

    ```{r lemur-weight, fig.show="hide"}
    # ggplot2 plotting code
    ```

    ---

    ![Figure alt text](`r knitr::fig_chunk("lemur-weight", "png")`)

</details>
<details>
<summary>
<code>ref.label</code>
</summary>

    ```{r lemur-weight, eval=FALSE}
    # ggplot2 plotting code
    ```

    ---

    ```{r ref.label="lemur-weight", echo=FALSE}

    ```

</details>

</div>

### Use Panelsets

<div class="activity-step">

**Reset the code in your slides to the original `lemur-weight` chunk.**

<details>
<summary>
Original Chunk
</summary>

    ```{r lemur-weight}
    library(tidyverse)
    lemurs <- readRDS("lemurs.rds")

    lemurs %>%
      filter(
        common_name == "Ring-Tailed Lemur",
        between(age_at_wt_y, 1, 5)
      ) %>%
      ggplot() +
      aes(x = age_at_wt_y, y = weight) +
      geom_point() +
      labs(
        x = "Age at Weight",
        y = "Weight (g)",
        title = "Weight Gain of Young Ring-Tailed Lemurs"
      )
    ```

</details>

</div>

<div class="activity-step">

**Now, use [panelsets](https://pkg.garrickadenbuie.com/xaringanExtra/#/panelset)
to place the code and output in the same slide:**

1.  Add a new chunk to your slides to use panelsets

        ```{r xaringanExtra, echo=FALSE}
        xaringanExtra::use_xaringan_extra(c("panelset"))
        ```

2.  Wrap the `lemur-weight` chunk in a `.panelset[ ... ]`

3.  Add `panelset=TRUE` to the `lemur-weight` chunk

    -   ⚠️ If you’re using a xaringanExtra `< 0.5.4`,
        you will also need to add the `results="hold"` chunk option.

4.  Save and render the slides to preview!

<details>
<summary>
Checkpoint
</summary>

    .panelset[

    ```{r lemur-weight, panelset=TRUE}
    library(tidyverse)
    lemurs <- readRDS("lemurs.rds")

    lemurs %>%
      filter(
        common_name == "Ring-Tailed Lemur",
        between(age_at_wt_y, 1, 5)
      ) %>%
      ggplot() +
      aes(x = age_at_wt_y, y = weight) +
      geom_point() +
      labs(
        x = "Age at Weight",
        y = "Weight (g)",
        title = "Weight Gain of Young Ring-Tailed Lemurs"
      )
    ```

    ]

</details>

</div>

<div class="activity-step">

**Add another panel with a regression line over the lemur weight plot.**

1.  Inside the `.panelset[ ... ]`, add a new `.panel[ ... ]`

2.  In the `.panel[ ]`, add `.panel-name[Regression]`

3.  Add a new chunk that adds `geom_smooth()` to the lemur weight plot

        ```{r echo=FALSE}
        last_plot() + geom_smooth(method = "lm")
        ```

4.  Save and render your slides. Flip between each of the panels.

<details>
<summary>
Checkpoint
</summary>

    .panel[
    .panel-name[Regression]

    ```{r echo=FALSE}
    last_plot() + geom_smooth(method = "lm")
    ```
    ]

</details>

</div>

### Add Scribble

For our last trick,
we’ll add the [scribble](https://pkg.garrickadenbuie.com/xaringanExtra/#/scribble)
feature to our slides.
Scribble lets you draw right on the slides!

<div class="activity-step">

**Add *scribble* and guess the regression.**

1.  Add `"scribble"` to the extras in `use_xaringan_extra()`.

2.  Save and render your slides.

3.  On the plot slide, navigate to the **Output** panel.
    Press <kbd>S</kbd> to enable *scribble* mode.
    Draw a regression line on the lemur weight plot.

4.  Press <kbd>S</kbd> again to turn off *scribble* mode.
    Navigate to the **Regression** panel.
    How good was your guestimated regression line?

<details>
<summary>
Checkpoint
</summary>

``` r
xaringanExtra::use_xaringan_extra(c("panelset", "scribble"))
```

</details>

</div>
