/* ═══════════════════════════════
   HOMORA — REAL GOOGLE REVIEWS
   Shared across all pages
   ═══════════════════════════════ */

const REVIEWS = [
  {
    name: 'Samane Gazerani',
    initials: 'SG',
    avatarColor: 'linear-gradient(135deg,#EA4335,#FBBC05)',
    date: 'April 21, 2026',
    text: 'Annoin heille kaksi mattoa pesuun ja yhden puvun kemialliseen pesuun, ja työn laatu oli erinomainen. En uskonut, että maton tahra lähtisi kokonaan, mutta siitä ei jäänyt mitään jälkeä. Olen todella tyytyväinen lopputulokseen. Myös asiakaspalvelu oli ystävällistä ja ammattitaitoista. Suosittelen lämpimästi!'
  },
  {
    name: 'Saeed Hassanabadi',
    initials: 'SH',
    avatarColor: 'linear-gradient(135deg,#4285F4,#34A853)',
    date: 'January 27, 2026',
    text: 'Super kind and professional, fast delivery and fair rates'
  },
  {
    name: 'Rose Mac',
    initials: 'RM',
    avatarColor: 'linear-gradient(135deg,#FBBC05,#EA4335)',
    date: 'December 27, 2025',
    text: 'Excellent work!'
  },
  {
    name: 'Mehdi Najafi',
    initials: 'MN',
    avatarColor: 'linear-gradient(135deg,#34A853,#4285F4)',
    date: 'November 6, 2025',
    text: 'Very professional and responsible. Thank you Homora 🌹'
  },
  {
    name: 'Neda Aghaei',
    initials: 'NA',
    avatarColor: 'linear-gradient(135deg,#9333EA,#EC4899)',
    date: 'October 15, 2025',
    text: "If you're looking to simplify your routine, I highly recommend this monthly subscription package for home services. They offer a fantastic all-in-one solution covering cleaning, laundry, and ironing. The price is very reasonable for the amount of service you get, making it an excellent value. It's truly a seamless, hassle-free way to manage your household chores."
  },
  {
    name: 'Asa Nyman',
    initials: 'AN',
    avatarColor: 'linear-gradient(135deg,#EC4899,#F59E0B)',
    date: 'September 8, 2025',
    text: 'Excellent service, very thorough and professional cleaning. Highly recommend!'
  },
  {
    name: 'Majid Yoosef Sorbi',
    initials: 'MS',
    avatarColor: 'linear-gradient(135deg,#0EA5E9,#9333EA)',
    date: 'August 19, 2025',
    text: 'Great quality, on time, and friendly staff. Would book again.'
  }
]

const GOOGLE_LOGO = `<svg width="14" height="14" viewBox="0 0 24 24" style="flex-shrink:0;"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>`

function renderReviews(opts = {}) {
  const limit = opts.limit || 4
  const list = REVIEWS.slice(0, limit)
  return `
  <section class="testimonials-bg">
    <div class="section-inner">
      <div class="section-header animate-in">
        <span class="section-tag">Reviews</span>
        <h2 class="section-title">What our customers say about <em>Homora services</em></h2>
        <p class="section-sub">From Helsinki to Espoo, our clients trust us to deliver reliable and high-quality services. Read their experiences and see why people across Finland choose us.</p>
      </div>
      <div class="testimonials-grid" style="grid-template-columns:repeat(${Math.min(limit,4)},1fr);gap:20px;">
        ${list.map((r, i) => `
          <div class="testimonial-card animate-in" style="animation-delay:.${(i+1)*5}s">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
              <div class="testimonial-avatar" style="background:${r.avatarColor};width:44px;height:44px;font-size:15px;">${r.initials}</div>
              <div style="flex:1;min-width:0;">
                <div class="testimonial-name" style="display:flex;align-items:center;gap:6px;">${r.name} ${GOOGLE_LOGO}</div>
                <div class="testimonial-role" style="font-size:12px;">${r.date}</div>
              </div>
            </div>
            <div class="testimonial-stars" style="margin-bottom:10px;">★★★★★</div>
            <div class="testimonial-text" style="font-style:normal;font-size:14.5px;line-height:1.65;">${r.text}</div>
          </div>
        `).join('')}
      </div>
      <div class="center mt-32">
        <a href="https://www.google.com/maps/search/Homora+Helsinki" target="_blank" rel="noopener" class="btn-outline" style="display:inline-flex;align-items:center;gap:8px;">${GOOGLE_LOGO} Read more reviews on Google</a>
      </div>
    </div>
  </section>`
}

// Auto-inject if there's a placeholder
document.querySelectorAll('[data-reviews]').forEach(el => {
  const limit = parseInt(el.getAttribute('data-reviews')) || 4
  el.innerHTML = renderReviews({ limit })
})
