---
title: "09: Design Components"
weight: 3
show_post_date: false
publishDate: 2021-07-06
excerpt: ""
links:
- icon: images
  icon_pack: fas
  name: slides
  url: "/slides/09-design-components.html"
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
<iframe src="/slides/09-design-components.html" width="1600" height="900" style="border:2px solid currentColor;" loading="lazy" allowfullscreen></iframe>
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

<div class="activity-table">

|                                     |                                                 |
|-------------------------------------|-------------------------------------------------|
| Time                                | 10 minutes                                      |
| [Quote Slide](#quote-slide)         | `09-design-components/quote/09-quote-start.Rmd` |
| [Slide Templates](#slide-templates) | `09-design-components/template/start.Rmd`       |

</div>

Choose one of the following two options for this activity:

-   [Create a slide style for inspirational or thought-provoking quotes.](#quote-slide)  
    *Difficulty: mild*

-   [Create a re-usable slide template with an image sidebar.](#slide-templates)  
    *Difficulty: intermediate*

### Quote Slide

The goal of this activity is to create a slide style that showcases a quote.
We’ll start with the first example below and end with a slide style that helps
the audience focus on your quote.

<div class="flex flex-wrap">

<div class="w-third-ns w-100 pa2">

Start<br><a href="quote-0.png"><img class="ba bw1 b--light-gray" src="quote-0.png" alt="Quote slide, initial slides."></a>

</div>

<div class="w-third-ns w-100 pa2">

Example 1<br><a href="quote-1.png"><img class="ba bw1 b--light-gray" src="quote-1.png" alt="Quote slide, final version."></a>

</div>

<div class="w-third-ns w-100 pa2">

Example 2<br><a href="quote-2.png"><img class="ba bw1 b--light-gray" src="quote-2.png" alt="Quote slide, inverse variant."></a>

</div>

</div>

<div class="activity-step">

Restart your R session and open the files for this activity.

-   Slides: `09-design-components/quote/09-quote-start.Rmd`
-   CSS file: `09-design-components/quote/quote.css`

</div>

<div class="activity-step">

Start `ininite_moon_reader()` and explore the demo slides.

These slides use a <span class="pkg">xaringanthemer</span> theme and an extra CSS file `quote.css`.

``` yaml
output:
  xaringan::moon_reader:
    css: [xaringan-themer.css, quote.css]
```

Notice that we’re using `style_duo_accent()` with a **primary** and **secondary** color.
We’ve also added additional colors named **yellow** and **pink** using the `colors` argument.

``` r
library(xaringanthemer)
style_duo_accent(
  primary_color = "#035AA6",
  secondary_color = "#03A696",
  colors = c(yellow = "#FFFC31", pink = "#E56399")
)
```

The final slide in this example presentation contains our quote.
We’ve given that slide a `quote` class
and we’ve also marked the attribution line with an `.attribution[]`.

``` markdown
---
class: quote middle

Lemurs are the only non-human primates with blue eyes.

.attribution[
[Duke Lemur Center](https://lemur.duke.edu/discover/meet-the-lemurs/blue-eyed-black-lemur/)
]
```

</div>

#### Set Font Sizes

Let’s tackle the first part of the challenge:
making text on a `quote` slide extra large.
At this stage, we need to write some CSS:

-   You can choose to write the CSS in the `quote.css` file.
    When you save the file, the slides will update and you’ll see your changes applied.

-   You could write your CSS in the slides’ `.Rmd` file inside `<style></style>` tags.
    You’ll see your changes applied live, but you might need to save the file occassionally.
    At the end, you can copy the CSS into `quote.css`.

<div class="activity-step">

Pick a font size for the quote text.

-   Add a `.quote` class to your CSS.
-   Use `font-size:` to pick a font size. I liked `4.75em` but you might like another size better.

<details>
<summary>
Checkpoint
</summary>

``` css
.quote {
  font-size: 4.75em;
}
```

</details>

</div>

<div class="activity-step">

Pick a font size for the attribution text.

In the previous step, we also scaled the attribution text,
but we don’t want it to be *that* large.

Add a `.quote .attribution` CSS rule that sets the font size to something smaller.
Do you need to use `em` or `px` units?

<details>
<summary>
<code>em</code> vs <code>px</code>
</summary>

You might have thought that setting `font-size: 1.5em;`
would make the attribution text 1.5 times our typical slide font size.
But if you used `em`, the font size is then relative to the *parent* element,
and we’ve just changed the size of all slide text to be 4.75 times larger!

One way to get around this is to set the font size in pixels.
It works, but if you decide to change the base font size, you’d need to update this rule in your CSS, too.

In the next step we’ll see how to scale the font size in a robust way without changing our slide text size.
</details>

</div>

<div class="activity-step">

Be more specific and more relative with the text size.

Our best case scenario is to have *relative* units for the text size.
This means that both `font-size:` properties should be set to `em`, or relative text units.

To achieve this, we need to be a *little* more specific with our CSS rule for the quote text.
Instead of `.quote`, use `.quote > p`

``` css
.quote > p {
  font-size: 4.75em;
}
```

and you can now change the `font-size:` property of `.quote .attribution` to `em` as well.

``` css
.quote .attribution {
  font-size: 1.5em;
}
```

<details>
<summary>
Why does this work?
</summary>

For two reasons.
First, remarkjs puts each block of text inside a paragraph tag, `<p>`.
Event the attribution text is inside a `<p>` tag, but it’s contained inside a parent `<div>` with the `attribution` class.

<details>
<summary>
Slide Markdown
</summary>

    Lemurs are the only non-human primates with blue eyes.

    .attribution[
    [Duke Lemur Center](https://lemur.duke.edu/discover/meet-the-lemurs/blue-eyed-black-lemur/)
    ]

</details>
<details>
<summary>
Slide HTML
</summary>

``` html
<div class="remark-slide-content quote middle">
  <p>Lemurs are the only non-human primates with blue eyes.</p>
  <div class="attribution">
    <p><a href="https://lemur.duke.edu/discover/meet-the-lemurs/blue-eyed-black-lemur/" target="_blank">Duke Lemur Center</a></p>
  </div>
</div>
```

</details>

The `>` operator in CSS rules means *a direct child of …*.
If we read `.quote > p` from right to left,
we’re looking for `<p>` tags that are *direct children of* elements with the `.quote` class.
In our case, only plain text on a `.quote` slide will be in a `<p>` tag directly below the slide container with the `.quote` class.

</details>

</div>

#### Set Colors

In this step,
we’ll use [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
to set the colors of the quote and attribution text.

<div class="activity-step">

Set the `color` property for the quote text.

When you use the `style_duo_*()` functions,
<span class="pkg">xaringanthemer</span> add CSS variables for
the primary and secondary colors.
It also creates CSS variables for any colors in the `colors` argument.

Choose from the following and add them to your `.quote > p` rule.

-   `color: var(--primary);`
-   `color: var(--secondary);`
-   `color: var(--yellow);`
-   `color: var(--pink);`

</div>

<div class="activity-step">

Set the `color` property for the attribution text.

Because we’re using a link in the attribution text, we need to add a new CSS rule.

**How would you add a CSS that targets an `<a>` element within an `.attribution` element with a `.quote` slide?**
Create a rule for this element and set the `color:` property using the examples above.

<details>
<summary>
Checkpoint
</summary>

``` css
.quote .attribution a {
  color: var(--pink);
}
```

</details>

</div>

#### Adjust spacing

At this point, your CSS should look something like this:

``` css
.quote > p {
  font-size: 4.75em;
  color: var(--primary);
}
.quote .attribution {
  font-size: 1.5em;
}
.quote .attribution a {
  color: var(--pink);
}
```

But there’s an awfully large space between the quote and attribution text.
Let’ adjust that by adjusting the margin of paragraphs in the quote slides.

<div class="activity-step">

Set the `margin:` property of `.quote > p`.

We’re going to use a shortcut here.
The `margin:` property is flexible.
If you give it two values, it uses those values for the *vertical* and *horizontal* margins respectively.

**Set the vertical margin to `0.2em` and the horizontal margin to `0`.**

<details>
<summary>
Checkpoint
</summary>

``` css
margin: 0.2em 0;
```

</details>

</div>

#### Adjust the quote font

We’re almost there, let’s just adjust the font style of the quote text.
Choose any or all of the following steps to get your quote font looking *just right*.
Apply all of the following to the `.quote > p` rule.

<div class="activity-step">

Set the `font-family:` property.

By default, the font family of the quote text is the default slide text family,
which was set by `text_font_family_google` in `style_duo_accent()`.
<span class="pkg">xaringanthemer</span> creates CSS variables for the heading and text font families,
so you can use the heading family with:

``` css
font-family: var(--heading-font-family);
```

Alternatively, you can use a serif font, like `Charter`.
(This font tends to be available on all systems, but it’s a good idea to provide a fallback.)

``` css
font-family: Charter, serif;
```

If you’d like to use a font from Google, check out the [instructions in the Extras section](#quote-extras).

</div>

<div class="activity-step">

Make the quote font *italic*.

Set the `font-style:` property to `italic`.

</div>

<div class="activity-step">

Make the quote font bold.

Set the `font-weight:` property to `bold` or `700`.

</div>

<details>
<summary>
Checkpoint
</summary>

``` css
.quote > p {
  color: var(--primary);
  font-size: 4.75em;
  margin: 0.2em 0;
  font-family: Charter, serif;
  font-style: italic;
  font-weight: 700;
  line-height: 1.2;
}
.quote .attribution {
  font-size: 1.5em;
}
.quote .attribution a {
  color: var(--pink);
}
```

</details>

#### Extras

Congratulations on your great looking quote slide!
If you’d like to keep tinkering, here are a few more things you can try out.

<div class="activity-step">

Change the background color of the quote slide.

<span class="pkg">xaringan</span> provides a helpful `inverse` slide class.
Create CSS rules that invert the colors of the quote slide when `inverse` is included in the slide’s classes.

    ---
    class: quote middle inverse

First, add a new rule to change the `background-color:` property of any `.quote` with `.inverse` slides.
When they reference the same element, there are no spaces between the selectors:

``` css
.quote.inverse {
  background-color: ____;
}
```

Now change the text colors for the inverse quote slides.
You don’t have to rewrite *everything*!
Instead, find all of the CSS rules that change the `color` property.
Copy the selectors into new rules, and update the selector to include `.inverse` and `.quote` on *the same element*.

<details>
<summary>
New Rules
</summary>

``` css
.inverse.quote > p {
  color: var(--primary);
}
.inverse.quote .attribution a {
   color: var(--pink);
}
```

</details>
<details>
<summary>
Checkpoint
</summary>

``` css
.inverse.quote {
  background-color: var(--primary);
}
.inverse.quote > p {
  color: white;
}
.inverse.quote .attribution a {
  color: var(--yellow);
}
```

</details>

</div>

<div class="activity-step">

Try using a different font for the quote text.

Browse [Google Fonts](https://fonts.google.com) to pick a font style that you like.

**Add the new font to your theme.**
You can include extra fonts in your <span class="pkg">xaringanthemer</span> theme using the `extra_fonts` argument in the `style_` functions.

``` r
extra_fonts = list(google_font("PT Serif"))
```

**Use the new font in for your quote paragraph text.**

``` css
font-family: 'PT Serif', Charter;
```

</div>

<div class="activity-step">

Pick new colors for your theme.

Use [coolors](https://coolors.co) to [generate a random color palette](https://coolors.co/generate)
or [browse trending color palettes](https://coolors.co/palettes/trending).
Update the `primary` and `secondary` color arguments
and add additional colors to the `colors` vector.

If you used `var(--primary)` or `var(--secondary)` for any `color:` property in your CSS,
those colors will update automatically when you change the theme colors!

If you added colors to the `colors` argument,
you might need to update the CSS variable to match the name you gave the color.

</div>

### Slide Templates

In this activity, we’ll create a re-usable slide template.
This feature combines advanced xaringan slide-building skills with a bit of CSS.

<div class="flex flex-wrap">

<div class="w-third-ns w-100 pa2">

Start<br><a href="template-0.png"><img class="ba bw1 b--light-gray" src="template-0.png" alt="Template slide, initial slides"></a>

</div>

<div class="w-third-ns w-100 pa2">

Template<br><a href="template-1.png"><img class="ba bw1 b--light-gray" src="template-1.png" alt="Template slide, styled template"></a>

</div>

<div class="w-third-ns w-100 pa2">

Applied<br><a href="template-2.png"><img class="ba bw1 b--light-gray" src="template-2.png" alt="Template slide, template used with new content"></a>

</div>

</div>

<div class="activity-step">

Restart your R session and open the files for this activity.

-   Slides: `09-design-components/template/09-template-start.Rmd`
-   CSS file: `09-design-components/template/template.css`

</div>

<div class="activity-step">

Start `ininite_moon_reader()` and explore the demo slides.

These slides use a <span class="pkg">xaringanthemer</span> theme and an extra CSS file `template.css`.

``` yaml
output:
  xaringan::moon_reader:
    css: [xaringan-themer.css, template.css]
    nature:
      ratio: 16:9
```

The final slide in this example presentation contains our slide, but it’s kind of boring.
We’ve given that slide a `image-sidebar-right` class but that’s about it.

``` markdown
---
class: image-sidebar-right

# Awesome Lemurs

Lorem per erat vulputate iaculis eu in dui vestibulum.
```

</div>

#### Add a background image

-   Use `source.unsplash.com` trick

-   What’s the background size?

``` html
<div class="remark-slide-scaler" style="width: 1210px; height: 681px; transform: scale(0.664463); left: 0px; top: 444.25px;">
  <div class="remark-slide"><div class="remark-slide-content image-sidebar-right hljs-github">
    <h1 id="awesome-lemurs">Awesome Lemurs</h1>
    <p>Lorem per erat vulputate iaculis eu in dui vestibulum.</p>
    <p>Amet fermentum sodales himenaeos nascetur lectus nunc hac nascetur auctor.</p>
    <p>Consectetur in accumsan neque libero magna leo felis viverra!</p>
    <p>Ipsum eros facilisi habitant habitant ultricies maecenas tellus parturient interdum potenti nisl.</p>
    <div class="remark-slide-number">3</div></div>
  </div>
</div>
```

-   Background position

<!-- -->

    background-image: url(https://source.unsplash.com/83gB_koMuvA/400x681)
    background-size: 400px 681px
    background-position: right

#### Improve the accessibility of the slide

-   Add an `aria-label` to describe the background image

``` html
<div role="img" aria-label="Slide background shows: A lemur standing on a tree stump, looking directly at the camera."></div>
```

-   Add attribution

``` markdown
.attribution[
Photo by [Zdeněk Macháček](https://unsplash.com/@zmachacek)
]
```

#### Style the slide

-   Add padding to the slide to stay out of the sidebar

``` css
.image-sidebar-right {
  padding-right: 450px;
}
```

-   Change the color of the slide number

``` css
.image-sidebar-right .remark-slide-number {
  color: white;
}
```

-   Put the attribution in the right spot

``` css
.image-sidebar-right .attribution {
  position: absolute;
  bottom: -0.75em;
  right: 410px;
}
```

-   Smaller attribution font size

``` css
.image-sidebar-right .attribution {
  font-size: 0.66em;
}
```

#### Make it a layout

-   Add `layout: true`

        ---
        layout: true
        name: image-sidebar-right
        class: image-sidebar-right

-   Move the content to a new slide

        ---
        layout: true
        name: image-sidebar-right
        class: image-sidebar-right
        background-image: url(https://source.unsplash.com/83gB_koMuvA/400x681)
        background-size: 400px 681px
        background-position: right

        <div role="img" aria-label="Slide background shows: A lemur standing on a tree stump, looking directly at the camera."></div>

        .attribution[
        Photo by [Zdeněk Macháček](https://unsplash.com/@zmachacek)
        ]

        ---

        # Awesome Lemurs

        Lorem per erat vulputate iaculis eu in dui vestibulum.

-   Add a third slide, with the same image and background, but different content

        ---

        # This is fun!

        1. Sit mattis viverra condimentum orci nibh ultrices cubilia cum ornare eget dictumst?

        1. Consectetur inceptos iaculis montes erat pharetra etiam accumsan eleifend.

        1. Amet donec pharetra lacus aliquet massa cum magnis aliquam justo tortor hac!

-   Add a new slide with `layout: false` between the two slides, breaking everything

        ---
        layout: false

        # Other content ...

        ---

        # This is fun!

        1. Sit mattis viverra condimentum orci nibh ultrices cubilia cum ornare eget dictumst?

#### Make it a template

-   Add `name: image-sidebar-right` to the first layout slide

        ---
        layout: true
        name: image-sidebar-right
        class: image-sidebar-right

-   Add `template: image-sidebar-right` to the third slide

        ---
        template: image-sidebar-right

        # This is fun!

        1. Sit mattis viverra condimentum orci nibh ultrices cubilia cum ornare eget dictumst?

#### Parameterize the template

-   Move `background-image` from the layout to the first *Awesome Lemurs* slide

-   Add a new background to the *This is fun!* slide

        background-image: url(https://source.unsplash.com/tXz6g8JYYoI/400x681)

-   Looks good, but the attribution and alt text are wrong :sad:

-   Create slide variables for the photo alt text `photo_alt`.

    1.  Cut the existing text in the layout slide and replace with `{{photo_alt}}`
    2.  Add `photo_alt:` to the slide properties
    3.  Paste the alt text
    4.  Save it to re-render the slides

-   Repeat for `photographer` and `photographer_url`

-   Then add similar variable values to the *This is fun!* slide:

        background-image: url(https://source.unsplash.com/tXz6g8JYYoI/400x681)
        photographer: Lidya Nada
        photographer_url: https://unsplash.com/@lidyanada
        photo_alt: A colorful image of a woman holding a bouquet of helium balloons in the shape of emoji against a brick wall painted in bright shades of blue, red, yellow and green.

#### Make another slide

Pick your own image from [unsplash](https://unsplash.com) and make a new slide with the required pieces.
