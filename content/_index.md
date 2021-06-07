---
title: "Professional, Polished, Presentable"
subtitle: "Making great slides with xaringan"
description: >
  The xaringan package brings professional, impressive, and visually appealing
  slides to the powerful R Markdown ecosystem. Through our hands-on tutorial,
  you will learn how to design highly effective slides that support
  presentations for teaching and reporting alike. Over three hours, you will
  learn how to create an accessible baseline design that matches your
  institution or organization’s style guide. Together we’ll explore the basics
  of CSS—the design language of the internet—and how we can leverage CSS to
  produce elegant slides for effective communication.
images:
  - img/xaringan-colored.svg
image_left: false
text_align_left: true
show_social_links: true # specify social accounts in site config
show_action_link: true
action_link: /start
action_label: "Read More &rarr;"
action_type: text # text, button
type: home
head_custom: |
  <script src="https://unpkg.com/inline-svg@2.2.3/dist/inlineSVG.min.js"></script>
  <script>
  document.addEventListener('DOMContentLoaded', function() {
    inlineSVG.init({
      svgSelector: '.page-main > .page-content > .flex-l > div:last-child > img'
    })
  })
  </script>
  <style>
  @media (prefers-reduced-motion: no-preference) {
    svg.inlined-svg > g > g > g:nth-child(5) {
      animation: rotate 20s linear infinite;
      transform-origin: 49.8% 50.2%;
    }
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  }
  </style>
---

** index doesn't contain a body, just front matter above.
See index.html in the layouts folder **

