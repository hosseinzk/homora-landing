/* ═══════════════════════════════
   HOMORA — SHARED HEADER/FOOTER
   Inserted into pages that have <div id="header"></div>
   ═══════════════════════════════ */

const NAV_HTML = `
<nav id="nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo"><img src="/images/logo-full.png" alt="Homora" /></a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <button class="nav-dropdown-trigger"><span data-i18n="nav.services">Services</span> <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg></button>
        <div class="nav-dropdown-menu">
          <a href="/services/home-cleaning.html"><span class="icon" style="background:#E8F5ED;">🏠</span> <span data-i18n="nav.svc.home">Home Cleaning</span></a>
          <a href="/services/laundry.html"><span class="icon" style="background:#EBF3FF;">👕</span> <span data-i18n="nav.svc.laundry">Laundry & Ironing</span></a>
          <a href="/services/carpet-cleaning.html"><span class="icon" style="background:#FEF3C7;">🧹</span> <span data-i18n="nav.svc.carpet">Carpet Cleaning</span></a>
          <a href="/services/tailoring.html"><span class="icon" style="background:#FDE8F3;">🧵</span> <span data-i18n="nav.svc.tailoring">Sewing & Tailoring</span></a>
          <a href="/services/handyman.html"><span class="icon" style="background:#EEF2FF;">🔧</span> <span data-i18n="nav.svc.handyman">Handyman</span></a>
        </div>
      </div>
      <a href="/pricing.html" data-i18n="nav.pricing">Pricing</a>
      <a href="/about.html" data-i18n="nav.about">About Us</a>
      <a href="/faq.html" data-i18n="nav.faq">FAQ</a>
      <a href="/join-us.html" data-i18n="nav.join">Join Us</a>
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
          <div class="lang-option" onclick="setLang('fi')"><span class="flag">🇫🇮</span> Suomi <span class="check" id="check-fi" style="display:none">✓</span></div>
          <div class="lang-option" onclick="setLang('ru')"><span class="flag">🇷🇺</span> Русский <span class="check" id="check-ru" style="display:none">✓</span></div>
          <div class="lang-option" onclick="setLang('uk')"><span class="flag">🇺🇦</span> Українська <span class="check" id="check-uk" style="display:none">✓</span></div>
        </div>
      </div>
      <a href="https://booking.homora.fi/book/homora" class="nav-cta" data-i18n="nav.book">Book Now →</a>
      <button class="mobile-menu-toggle" id="mobileToggle">☰</button>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="/" data-i18n="nav.home">Home</a>
  <a href="/services/home-cleaning.html" data-i18n="nav.svc.home">Home Cleaning</a>
  <a href="/services/laundry.html" data-i18n="nav.svc.laundry">Laundry</a>
  <a href="/services/carpet-cleaning.html" data-i18n="nav.svc.carpet">Carpet Cleaning</a>
  <a href="/services/tailoring.html" data-i18n="nav.svc.tailoring">Tailoring</a>
  <a href="/services/handyman.html" data-i18n="nav.svc.handyman">Handyman</a>
  <a href="/pricing.html" data-i18n="nav.pricing">Pricing</a>
  <a href="/about.html" data-i18n="nav.about">About</a>
  <a href="/faq.html" data-i18n="nav.faq">FAQ</a>
  <a href="/join-us.html" data-i18n="nav.join">Join Us</a>
</div>
`

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="/images/logo-full.png" alt="Homora" />
        <p data-i18n="footer.tagline">Premium home services in the Helsinki metropolitan area.</p>
        <address>
          <span data-i18n="footer.address">Mäntytie 21, 00270 Helsinki, Finland</span><br>
          <a href="tel:+358417169807" style="color:rgba(255,255,255,0.7);text-decoration:none">+358 41 716 9807</a><br>
          <span data-i18n="footer.hours">Mon–Fri 10:00–18:00 · Sat 10:00–16:00 · Sun Closed</span>
        </address>
      </div>
      <div class="footer-col">
        <div class="footer-col-title" data-i18n="footer.services">Services</div>
        <a href="/services/home-cleaning.html" data-i18n="svc.cleaning.title">Home Cleaning</a>
        <a href="/services/laundry.html" data-i18n="svc.laundry.title">Laundry & Ironing</a>
        <a href="/services/carpet-cleaning.html" data-i18n="svc.carpet.title">Carpet Cleaning</a>
        <a href="/services/tailoring.html" data-i18n="svc.tailoring.title">Sewing & Tailoring</a>
        <a href="/services/handyman.html" data-i18n="svc.handyman.title">Handyman</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title" data-i18n="footer.company">Company</div>
        <a href="/about.html" data-i18n="footer.about">About Us</a>
        <a href="/join-us.html" data-i18n="footer.join">Join Us</a>
        <a href="/faq.html" data-i18n="footer.faq">FAQ</a>
        <a href="/pricing.html" data-i18n="footer.pricing">Pricing</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title" data-i18n="footer.booknow">Book Now</div>
        <a href="https://booking.homora.fi/book/homora" data-i18n="footer.online">Online Booking</a>
        <a href="https://wa.me/358417169807">WhatsApp</a>
        <a href="mailto:info@homora.fi">info@homora.fi</a>
        <a href="tel:+358417169807">+358 41 716 9807</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-i18n="footer.copy">© 2025 Homora Service Oy. Part of NEOM & Partner Capital Group.</span>
      <span>Helsinki · Espoo · Vantaa · Kauniainen</span>
    </div>
  </div>
</footer>
<a href="https://wa.me/358417169807" class="wa-float" target="_blank" aria-label="WhatsApp">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>
`

document.getElementById('header')?.insertAdjacentHTML('afterbegin', NAV_HTML)
document.getElementById('footer')?.insertAdjacentHTML('afterbegin', FOOTER_HTML)
