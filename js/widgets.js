/* ═══════════════════════════════
   HOMORA — REUSABLE WIDGETS
   Quote forms + price calculators
   ═══════════════════════════════ */

const PHONE = '+358 41 716 9807'
const PHONE_TEL = '+358417169807'

// ── Hero Quote Form (Freska-style) ──
function renderQuoteForm(opts = {}) {
  const id = 'qf_' + Math.random().toString(36).slice(2,8)
  const title = opts.title || 'Get a free quote'
  const sub = opts.sub || 'Enter your details — we\'ll call you back within 24 hours.'
  const compact = opts.compact || false

  return `
  <div class="quote-form animate-in" style="background:#fff;border:1px solid var(--border);border-radius:16px;padding:${compact?'20px':'24px'};box-shadow:0 8px 32px rgba(0,0,0,0.08);">
    <div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:4px;">${title}</div>
    <div style="font-size:13px;color:var(--text-muted);margin-bottom:14px;">${sub}</div>
    <form id="${id}" onsubmit="submitQuote(event,this)" style="display:flex;flex-direction:column;gap:10px;">
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <input type="tel" name="phone" required placeholder="Phone number" style="flex:1;min-width:140px;padding:13px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:15px;font-family:inherit;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='var(--brand)'" onblur="this.style.borderColor='var(--border)'"/>
        <input type="text" name="zip" required placeholder="Postal code" maxlength="6" style="width:130px;padding:13px 14px;border:1.5px solid var(--border);border-radius:10px;font-size:15px;font-family:inherit;outline:none;transition:border-color 0.2s;" onfocus="this.style.borderColor='var(--brand)'" onblur="this.style.borderColor='var(--border)'"/>
      </div>
      <button type="submit" class="btn-primary" style="width:100%;justify-content:center;padding:13px 24px;">Get a free quote →</button>
      <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-top:4px;font-size:12px;color:var(--text-muted);">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--brand)"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        No obligation · We respond fast · Free estimate
      </div>
    </form>
  </div>`
}

function submitQuote(e, form) {
  e.preventDefault()
  const phone = form.phone.value.trim()
  const zip = form.zip.value.trim()
  // Forward to booking system with prefilled values
  const url = new URL('https://booking.homora.fi/book/homora')
  url.searchParams.set('phone', phone)
  url.searchParams.set('zip', zip)
  window.location.href = url.toString()
}

document.querySelectorAll('[data-quote-form]').forEach(el => {
  const title = el.getAttribute('data-quote-title') || undefined
  const sub = el.getAttribute('data-quote-sub') || undefined
  const compact = el.hasAttribute('data-quote-compact')
  el.innerHTML = renderQuoteForm({ title, sub, compact })
})


// ── Price Calculator (m² × rate, Freska/homora.fi style) ──
const CALC_PRICING = {
  carpet: {
    title: 'How much does carpet cleaning cost?',
    sub: 'Price depends on rug size and material type.',
    note: 'For best results, we recommend professional cleaning at least once a year.',
    options: [
      { label: 'Basic rugs', desc: 'Cotton, synthetic (polyester, polypropylene), rag rugs, light everyday rugs', rate: 16, dot: '🟢' },
      { label: 'Standard rugs', desc: 'Pile rugs, wool rugs, viscose, linen, karvalanka', rate: 19, dot: '🔵' },
      { label: 'Premium & delicate rugs', desc: 'Hand-knotted, genuine wool (delicate), silk, Persian, design rugs', rate: 31, dot: '🟡' },
    ],
    cta: 'Book carpet cleaning',
    unit: 'm²',
    defaultSize: 6,
    maxSize: 50,
  },
  homecleaning: {
    title: 'How much does home cleaning cost?',
    sub: 'Hourly rate × time needed for your home.',
    note: 'You can claim 35% back via the Finnish household tax deduction.',
    options: [
      { label: 'Standard cleaning', desc: 'Regular weekly/bi-weekly cleaning. Dusting, vacuuming, mopping, kitchen & bathroom.', rate: 38, dot: '🟢' },
      { label: 'Deep cleaning', desc: 'Thorough top-to-bottom clean. Recommended seasonally or before events.', rate: 49, dot: '🔵' },
      { label: 'Move-in / move-out', desc: 'Full inspection-ready clean for moving day, including oven & inside cabinets.', rate: 55, dot: '🟡' },
    ],
    cta: 'Book home cleaning',
    unit: 'hours',
    defaultSize: 3,
    maxSize: 12,
  },
  moveout: {
    title: 'How much does move-out cleaning cost?',
    sub: 'Fixed price based on apartment size.',
    note: 'Designed to meet your landlord\'s inspection checklist so you get your deposit back.',
    options: [
      { label: 'Studio apartment', desc: 'Up to 30 m² — kitchen, bathroom, all rooms', rate: 120, dot: '🟢', flat: true },
      { label: '1-bedroom apartment', desc: '30–60 m² — full move-out checklist', rate: 165, dot: '🔵', flat: true },
      { label: '2-bedroom apartment', desc: '60–90 m² — full move-out checklist', rate: 220, dot: '🟡', flat: true },
      { label: '3+ bedroom / house', desc: '90 m²+ — request a custom quote', rate: 280, dot: '🟠', flat: true },
    ],
    cta: 'Book move-out cleaning',
    unit: '',
    defaultSize: 1,
    maxSize: 1,
    flat: true,
  },
  window: {
    title: 'How much does window cleaning cost?',
    sub: 'Per square meter pricing for businesses.',
    note: 'Save up to 30% with our recurring 6-cleaning package.',
    options: [
      { label: 'One-time cleaning', desc: 'Single visit — equipment included, insured cleaners', rate: 5, dot: '🟢' },
      { label: 'Recurring (6 cleanings)', desc: '30% off — priority scheduling, dedicated team', rate: 3.5, dot: '🔵' },
    ],
    cta: 'Book window cleaning',
    unit: 'm²',
    defaultSize: 30,
    maxSize: 200,
  },
}

