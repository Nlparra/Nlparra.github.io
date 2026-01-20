
  const symbols = document.querySelectorAll('.symbol')

  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10
    const y = (e.clientY / window.innerHeight - 0.5) * 10

    symbols.forEach((el, i) => {
      const depth = (i + 1) * 4
      el.style.transform = `translate(${x / depth}px, ${y / depth}px)`
    })
  })

const reveals = document.querySelectorAll('.reveal')

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        entry.target.classList.remove('is-hidden')
      } else {
        entry.target.classList.remove('is-visible')
        entry.target.classList.add('is-hidden')
      }
    })
  },
  {
    root: null,
    threshold: 0.6
  }
)

reveals.forEach(section => observer.observe(section))
