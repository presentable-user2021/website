---
title: "07: Accessibility with CSS & HTML"
weight: 1
show_post_date: false
publishDate: 2021-07-06
excerpt: ""
links:
- icon: images
  icon_pack: fas
  name: slides
  url: "/slides/07-accessibility-css-html.html"
- icon: theater-masks
  icon_pack: fas
  name: activity
  url: "/materials/act-03/07-accessibility-css-html/#activity"
---

<script src="{{< blogdown/postref >}}index_files/clipboard/clipboard.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.js"></script>
<script>window.xaringanExtraClipboard(null, {"button":"Copy Code","success":"Copied!","error":"Press Ctrl+C to Copy"})</script>
<script src="{{< blogdown/postref >}}index_files/fitvids/fitvids.min.js"></script>
<div class="shareagain" style="min-width:300px;margin:1em auto;">
<iframe src="/slides/07-accessibility-css-html.html" width="1600" height="900" style="border:2px solid currentColor;" loading="lazy" allowfullscreen></iframe>
<script>fitvids('.shareagain', {players: 'iframe'});</script>
</div>

## Topic

We will leverage CSS and HTML to help make slide customizations more accessible.

## Activity

<div class="activity-table">

|               |                                          |
|:--------------|:-----------------------------------------|
| Time          | 15 minutes                               |
| Materials     | `07-accessibility-css-html/07-start.Rmd` |
| Activity Mode | Follow along                             |

</div>

<div class="activity-step">

Open and preview this slide deck: `07-accessibility-css-html/07-start.Rmd`

Restart your R session and run `xaringan::infinite_moon_reader()` to preview the slides rendered in HTML

</div>

<div class="activity-step">

Replace the alt-text in slide 3

Slide 3 of the deck talks about how common black lemurs are sexually dichromatic and contains two images, one of a male lemur and another of a female lemur to show the differences.

Replace some alt-text that is not informative in that context with alt-text that better matches the information being conveyed.

In the slide titled “Common black lemurs are sexually dichromatic,” **replace the following alt-text** in the HTML code:

``` html
alt = "Common black lemur with a millipede in one hand
and flies hovering overhead"
```

With this alternative that better matches the information being conveyed:

``` html
alt = "Female common black lemur with brown-orange fur 
and white ear tufts"
```

</div>

<div class="activity-step">

Apply underlining to your link text

1.  Navigate to the slide titled “Styling links”

2.  Paste the following CSS rule into `extra.css` and save the file to update

    ``` css
    a {
      text-decoration: underline;
    }
    ```

**Resource:** To learn how to style your links with color with accessibility in mind, check out the resource by WebAIM about [Link Text and Appearance](https://webaim.org/techniques/hypertext/link_text#appearance)

</div>

<div class="activity-step">

Apply an uppercase transformation

1.  Navigate to the slide titled “Transforming text to uppercase”

2.  Paste the following rule into `extra.css` and save the file to update

    ``` css
    .upper {
      text-transform: uppercase;
    }
    ```

3.  Watch this markdown text to see the transformation take place

    ``` md
    Hello there, I'm transforming .upper[this text] 
    to uppercase
    ```

</div>
