---
title: "08: More CSS"
weight: 2
publishDate: 2021-07-06
show_post_date: false
excerpt: ""
links:
- icon: images
  icon_pack: fas
  name: slides
  url: "/slides/08-more-css.html"
- icon: theater-masks
  icon_pack: fas
  name: activity
  url: "/materials/act-03/08-more-css/#activity"
---

<script src="{{< blogdown/postref >}}index_files/clipboard/clipboard.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.js"></script>
<script>window.xaringanExtraClipboard(null, {"button":"Copy Code","success":"Copied!","error":"Press Ctrl+C to Copy"})</script>
<script src="{{< blogdown/postref >}}index_files/fitvids/fitvids.min.js"></script>
<div class="shareagain" style="min-width:300px;margin:1em auto;">
<iframe src="/slides/08-more-css.html" width="1600" height="900" style="border:2px solid currentColor;" loading="lazy" allowfullscreen></iframe>
<script>fitvids('.shareagain', {players: 'iframe'});</script>
</div>

## Activity

<div class="activity-table">

|               |                                       |
|---------------|---------------------------------------|
| Time          | 5 minutes                             |
| Materials     | `08-more-css/08-start.Rmd`            |
| Activity Mode | Break out room & work with your group |

</div>

In this short activity, we’ll practice using CSS variables and CSS selectors to give a slide some extra style.

<div class="activity-step">

Restart your R session and open the files for this activity.
Start `infinite_moon_reader()` to begin working with the slides.

At the top of the file, we see that the slides use <span class="pkg">xaringanthemer</span>
with a custom palette provided to the `colors` argument.

``` r
library(xaringanthemer)

palette <- c(
  orange      = "#fb5607",
  pink        = "#ff006e",
  blue_violet = "#8338ec",
  zomp        = "#38A88E",
  shadow      = "#87826E"
)

style_duo_accent(colors = palette)
```

The second slide of the deck describes the common and scientific names of Woolly Lemurs.
Which classes are used in the slide markdown?

<details>
<summary>
Slide Classes
</summary>

-   `.lemur`
-   `.common-name`
-   `.sci-name`
-   `.genus`
-   `.species`
-   Plus one class for each species, e.g. `.eastern`, `.western`, etc.

</details>

Finally, there is a `<style>` tag where a small amount of CSS is ready for your help.

</div>

<div class="activity-step">

Update the CSS rule for `.common-name` so that the common names of each lemur are <span class="orange b">orange</span>,
but “Woolly lemurs” in the first paragraph is not.

<details>
<summary>
Checkpoint
</summary>

``` css
.lemur .common-name {
  color: var(--orange);
}
```

</details>

</div>

<div class="activity-step">

Add a new CSS rule to use the *shadow* color for the normal lemur species text.

When you’re done, the text describing the lemur names should look like this:

<span class="mid-gray ml4"><span class="orange">Eastern</span> woolly lemur, *Avahi laniger*</span>

</div>

<div class="activity-step">

Add additional CSS rules to give the *genus* and *species* each their own colors.

Use the CSS variables defined by xaringanthemer from the color palette.
Hint: follow the example from `.common-name` with a different color name.

**Bonus:** If you’d like, try to also make sure that these colors *aren’t applied*
to the genus and species classes in the first paragraph.

When you’re done, the lemur name text should look (something) like this:

<span class="mid-gray ml4"><span class="orange">Eastern</span> woolly lemur, *<span class="green">Avahi</span> <span class="purple">laniger</span>*</span>

<details>
<summary>
Checkpoint
</summary>

``` css
.sci-name .genus {
  color: var(--zomp);
  font-weight: bold;
}
.sci-name .species {
  color: var(--blue_violet)
}
```

</details>

</div>

<div class="activity-step">

Make the line describing the Bemaraha lemur **bold**, without affecting the other lemur species.

<details>
<summary>
Checkpoint
</summary>

``` css
.lemur.bemaraha {
  font-weight: bold;
}
```

</details>

</div>
