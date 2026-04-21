/* ═══════════════════════════════
   HOMORA — INTERACTIONS
   ═══════════════════════════════ */

// Init language on load
setLang(currentLang)

// Scroll-triggered animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible')
      e.target.querySelectorAll('[data-count]').forEach(countUp)
      observer.unobserve(e.target)
    }
  })
}, { threshold: 0.12 })
document.querySelectorAll('.animate-in, .animate-in-left, .animate-in-right').forEach(el => observer.observe(el))

// Hero stats count up immediately
setTimeout(() => {
  document.querySelectorAll('.hero-stat-num[data-count]').forEach(countUp)
}, 600)

function countUp(el) {
  const target = parseInt(el.getAttribute('data-count'))
  if (!target) return
  const suffix = (el.innerHTML.match(/<span[^>]*>([^<]*)<\/span>/) || ['',''])[1]
  let start = 0
  const timer = setInterval(() => {
    start = Math.min(start + target / 100, target)
    el.innerHTML = Math.floor(start) + `<span>${suffix}</span>`
    if (start >= target) clearInterval(timer)
  }, 16)
}

// Nav scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav')
  if (nav) nav.classList.toggle('scrolled', scrollY > 20)
})

// Mouse parallax
const orbs = document.querySelectorAll('.orb')
const factors = [0.025, -0.02, 0.015, -0.03]
document.addEventListener('mousemove', e => {
  const cx = innerWidth / 2, cy = innerHeight / 2
  orbs.forEach((o, i) => {
    const f = factors[i] || 0.02
    o.style.transform = `translate(${(e.clientX-cx)*f}px,${(e.clientY-cy)*f}px)`
  })
})

// Before/After slider
const bc = document.getElementById('baContainer')
const ba = document.getElementById('baAfter')
const bd = document.getElementById('baDivider')
if (bc && ba && bd) {
  let drag = false
  const slide = x => {
    const r = bc.getBoundingClientRect()
    const p = Math.min(Math.max((x - r.left) / r.width * 100, 2), 98)
    ba.style.width = p + '%'
    bd.style.left = p + '%'
  }
  bc.addEventListener('mousedown', e => { drag = true; slide(e.clientX) })
  bc.addEventListener('touchstart', e => { drag = true; slide(e.touches[0].clientX) }, {passive:true})
  window.addEventListener('mousemove', e => { if (drag) slide(e.clientX) })
  window.addEventListener('touchmove', e => { if (drag) slide(e.touches[0].clientX) }, {passive:true})
  window.addEventListener('mouseup', () => drag = false)
  window.addEventListener('touchend', () => drag = false)
}

// FAQ toggles
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    q.parentElement.classList.toggle('open')
  })
})

// Mobile menu
const mobileToggle = document.getElementById('mobileToggle')
const mobileMenu = document.getElementById('mobileMenu')
if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open')
    mobileToggle.textContent = mobileMenu.classList.contains('open') ? '✕' : '☰'
  })
}
