/* ═══════════════════════════════
   HOMORA — SHARED HEADER/FOOTER
   Inserted into pages that have <div id="header"></div>
   ═══════════════════════════════ */

const NAV_HTML = `
<nav id="nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo"><img src="/images/logo-full.png" alt="Homora" /></a>
    <div class="nav-links">
      <a href="/">Home</a>
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">Services <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg></button>
        <div class="nav-dropdown-menu" style="min-width:340px;">
          <a href="/services/home-cleaning.html"><span class="icon" style="background-image:url(/images/thumbs/home-cleaning.webp);"></span> Home Cleaning</a>
          <a href="/services/laundry-ironing.html"><span class="icon" style="background-image:url(/images/thumbs/laundry.jpg);"></span> Laundry & Ironing</a>
          <a href="/services/carpet-cleaning.html"><span class="icon" style="background-image:url(/images/thumbs/carpet.jpg);"></span> Carpet cleaning</a>
          <a href="/services/sewing-tailoring.html"><span class="icon" style="background-image:url(/images/thumbs/tailoring.jpg);"></span> Sewing & tailor</a>
          <a href="/services/moving-service.html"><span class="icon" style="background-image:url(/images/thumbs/moving.jpg);"></span> Moving Service</a>
          <a href="/services/handyman.html"><span class="icon" style="background-image:url(/images/thumbs/handyman.jpg);"></span> Handyman</a>
          <a href="/services/move-out-cleaning-services.html"><span class="icon" style="background-image:url(/images/thumbs/move-out.webp);"></span> Move Out Cleaning</a>
          <a href="/services/window-washing-for-businesses.html"><span class="icon" style="background-image:url(/images/thumbs/window.webp);"></span> Window Washing for Businesses</a>
        </div>
      </div>
      <a href="/pricing.html">Pricing</a>
      <a href="/gift-cards.html">Gift card</a>
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger">About us <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg></button>
        <div class="nav-dropdown-menu">
          <a href="/who-we-are.html"><span class="icon" style="background:#E8F5ED;">📖</span> Our story</a>
          <a href="/join-us.html"><span class="icon" style="background:#FEF3C7;">🤝</span> Join us</a>
          <a href="/faq.html"><span class="icon" style="background:#EBF3FF;">❓</span> FAQ</a>
        </div>
      </div>
      <a href="/blog/">Blog</a>
    </div>
    <div class="nav-right">
      <div class="lang-switcher" id="langSwitcher">
        <button class="lang-btn" id="langBtn" onclick="toggleLang()">
          <span class="lang-flag" id="currentFlag">🇬🇧</span>
          <span id="currentLangName">EN</span>
          <span class="lang-arrow">▼</span>
        </button>
        <div class="lang-dropdown" id="langDropdown">
          <div class="lang-option" onclick="setLang('en')"><span class="flag">🇬🇧</span> English <span class="check" id="check-en">✓</span></div>
          <div class="lang-option" onclick="setLang('fi')"><span class="flag">🇫🇮</span> Suomi ( Finnish ) <span class="check" id="check-fi" style="display:none">✓</span></div>
          <div class="lang-option" onclick="setLang('ru')"><span class="flag">🇷🇺</span> Русский <span class="check" id="check-ru" style="display:none">✓</span></div>
          <div class="lang-option" onclick="setLang('uk')"><span class="flag">🇺🇦</span> Українська <span class="check" id="check-uk" style="display:none">✓</span></div>
        </div>
      </div>
      <a href="https://booking.homora.fi/book/homora" class="nav-cta">Book service</a>
      <button class="mobile-menu-toggle" id="mobileToggle">☰</button>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="/">Home</a>
  <a href="/services/home-cleaning.html">Home Cleaning</a>
  <a href="/services/laundry-ironing.html">Laundry & Ironing</a>
  <a href="/services/carpet-cleaning.html">Carpet cleaning</a>
  <a href="/services/sewing-tailoring.html">Sewing & tailor</a>
  <a href="/services/moving-service.html">Moving Service</a>
  <a href="/services/handyman.html">Handyman</a>
  <a href="/services/move-out-cleaning-services.html">Move Out Cleaning</a>
  <a href="/services/window-washing-for-businesses.html">Window Washing for Businesses</a>
  <a href="/pricing.html">Pricing</a>
  <a href="/gift-cards.html">Gift card</a>
  <a href="/who-we-are.html">Our story</a>
  <a href="/join-us.html">Join us</a>
  <a href="/faq.html">FAQ</a>
  <a href="/blog/">Blog</a>
  <a href="/join-us.html" class="nav-cta" style="display:inline-flex;margin-top:12px;">Join as a provider</a>
</div>
`

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid" style="grid-template-columns:1.6fr 1fr 1fr 1fr;">
      <div class="footer-brand">
        <img src="/images/logo-full.png" alt="Homora" />
        <p style="font-size:13px;color:rgba(255,255,255,0.85);margin-bottom:14px;"><strong>Homora is under NEOM & Partner Capital Group.</strong></p>
        <p>Homora provides reliable, eco-conscious home services from laundry and tailoring to cleaning and seasonal tasks designed to make everyday living easier and hassle-free.</p>
        <address style="margin-top:18px;">
          <div style="margin-bottom:6px;">📍 Address: Mäntytie 21, 00270 Helsinki, Finland</div>
          <div style="margin-bottom:6px;">📞 Phone: <a href="tel:+358417169807" style="color:rgba(255,255,255,0.7);text-decoration:none;">+358 41 716 9807</a></div>
          <div style="margin-bottom:6px;">🕒 Hours: Mon–Fri 10:00–18:00 | Sat 10:00–16:00 | Sun Closed</div>
          <div>📍 Service Area: Helsinki • Espoo • Vantaa • Kauniainen</div>
        </address>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Services</div>
        <a href="/services/home-cleaning.html">Home Cleaning</a>
        <a href="/services/laundry-ironing.html">Laundry & Ironing</a>
        <a href="/services/carpet-cleaning.html">Carpet Cleaning</a>
        <a href="/services/sewing-tailoring.html">Sewing & Tailoring</a>
        <a href="/services/handyman.html">Handyman Services</a>
        <a href="/services/moving-service.html">Moving Services</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">General</div>
        <a href="/services/window-washing-for-businesses.html">Corporate services</a>
        <a href="/join-us.html">Join us as a provider</a>
        <a href="/gift-cards.html">Gift Card</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">About us</div>
        <a href="/who-we-are.html">Our story</a>
        <a href="/blog/" style="margin-top:6px;">Blog</a>
        <a href="/faq.html">FAQ</a>
        <div class="footer-col-title" style="margin-top:24px;">Follow us on social media</div>
        <a href="#" style="display:inline-flex;align-items:center;gap:8px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> Instagram</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Homora. All rights reserved.</span>
      <span>Chat on WhatsApp available</span>
    </div>
  </div>
</footer>
<div class="float-actions">
  <a href="tel:+358417169807" class="float-btn call" aria-label="Call us">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg>
    <span class="label">Call us</span>
  </a>
  <a href="https://wa.me/358417169807" class="float-btn wa" target="_blank" aria-label="WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    <span class="label">WhatsApp</span>
  </a>
</div>
`

document.getElementById('header')?.insertAdjacentHTML('afterbegin', NAV_HTML)
document.getElementById('footer')?.insertAdjacentHTML('afterbegin', FOOTER_HTML)
