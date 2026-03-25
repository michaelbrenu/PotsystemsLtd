/* ============================================
   POTSystem Limited — Cookie Consent
   ============================================ */
(function () {
  const COOKIE_KEY = 'pot_cookie_consent';
  const COOKIE_VERSION = '1';

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=Lax';
  }

  function getPreferences() {
    try { return JSON.parse(getCookie(COOKIE_KEY) || 'null'); } catch { return null; }
  }

  function savePreferences(prefs) {
    prefs.version = COOKIE_VERSION;
    prefs.date = new Date().toISOString();
    setCookie(COOKIE_KEY, JSON.stringify(prefs), 365);
  }

  function applyPreferences(prefs) {
    // Analytics placeholder — wire up GA/GTM here when ready
    if (prefs.analytics) {
      console.log('[Cookies] Analytics accepted');
      // e.g. window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    if (prefs.marketing) {
      console.log('[Cookies] Marketing accepted');
    }
  }

  function buildBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML = `
      <div id="cookie-inner">
        <div id="cookie-text">
          <strong>🍪 We use cookies</strong>
          <p>We use essential cookies to make our site work. With your consent, we may also use analytics cookies to understand how you use the site and improve your experience.</p>
        </div>
        <div id="cookie-actions">
          <button id="cookie-settings-btn" class="cookie-btn-ghost">Manage preferences</button>
          <button id="cookie-reject-btn" class="cookie-btn-outline">Reject non-essential</button>
          <button id="cookie-accept-btn" class="cookie-btn-primary">Accept all</button>
        </div>
      </div>
    `;

    const modal = document.createElement('div');
    modal.id = 'cookie-modal';
    modal.innerHTML = `
      <div id="cookie-modal-inner">
        <div id="cookie-modal-header">
          <h3>Cookie Preferences</h3>
          <button id="cookie-modal-close">✕</button>
        </div>
        <div class="cookie-pref-row">
          <div>
            <strong>Essential cookies</strong>
            <p>Required for the site to function. Cannot be disabled.</p>
          </div>
          <label class="cookie-toggle disabled"><input type="checkbox" checked disabled /><span class="cookie-slider"></span></label>
        </div>
        <div class="cookie-pref-row">
          <div>
            <strong>Analytics cookies</strong>
            <p>Help us understand how visitors use the site (page views, traffic sources).</p>
          </div>
          <label class="cookie-toggle"><input type="checkbox" id="pref-analytics" /><span class="cookie-slider"></span></label>
        </div>
        <div class="cookie-pref-row">
          <div>
            <strong>Marketing cookies</strong>
            <p>Used to show relevant ads and track campaign performance.</p>
          </div>
          <label class="cookie-toggle"><input type="checkbox" id="pref-marketing" /><span class="cookie-slider"></span></label>
        </div>
        <div id="cookie-modal-footer">
          <button id="cookie-save-prefs" class="cookie-btn-primary">Save preferences</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);
    document.body.appendChild(modal);

    // Accept all
    document.getElementById('cookie-accept-btn').addEventListener('click', function () {
      const prefs = { essential: true, analytics: true, marketing: true };
      savePreferences(prefs);
      applyPreferences(prefs);
      hideBanner();
    });

    // Reject non-essential
    document.getElementById('cookie-reject-btn').addEventListener('click', function () {
      const prefs = { essential: true, analytics: false, marketing: false };
      savePreferences(prefs);
      applyPreferences(prefs);
      hideBanner();
    });

    // Open settings modal
    document.getElementById('cookie-settings-btn').addEventListener('click', function () {
      const existing = getPreferences();
      if (existing) {
        document.getElementById('pref-analytics').checked = !!existing.analytics;
        document.getElementById('pref-marketing').checked = !!existing.marketing;
      }
      modal.classList.add('visible');
    });

    // Close modal
    document.getElementById('cookie-modal-close').addEventListener('click', function () {
      modal.classList.remove('visible');
    });

    // Save custom preferences
    document.getElementById('cookie-save-prefs').addEventListener('click', function () {
      const prefs = {
        essential: true,
        analytics: document.getElementById('pref-analytics').checked,
        marketing: document.getElementById('pref-marketing').checked,
      };
      savePreferences(prefs);
      applyPreferences(prefs);
      modal.classList.remove('visible');
      hideBanner();
    });

    // Close modal on backdrop click
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.classList.remove('visible');
    });
  }

  function hideBanner() {
    const b = document.getElementById('cookie-banner');
    if (b) { b.style.transform = 'translateY(120%)'; setTimeout(() => b.remove(), 400); }
  }

  function injectStyles() {
    const s = document.createElement('style');
    s.textContent = `
      #cookie-banner {
        position: fixed; bottom: 16px; left: 50%; transform: translateX(-50%);
        width: min(500px, calc(100vw - 32px));
        background: #191a1b; color: #fff;
        border-radius: 8px; padding: 8px 12px;
        box-shadow: 0 8px 40px rgba(0,0,0,.5);
        z-index: 9999;
        transition: transform .35s cubic-bezier(.4,0,.2,1);
        border: 1px solid rgba(255,255,255,.08);
      }
      #cookie-inner { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
      #cookie-text { flex: 1; min-width: 200px; }
      #cookie-text strong { font-size: .85rem; }
      #cookie-text p { font-size: .75rem; color: rgba(255,255,255,.6); margin-top: 2px; line-height: 1.3; }
      #cookie-actions { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
      .cookie-btn-primary {
        background: #ffa735; color: #191a1b;
        border: none; padding: 6px 14px; border-radius: 4px;
        font-size: .75rem; font-weight: 700; cursor: pointer; white-space: nowrap;
        transition: background .2s;
      }
      .cookie-btn-primary:hover { background: #e8941e; }
      .cookie-btn-outline {
        background: transparent; color: #fff;
        border: 1.5px solid rgba(255,255,255,.35); padding: 5px 12px; border-radius: 4px;
        font-size: .75rem; font-weight: 600; cursor: pointer; white-space: nowrap;
        transition: border-color .2s;
      }
      .cookie-btn-outline:hover { border-color: #ffa735; color: #ffa735; }
      .cookie-btn-ghost {
        background: none; border: none; color: rgba(255,255,255,.45);
        font-size: .7rem; cursor: pointer; padding: 2px; text-decoration: underline;
        white-space: nowrap;
      }
      .cookie-btn-ghost:hover { color: rgba(255,255,255,.75); }

      /* Modal */
      #cookie-modal {
        display: none; position: fixed; inset: 0;
        background: rgba(0,0,0,.6); z-index: 10000;
        align-items: center; justify-content: center;
      }
      #cookie-modal.visible { display: flex; }
      #cookie-modal-inner {
        background: #fff; border-radius: 12px; padding: 28px 32px;
        width: min(520px, calc(100vw - 32px));
        box-shadow: 0 20px 60px rgba(0,0,0,.3);
      }
      #cookie-modal-header {
        display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;
      }
      #cookie-modal-header h3 { font-family: 'Poppins',sans-serif; font-size: 1.1rem; font-weight: 700; }
      #cookie-modal-close {
        background: none; border: none; font-size: 1.1rem; cursor: pointer;
        color: #7a7a7a; padding: 4px 8px; border-radius: 4px;
      }
      #cookie-modal-close:hover { background: #f0f0f0; }
      .cookie-pref-row {
        display: flex; justify-content: space-between; align-items: flex-start;
        gap: 20px; padding: 16px 0; border-bottom: 1px solid #ececec;
      }
      .cookie-pref-row > div { flex: 1; }
      .cookie-pref-row strong { font-size: .9rem; display: block; margin-bottom: 4px; }
      .cookie-pref-row p { font-size: .8rem; color: #7a7a7a; line-height: 1.5; }
      .cookie-toggle { position: relative; display: inline-block; width: 44px; height: 24px; flex-shrink: 0; margin-top: 2px; }
      .cookie-toggle input { opacity: 0; width: 0; height: 0; }
      .cookie-slider {
        position: absolute; inset: 0; background: #ccc; border-radius: 24px; cursor: pointer;
        transition: background .2s;
      }
      .cookie-slider::before {
        content: ''; position: absolute; width: 18px; height: 18px; left: 3px; bottom: 3px;
        background: #fff; border-radius: 50%; transition: transform .2s;
      }
      .cookie-toggle input:checked + .cookie-slider { background: #ffa735; }
      .cookie-toggle input:checked + .cookie-slider::before { transform: translateX(20px); }
      .cookie-toggle.disabled { opacity: .5; pointer-events: none; }
      #cookie-modal-footer { margin-top: 20px; text-align: right; }

      @media (max-width: 540px) {
        #cookie-inner { flex-direction: column; align-items: stretch; }
        #cookie-actions { flex-direction: column; }
        .cookie-btn-primary, .cookie-btn-outline { width: 100%; text-align: center; }
      }
    `;
    document.head.appendChild(s);
  }

  // Init
  function init() {
    const existing = getPreferences();
    if (existing && existing.version === COOKIE_VERSION) {
      applyPreferences(existing);
      return; // Already consented — don't show banner
    }
    injectStyles();
    buildBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
