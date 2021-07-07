---
title: "02: From style guide to xaringan theme"
weight: 2
publishDate: 2021-07-06
show_post_date: false
excerpt: ""
links:
- icon: images
  icon_pack: fas
  name: slides
  url: "/slides/02-style-guide.html"
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
<iframe src="/slides/02-style-guide.html" width="1600" height="900" style="border:2px solid currentColor;" loading="lazy" allowfullscreen></iframe>
<script>fitvids('.shareagain', {players: 'iframe'});</script>
</div>

## Activity

<div class="activity-table">

|               |                                   |
|---------------|-----------------------------------|
| Time          | 10 minutes                        |
| Materials     | `02-style-guide/02-start.Rmd`     |
| Activity Mode | Break out room & work on your own |

</div>

### Bring your own style guide

<div class="activity-step">

Open up your style guide and find the section or sections that describe recommended **colors** and **fonts**.

If you don’t have a style guide on hand, [check out our list of recommended style guides](/materials/prework/#bring-a-style-guide).

</div>

<div class="activity-step">

Restart your R session and open the <span class="pkg">xaringanthemer</span> slide template.

You can use the <span class="pkg">xaringanthemer</span>
[Ninja Themed Presentation](https://pkg.garrickadenbuie.com/xaringanthemer/articles/xaringanthemer.html#r-markdown-template-in-rstudio-1)
R Markdown template,
or you can use the slides in `02-style-guide/02-start.Rmd` (they’re the same).

</div>

### Choose a starting theme

<div class="activity-step">

Choose one of the [xaringanthemer style functions](https://pkg.garrickadenbuie.com/xaringanthemer/articles/xaringanthemer.html#themes-1)
as a starting point for your theme.

Does your style guide rely *primarily* on **one** or **two** colors?

-   **One color:** Choose a [monotone starting theme](https://pkg.garrickadenbuie.com/xaringanthemer/articles/xaringanthemer.html#monotone-1)
    created with a function prefixed with `style_mono_`.

-   **Two colors:** Choose a [duotone starting theme](https://pkg.garrickadenbuie.com/xaringanthemer/articles/xaringanthemer.html#duotone-1)
    created with a function prefixed with `style_duo_`.

The `style_duo_accent()` theme is a very good starting place.

</div>

### Colors

<div class="activity-step">

Set the principle colors of your xaringan theme.

-   If you used a `style_mono_` function, set the `base_color` argument.

-   If you used a `style_duo_` function, set the `primary_color` and `secondary_color` arguments.

Save your slides to re-render and preview.

</div>

<div class="activity-step">

Adjust, tweak or update one or two of the theme’s colors.

<span class="pkg">xaringanthemer</span> usually gives you a really great place to start,
but it’s not perfect.
Look through the style guide preview slides and find an element whose color isn’t quite right.

The `style_` functions have *lots and lots* of options.
Here are a few suggestions for things to check and the arguments to set in your style function.

-   Do the colors of the text on the inverse slides look okay?

    -   Use the arguments that start with `inverse_` to provide a better color.

-   Are the colors on the title slide okay?

    -   Use the `title_slide_` arguments to pick better colros.

-   Do link, bold, and the inline code colors look just the way you want?

    -   Use `link_color`, `text_bold_color` or `code_inline_color` to fix them.

</div>

### Typography

<div class="activity-step">

Find the fonts recommended by your style guide.

-   What fonts does your style guide recommend?
    Typically, style guides will recommend a **heading**, **body** and possibly a **code** or **monospace** font.

-   Look for the recommended fonts on [Google Fonts](https://fonts.google.com).
    If you can’t find the exact font, look for one that is visually similar.

Keep in mind that *sans-serif* fonts are generally easier to read on screens and at a distance.
If your style guide uses both serif and sans serif fonts, try to use serif for the headings.
Keep in mind that you can deviate a little for the sake of legibility.

<div class="ml4">

<span class="serif f5">This text is written in a **serif** font.</span>

<span class="sans-serif f5">This text is written in a **sans-serif** font.</span>

<span class="code f5">This text is written in a **monospace** font.</span>

</div>

</div>

<div class="activity-step">

Set the **text**, **header** and **code** fonts for your style functions.

All of the `style_` functions include three arguments for setting the fonts used in the slides when using Google Fonts:

-   `header_font_google`: The font used for slide headings created with `#`, `##`, etc.

-   `text_font_google`: The normal text font.

-   `code_font_google`: The font used for code, both in code blocks and inline.

After picking your font on Google, you only need to know the name of the font as it’s identified on Google.
Then set each of the above arguments using the `google_font()` helper function.

``` r
text_font_google = google_font("Noto Sans")
```

<details>
<summary>
Checkpoint
</summary>

``` r
# These are the xaringanthemer default Google Fonts
style_duo_accent(
  header_font_google = google_font("Cabin"),
  text_font_google = google_font("Noto Sans"),
  code_font_google = google_font("Source Code Pro")
)
```

</details>

</div>

### More Colors

<div class="activity-step">

Find your extra colors.

Does your style guide include a recommended palette of colors?

If yes: great, use these colors!

If not:

-   You could try using the [color palette recommended by the Urban Institute Data Viz. Style Guide](http://urbaninstitute.github.io/graphics-styleguide/#color).

-   Or you can use [coolors](https://coolors.co/) to [generate a color palette](https://coolors.co/generate)

</div>

<div class="activity-step">

Store your color palette in a named vector and give those colors to <span class="pkg">xaringanthemer</span>

We recommend doing this in a two step process, so that you can use your colors in your xaringan theme **and** in your R session.

1.  Store your color variables in a named character vector.
    Be careful not to use spaces or dots in your color names!

    ``` r
    palette <- c(
     orange        = "#fb5607",
     pink          = "#ff006e",
     blue_violet   = "#8338ec",
     zomp          = "#38A88E",
     shadow        = "#87826E",
     blue          = "#1381B0",
     yellow_orange = "#FF961C"
      )
    ```

    You can add the principle colors you used in the [colors step](#colors) above,
    just don’t name them `primary`, `secondary`, or `base`, since xaringanthemer already uses those color names.

2.  Then give the vector you just created to the `colors` argument of your style function.

``` r
style_duo_accent(
  primary_color = "#1381B0",  # Blue
  secondary_color = "#FF961C" # Yellow/orange
  inverse_header_color = "#FFFFFF",
  colors = palette
)
```

</div>

<div class="activity-step">

Now that your colors have been added to your theme, try using them!

xaringanthemer creates special classes from this palette,
so to use the color I called `pink` in my slides
I could put `.pink[ ... ]` around any text to turn it pink!
Try this with your color names!

</div>