function renderCalc(type) {
  const cfg = CALC_PRICING[type]
  if (!cfg) return ''
  const id = 'calc_' + type
  return `
  <section style="background:linear-gradient(135deg,#EBF3FF 0%,#F0F7FF 100%);">
    <div class="section-inner">
      <div class="section-header animate-in">
        <span class="section-tag">Instant quote</span>
        <h2 class="section-title">${cfg.title.replace(/(\bcarpet|home|move-out|window)\b/i, m => `<em>${m}</em>`)}</h2>
        <p class="section-sub">${cfg.sub}</p>
      </div>

      <div class="animate-in" style="max-width:880px;margin:0 auto;background:#fff;border-radius:24px;padding:40px;box-shadow:0 8px 40px rgba(0,0,0,0.06);">
        <!-- Type selection -->
        <div class="calc-type-grid" style="display:grid;grid-template-columns:repeat(${cfg.options.length},1fr);gap:12px;margin-bottom:28px;">
          ${cfg.options.map((o,i) => `
            <button type="button" data-rate="${o.rate}" data-flat="${o.flat?1:0}" data-label="${o.label}" onclick="selectCalcType('${id}',this)" class="calc-type-btn ${i===0?'active':''}" style="text-align:left;padding:16px;border:2px solid ${i===0?'var(--brand)':'var(--border)'};border-radius:14px;background:${i===0?'var(--brand-pale)':'#fff'};cursor:pointer;font-family:inherit;transition:all 0.2s;">
              <div style="font-size:22px;margin-bottom:4px;">${o.dot}</div>
              <div style="font-size:14px;font-weight:700;color:var(--text);">${o.label}</div>
              <div style="font-size:12px;color:var(--text-muted);margin:4px 0 8px;line-height:1.4;">${o.desc}</div>
              <div style="font-size:16px;font-weight:800;color:var(--brand);">€${o.rate}${cfg.unit?` / ${cfg.unit}`:''}</div>
            </button>
          `).join('')}
        </div>

        ${!cfg.flat ? `
          <div style="display:grid;grid-template-columns:1fr auto;gap:20px;align-items:end;margin-bottom:24px;">
            <div>
              <label style="display:block;font-size:13px;font-weight:600;color:var(--text);margin-bottom:8px;">Size (${cfg.unit})</label>
              <input id="${id}_size" type="number" min="0" step="0.5" value="${cfg.defaultSize}" oninput="calcUpdate('${id}',${cfg.maxSize})" style="width:100%;padding:14px 16px;border:1.5px solid var(--border);border-radius:12px;font-size:15px;font-family:inherit;"/>
            </div>
            <div style="font-size:13px;color:var(--text-muted);padding-bottom:14px;">Adjust ↓</div>
          </div>
          <input id="${id}_slider" type="range" min="0" max="${cfg.maxSize}" step="0.5" value="${cfg.defaultSize}" oninput="document.getElementById('${id}_size').value=this.value;calcUpdate('${id}',${cfg.maxSize})" style="width:100%;accent-color:var(--brand);height:6px;cursor:pointer;margin-bottom:8px;"/>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-muted);margin-bottom:24px;">
            <span>0 ${cfg.unit}</span><span>${Math.round(cfg.maxSize/2)} ${cfg.unit}</span><span>${cfg.maxSize} ${cfg.unit}</span>
          </div>
        ` : ''}

        <div style="text-align:center;padding:32px 24px;background:linear-gradient(135deg,#EBF3FF,#F0F7FF);border-radius:16px;">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">Estimated price</div>
          <div id="${id}_price" style="font-size:clamp(2.8rem,6vw,4.5rem);font-weight:900;line-height:1;background:linear-gradient(135deg,var(--brand),var(--brand-dark));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">€${(cfg.options[0].rate * (cfg.flat?1:cfg.defaultSize)).toFixed(2)}</div>
          <div id="${id}_detail" style="font-size:13px;color:var(--text-muted);margin-top:8px;">${cfg.flat?cfg.options[0].label:`${cfg.defaultSize} ${cfg.unit} × €${cfg.options[0].rate.toFixed(2)}/${cfg.unit}`}</div>
        </div>

        <p style="text-align:center;font-size:12px;color:var(--text-muted);margin:16px 0;">${cfg.note}</p>

        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <a href="https://booking.homora.fi/book/homora" class="btn-primary">${cfg.cta} →</a>
          <a href="tel:${PHONE_TEL}" class="btn-outline" style="display:inline-flex;align-items:center;gap:8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg> Call us</a>
        </div>
      </div>
    </div>
  </section>`
}

