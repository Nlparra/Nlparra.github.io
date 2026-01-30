/* ================================
   SYMBOL PARALLAX EFFECT
================================ */

let symbols = document.querySelectorAll('.symbol')

document.addEventListener('mousemove', function (e) {
  let x = (e.clientX / window.innerWidth - 0.5) * 10
  let y = (e.clientY / window.innerHeight - 0.5) * 10

  symbols.forEach(function (el, i) {
    let depth = (i + 1) * 4
    el.style.transform = 'translate(' + (x / depth) + 'px, ' + (y / depth) + 'px)'
  })
})


/* ================================
   SCROLL REVEAL (INTERSECTION OBSERVER)
   Mobile-safe version
================================ */

let reveals = document.querySelectorAll('.reveal')

let observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        entry.target.classList.remove('is-hidden')
      }
    })
  },
  {
    root: null,
    threshold: 0.2
  }
)

reveals.forEach(function (section) {
  observer.observe(section)
})


/* ================================
   FOOTER YEAR AUTO UPDATE
================================ */

let yearEl = document.getElementById("year")
if (yearEl) {
  yearEl.textContent = new Date().getFullYear()
}


/* ================================
   HEADER STICKY + SCROLLSPY
================================ */

let header = document.getElementById("siteHeader")
let navLinks = document.querySelectorAll(".header-nav a")
let sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", function () {

  /* Sticky header */
  if (window.scrollY > 80) {
    header.classList.add("active")
  } else {
    header.classList.remove("active")
  }

  /* Scrollspy */
  let current = ""

  sections.forEach(function (section) {
    let sectionTop = section.offsetTop - 120
    let sectionHeight = section.offsetHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach(function (link) {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })

})


/* ================================
   DESKTOP NAV SMOOTH SCROLL
   (header offset safe)
================================ */

document.querySelectorAll('.header-nav a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    let target = document.querySelector(link.getAttribute('href'))
    if (!target) return

    let y = target.getBoundingClientRect().top + window.scrollY - 90
    window.scrollTo({ top: y, behavior: "smooth" })
  })
})


/* ================================
   MOBILE MENU TOGGLE + SCROLL FIX
================================ */

let mobileToggle = document.getElementById("mobileToggle")
let mobileMenu = document.getElementById("mobileMenu")

if (mobileToggle && mobileMenu) {

  /* Open / Close mobile menu */
  mobileToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active")
    mobileToggle.classList.toggle("active")
    document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "auto"
  })

  /* Mobile nav smooth scroll */
  document.querySelectorAll(".mobile-nav a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      let target = document.querySelector(link.getAttribute("href"))

      mobileMenu.classList.remove("active")
      mobileToggle.classList.remove("active")
      document.body.style.overflow = "auto"

      if (!target) return

      let y = target.getBoundingClientRect().top + window.scrollY - 90
      window.scrollTo({ top: y, behavior: "smooth" })
    })
  })

}
