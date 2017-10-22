/*

  # VARIUS
  ## version 0.0.1

  Varius is a CSS reprocessor that exposes the properties of elements from JavaScript to CSS via setting CSS variables. The full list of available variables you can use in your CSS is:

  ## Global Variables

  - innerWidth
  - innerHeight

  ## Scoped Variables

  - offsetWidth
  - offsetHeight
  - offsetLeft
  - offsetTop
  - scrollWidth
  - scrollHeight
  - scrollLeft
  - scrollTop
  - children
  - characters
  - value

  - https://github.com/tomhodgins/varius

  Author: Tommy Hodgins

  License: MIT

*/

function varius() {

  document.documentElement.style.setProperty('--innerWidth', innerWidth)
  document.documentElement.style.setProperty('--innerHeight', innerHeight)

  document.querySelectorAll('body *').forEach(tag => {

    tag.style.setProperty('--offsetWidth', tag.offsetWidth)
    tag.style.setProperty('--offsetHeight', tag.offsetHeight)
    tag.style.setProperty('--offsetLeft', tag.offsetLeft)
    tag.style.setProperty('--offsetTop', tag.offsetTop)

    tag.style.setProperty('--scrollWidth', tag.scrollWidth)
    tag.style.setProperty('--scrollHeight', tag.scrollHeight)
    tag.style.setProperty('--scrollLeft', tag.scrollLeft)
    tag.style.setProperty('--scrollTop', tag.scrollTop)

    tag.style.setProperty('--children', tag.children.length)
    tag.style.setProperty('--characters', tag.innerHTML.length || '')
    tag.style.setProperty('--value', tag.value ? tag.value.length : '')

  })

}

window.addEventListener('load', varius)
window.addEventListener('resize', varius)
window.addEventListener('input', varius)
window.addEventListener('click', varius)
