const burger = document.querySelector('.burger')
const navList = document.querySelector('.navList')
let load = 1
const loadTime = document.getElementById('loadTime')

document.addEventListener('DOMContentLoaded', () => {
  gsap.to('.innerBar', { x: 0, duration: 2.75 })
  gsap.to('.preloader', { autoAlpha: 0, delay: 2.8, ease: 'power1.in' })
  setInterval(updateLoad, 22)
})

function updateLoad() {
  load += load < 100
  loadTime.innerHTML = load
  document.body.style.overflowY = 'hidden'
}

burger.addEventListener('click', navMenu)

function navMenu() {
  if (navList.classList.contains('open')) {
    navList.classList.remove('open')
    burger.innerHTML = '<i class="fa fa-bars"></i>'
    navList.style.transform = 'translateX(100%)'
  } else {
    navList.classList.add('open')
    burger.innerHTML = '<i class="fa fa-times"></i>'
    navList.style.transform = 'translateX(0)'
  }
}

const tl = gsap.timeline({ delay: 2.98 })
tl.from('.homeGraphic', { duration: 2, opacity: 0 })
tl.from('nav', { duration: 1.5, y: '-100%' }, '<')
tl.from('.navList a', { opacity: 0, stagger: 0.25 }, '>-0.5')
tl.from('.social a', { opacity: 0, stagger: 0.3 }, '>')
tl.from('.line', { duration: 2.5, x: '-100%', opacity: 0 }, '>-1.25')
tl.from('.original', { duration: 1.5, y: '150%' }, '>-1.5')
tl.from('.fresh', { duration: 1.5, y: '-150%' }, '>-1')
tl.from('.cta', { duration: 1, scale: 0, stagger: 0.5 }, '>-1')