function selectCalcType(id, btn) {
  // Update active state
  btn.parentNode.querySelectorAll('.calc-type-btn').forEach(b => {
    b.classList.remove('active')
    b.style.borderColor = 'var(--border)'
    b.style.background = '#fff'
  })
  btn.classList.add('active')
  btn.style.borderColor = 'var(--brand)'
  btn.style.background = 'var(--brand-pale)'

  // Recalculate
  const rate = parseFloat(btn.getAttribute('data-rate'))
  const flat = btn.getAttribute('data-flat') === '1'
  const label = btn.getAttribute('data-label')
  const sizeEl = document.getElementById(id + '_size')
  const priceEl = document.getElementById(id + '_price')
  const detailEl = document.getElementById(id + '_detail')
  if (!priceEl) return
  if (flat) {
    priceEl.textContent = '€' + rate.toFixed(2)
    detailEl.textContent = label
  } else {
    const size = parseFloat(sizeEl.value) || 0
    priceEl.textContent = '€' + (size * rate).toFixed(2)
    detailEl.textContent = `${size} × €${rate.toFixed(2)}`
  }
  // Store current rate for slider updates
  const calcId = id.replace('calc_', '')
  document.getElementById(id + '_size')?.setAttribute('data-rate', rate)
}

function calcUpdate(id, maxSize) {
  const sizeInput = document.getElementById(id + '_size')
  const slider = document.getElementById(id + '_slider')
  const priceEl = document.getElementById(id + '_price')
  const detailEl = document.getElementById(id + '_detail')
  const activeBtn = document.querySelector(`#${id.replace('calc_','')} .calc-type-btn.active`) ||
                    document.querySelector('.calc-type-btn.active')
  const rate = activeBtn ? parseFloat(activeBtn.getAttribute('data-rate')) : 16
  const size = parseFloat(sizeInput.value) || 0
  if (slider && Math.abs(parseFloat(slider.value) - size) > 0.05) slider.value = Math.min(maxSize, size)
  priceEl.textContent = '€' + (size * rate).toFixed(2)
  // Find the unit from any data-rate button
  const cfg = Object.values(CALC_PRICING).find(c => c.options.some(o => o.rate === rate))
  const unit = cfg ? cfg.unit : ''
  detailEl.textContent = `${size} ${unit} × €${rate.toFixed(2)}/${unit}`
}

document.querySelectorAll('[data-calc]').forEach(el => {
  const type = el.getAttribute('data-calc')
  el.outerHTML = renderCalc(type)
})
