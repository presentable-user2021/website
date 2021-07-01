---
title: "Prework"
weight: 1
subtitle: ""
excerpt: "How to prepare ahead of time."
draft: false
---
<script src="{{< blogdown/postref >}}index_files/clipboard/clipboard.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/xaringanExtra-clipboard/xaringanExtra-clipboard.js"></script>
<script>window.xaringanExtraClipboard(null, {"button":"Copy Code","success":"Copied!","error":"Press Ctrl+C to Copy"})</script>




Welcome to the [Professional, Polished, Presentable](/) workshop! We look forward to meeting you.

This is an intermediate workshop designed for R learners already familiar with the [xaringan](/packages/xaringan/) package for building presentations. Before attending the workshop, please complete the following prework.

## Get the materials

<i class="fas fa-tasks" pr2></i> **Reminder:** Check back the day before the workshop to download companion materials that will help you complete the exercises:


```r
usethis::use_course(
  url = "presentable-user2021/materials",
  destdir = "/file/path/on/your/local/machine"
)
```

## Bring a style guide

We will be using the [xaringanthemer](/packages/xaringanthemer) package to create a style sheet to match the style guide preferred or required by your organization, institution, or company.

### Find your style guide

Ask the marketing department at your company for a _branding guide_ or _design guide_.
Typically these are posted on internal web pages.
If you work with a large organization
you may be able to find a style guide by searching online for your company or organization's name 
plus the terms *style*, *design*, or *branding guide*.
  
Alternatively, you can find [examples of style guides](https://policyviz.com/2016/11/30/style-guides/) online.
Choose one that matches your design aspirations.
  
Here are a few that we like:
  
- [GOV.UK Design System](https://design-system.service.gov.uk/) is excellent.
  Their [Styles page](https://design-system.service.gov.uk/styles/) is a great place to start.
  
- The [Urban Institute Data Visualization Style Guide](http://urbaninstitute.github.io/graphics-styleguide/) 
  provides solid design advice, especially for charts and graphs.
  
- The [U.S. Web Design System](https://designsystem.digital.gov/) 
  is a treasure trove of design advice and knowledge. 
  Their page on [Design tokens](https://designsystem.digital.gov/design-tokens/) 
  is a good place to start looking for color and typography recommendations.

### Explore the style guide

Explore the style guide, asking yourself:

- What colors does it use and in what contexts?

- What fonts does it recommend for **headings** and **body** text?

    - Does the guide recommend specific fonts for screens or the web?
    
### Bring the guide with you

Have this style guide easily available during the workshop so you can refer to it as needed.

## Review markdown

Please complete this [10-minute interactive tutorial on Markdown](https://commonmark.org/help/tutorial/).

## Review xaringan

Please review the [xaringan](/packages/xaringan/) package documentation and/or [xaringan chapter](https://bookdown.org/yihui/rmarkdown/xaringan.html) of the R Markdown book.

## Pick a browser

[firefox]: https://www.mozilla.org/en-US/firefox/new/
[chrome]: https://www.google.com/chrome/
[edge]: https://www.microsoft.com/en-us/edge
[safari]: https://www.apple.com/safari/

<div class="flex flex-wrap tc">
<div class="w-25-ns w-50 ph4-ns ph3 pt3 pt-ns relative dim">
<a class="f4" href="https://www.mozilla.org/en-US/firefox/new/">
<img src="/slides/assets/img/firefox_256.png" alt="Firefox browser logo"><br>
<i class="fa fa-star gold absolute top-0 left-1"></i>
<span class="clip">Preferred: </span>
Firefox
</a>
</div>
<div class="w-25-ns w-50 ph4-ns ph3 pt3 pt-ns relative dim">
<a class="f4" href="https://www.google.com/chrome/">
<img src="/slides/assets/img/chrome_256.png" alt="Chrome browser logo"><br>
<i class="fa fa-star gold absolute top-0 left-1"></i>
<span class="clip">Preferred: </span>
Chrome
</a>
</div>
<div class="w-25-ns w-50 ph4-ns ph3 pt3 pt-ns dim">
<a class="f4" href="https://www.apple.com/safari/">
<img src="/slides/assets/img/safari_256.png" alt="Safari browser logo"><br>
Safari
</a>
</div>
<div class="w-25-ns w-50 ph4-ns ph3 pt3 pt-ns dim">
<a class="f4" href="https://www.microsoft.com/en-us/edge">
<img src="/slides/assets/img/edge_256-2.png" alt="Edge browser logo"><br>
Edge
</a>
</div>
</div>

These days, most browsers are great at rendering HTML.
It turns out that they are also full of tools to help you _develop_ for the web.
That said, we'll use either [Firefox] or [Chrome] and we recommend you do the same, if only for our tutorial.
If for any reason you need to use [Safari] or [Edge],
please take a minute to learn how to access the 
[developer tools](https://developer.mozilla.org/en-US/docs/Glossary/Developer_Tools).


## Set up RStudio Cloud

We want you to be able to work from your own computer and preferred IDE in this workshop, but Cloud is an important back-up plan should you run into troubles.

Sign up for a free RStudio Cloud account at https://rstudio.cloud/ before the workshop. We recommend logging in with an existing Google or GitHub account, if you have one (rather than creating a new account with another password you have to remember). 

## Installations

Please bring a computer that has the following installed:

+ A recent version of R (>=3.6.0), which is available for free at https://cloud.r-project.org/
    
+ A recent version of RStudio Desktop (>=1.4), available for free ([RStudio Desktop Open Source License](https://www.rstudio.com/products/rstudio/download/#download)). Read up on the [features of the latest version](https://blog.rstudio.com/2021/01/19/announcing-rstudio-1-4/).
    
+ The R packages we will use:

    + [xaringan](/packages/xaringan/)
    + [xaringanthemer](/packages/xaringanthemer/)
    + [xaringanExtra](/packages/xaringanextra/)
    + [metathis](/packages/metathis/)

<details><summary>Installation R Script</summary>


```r
# Core Packages -----------------------------------------------------------
install.packages(c("xaringan", "metathis"))
install.packages("xaringanthemer", dependencies = TRUE)


# Extra Packages ----------------------------------------------------------
install.packages("remotes")
remotes::install_github("gadenbuie/xaringanExtra")

install.packages("fontawesome")
```
</details>
