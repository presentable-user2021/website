(function () {
  const ready = function (fn) {
  /* MIT License Copyright (c) 2016 Nuclei */
  /* https://github.com/nuclei/readyjs */
    const completed = () => {
      document.removeEventListener('DOMContentLoaded', completed)
      window.removeEventListener('load', completed)
      fn()
    }
    if (document.readyState !== 'loading') {
      setTimeout(fn)
    } else {
      document.addEventListener('DOMContentLoaded', completed)
      window.addEventListener('load', completed)
    }
  }

  ready(function () {
    const placeholders = document.querySelectorAll('.remark-slides-area [data-slide-name]')

    if (!placeholders.length) {
      return;
    }

    function getSlideSource (name, keepName) {
      let src = '---\n'
      src += document
        .getElementById('source')
        .textContent.split(/(^|\n)---\n/)
        .filter(s => s.match(RegExp(`name: ?${name}`)))
        .join()

      if (!keepName) {
        src = src.replace(/\nname: ?[^\n]+/, '')
      }

      return src
    }

    function appendSlideSource (el) {
      console.log(el.dataset)
      const theCode = getSlideSource(el.dataset.slideName, el.dataset.keepName)
      const pre = document.createElement('pre')
      const code = document.createElement('code')
      code.classList = 'markdown remark-code'
      theCode.split('\n').forEach(function(line) {
        const div = document.createElement('div')
        div.classList = 'remark-code-line'
        div.innerText = line
        code.appendChild(div)
      })
      // code.innerText = theCode
      pre.appendChild(code)

      el.appendChild(pre)
      return el
    }

    function getSlideNodeClone (name) {
      const slide = document.getElementById('slide-' + name)
      const newSlide = slide.cloneNode(true)
      newSlide.removeAttribute('id')
      return newSlide
    }

    function appendSlideNode (el) {
      const slide = getSlideNodeClone(el.dataset.slideName)
      el.appendChild(slide)
      return el
    }

    placeholders.forEach(function (el) {
      switch (el.dataset.type) {
        case 'source':
          appendSlideSource(el)
          break
        case 'slide':
        default:
          appendSlideNode(el)
      }
    })
  })
})()
