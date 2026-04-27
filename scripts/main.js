import { siteContent } from '../data/content.js';

const PROJECT_PREVIEW_COUNT = 4;
const app = document.getElementById('app');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const state = {
  lang: localStorage.getItem('language') || document.documentElement.lang || 'en',
  theme: localStorage.getItem('theme') || document.documentElement.dataset.theme || 'light',
  menuOpen: false,
  projectsExpanded: false
};

let cleanupNavTracking = () => {};
let cleanupMediaObserver = () => {};

function pick(value, lang = state.lang) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[lang] ?? value.en ?? '';
  }
  return value ?? '';
}

function shouldReduceMotion() {
  return prefersReducedMotion.matches;
}

function scrollBehavior() {
  return shouldReduceMotion() ? 'auto' : 'smooth';
}

function menuLabel() {
  if (state.lang === 'ko') {
    return state.menuOpen ? '탐색 메뉴 닫기' : '탐색 메뉴 열기';
  }
  return state.menuOpen ? 'Close navigation menu' : 'Open navigation menu';
}

function themeLabel() {
  if (state.theme === 'dark') {
    return state.lang === 'ko' ? '라이트' : 'Light';
  }
  return state.lang === 'ko' ? '다크' : 'Dark';
}

function themeAriaLabel() {
  if (state.theme === 'dark') {
    return state.lang === 'ko' ? '라이트 테마로 전환' : 'Switch to light theme';
  }
  return state.lang === 'ko' ? '다크 테마로 전환' : 'Switch to dark theme';
}

function languageAriaLabel() {
  return state.lang === 'ko' ? '영문으로 전환' : 'Switch to Korean';
}

function projectToggleLabel() {
  return state.projectsExpanded
    ? pick(siteContent.projects.toggleLess)
    : pick(siteContent.projects.toggleMore);
}

function projectItems() {
  return state.projectsExpanded
    ? siteContent.projects.items
    : siteContent.projects.items.slice(0, PROJECT_PREVIEW_COUNT);
}

function renderTextParagraphs(paragraphs) {
  return paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');
}

function renderProofMetric(metric) {
  return `
    <article class="metric-card">
      <div class="metric-value">${metric.value}</div>
      <div class="metric-label">${pick(metric.label)}</div>
    </article>
  `;
}

function renderCapability(item) {
  return `
    <article class="capability-card">
      <h3>${pick(item.title)}</h3>
      <p>${pick(item.description)}</p>
    </article>
  `;
}

function renderLogoRailItem(item) {
  return `
    <div class="profile-company">
      <img src="${item.logo}" alt="${item.name}" loading="lazy" decoding="async">
      <span>${item.name}</span>
    </div>
  `;
}

function renderCaseStudy(item, index) {
  const isVideo = item.media.type === 'video';
  const videoLabel = `${item.company} ${state.lang === 'ko' ? '프로젝트 데모' : 'project demo'}`;

  const media = isVideo
    ? `
      <div class="case-media">
        <video
          class="case-video"
          data-case-video
          muted
          loop
          playsinline
          preload="metadata"
          poster="${item.media.poster || ''}"
          title="${videoLabel}"
          aria-label="${videoLabel}"
        >
          <source src="${item.media.src}" type="video/mp4">
        </video>
      </div>
    `
    : `
      <div class="case-media image-media">
        <img src="${item.media.src}" alt="${item.media.alt}" loading="lazy" decoding="async">
      </div>
    `;

  const cardClasses = ['case-study'];
  if (index === 0) cardClasses.push('featured');
  if (index % 2 === 1) cardClasses.push('reverse');

  return `
    <article class="${cardClasses.join(' ')}">
      ${media}
      <div class="case-content">
        <div class="case-meta">
          <span class="case-company">${item.company}</span>
          <span class="case-period">${pick(item.period)}</span>
        </div>
        <h3>${pick(item.role)}</h3>
        <p class="case-statement">${pick(item.statement)}</p>
        <div class="case-proofs">
          ${item.proof.map((proof) => `
            <div class="case-proof">
              <strong>${proof.value}</strong>
              <span>${pick(proof.label)}</span>
            </div>
          `).join('')}
        </div>
        <div class="case-body">
          ${pick(item.body).map((line) => `<p>${line}</p>`).join('')}
        </div>
        <div class="tag-row">
          ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `;
}

function renderTimelineItem(item) {
  return `
    <article class="timeline-item">
      <div class="timeline-dot" aria-hidden="true"></div>
      <div class="timeline-card">
        <div class="timeline-meta">
          <span class="timeline-company">${item.company}</span>
          <span class="timeline-period">${pick(item.period)}</span>
        </div>
        <h3>${pick(item.role)}</h3>
        <p>${pick(item.summary)}</p>
      </div>
    </article>
  `;
}

function renderProject(item) {
  return `
    <article class="project-card">
      <div class="project-meta">
        <span class="project-year">${item.year}</span>
      </div>
      <h3>${pick(item.title)}</h3>
      <p>${pick(item.description)}</p>
      <div class="tag-row">
        ${item.tags.map((tag) => `<span class="tag subdued">${tag}</span>`).join('')}
      </div>
    </article>
  `;
}

function renderCredential(item) {
  const logo = item.logo
    ? `<img src="${item.logo}" alt="${pick(item.name)}" loading="lazy" decoding="async">`
    : `<div class="credential-placeholder">${pick(item.name).slice(0, 2).toUpperCase()}</div>`;

  return `
    <article class="credential-card">
      <div class="credential-header">
        <div class="credential-logo">${logo}</div>
        <div>
          <div class="credential-name">${pick(item.name)}</div>
          <div class="credential-subtitle">${pick(item.subtitle)}</div>
        </div>
        <div class="credential-period">${pick(item.period)}</div>
      </div>
      <p>${pick(item.description)}</p>
    </article>
  `;
}

function renderNavLinks() {
  return siteContent.nav.map((item) => `
    <a href="${item.href}" class="nav-link" data-nav-link>
      ${pick(item.label)}
    </a>
  `).join('');
}

function renderProjectsToggle() {
  if (siteContent.projects.items.length <= PROJECT_PREVIEW_COUNT) return '';

  return `
    <div class="project-toggle-wrap">
      <button
        type="button"
        class="expand-button"
        data-project-toggle
        aria-expanded="${state.projectsExpanded ? 'true' : 'false'}"
      >
        ${projectToggleLabel()}
      </button>
    </div>
  `;
}

function renderApp(restoreFocusSelector) {
  document.documentElement.lang = state.lang;
  document.title = pick(siteContent.metaTitle);

  app.innerHTML = `
    <div class="site-shell">
      <header class="site-header">
        <div class="header-inner">
          <a href="#overview" class="brand">
            <img src="/img/profile.jpg" alt="${pick(siteContent.hero.profileAlt)}" fetchpriority="high" decoding="async">
            <div>
              <strong>InJoo Kim</strong>
              <span>${pick(siteContent.hero.currentRole)}</span>
            </div>
          </a>

          <button
            class="menu-button"
            type="button"
            aria-expanded="${state.menuOpen ? 'true' : 'false'}"
            aria-controls="site-nav"
            aria-label="${menuLabel()}"
            data-menu-toggle
          >
            <span class="sr-only">${menuLabel()}</span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

          <div class="header-right ${state.menuOpen ? 'open' : ''}" id="site-nav">
            <nav class="site-nav" aria-label="${state.lang === 'ko' ? '섹션 탐색' : 'Section navigation'}">
              ${renderNavLinks()}
            </nav>
            <div class="header-controls">
              <button type="button" class="control-button" data-language-toggle aria-label="${languageAriaLabel()}">
                ${state.lang === 'en' ? 'KO' : 'EN'}
              </button>
              <button type="button" class="control-button" data-theme-toggle aria-label="${themeAriaLabel()}">
                ${themeLabel()}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section class="hero-section" id="overview">
          <div class="section-frame hero-grid">
            <div class="hero-copy">
              <div class="eyebrow">${pick(siteContent.hero.eyebrow)}</div>
              <h1>${pick(siteContent.hero.headline)}</h1>
              <p class="hero-subhead">${pick(siteContent.hero.subhead)}</p>
              <div class="hero-body">
                ${renderTextParagraphs(pick(siteContent.hero.paragraphs))}
              </div>
              <div class="hero-actions">
                <a class="button primary" href="mailto:ink595@g.harvard.edu">${pick(siteContent.hero.ctas.primary)}</a>
                <a class="button secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">${pick(siteContent.hero.ctas.secondary)}</a>
                <a class="button tertiary" href="https://linkedin.com/in/injookim0623" target="_blank" rel="noopener noreferrer">${pick(siteContent.hero.ctas.tertiary)}</a>
              </div>
              <div class="hero-evidence">
                <div class="hero-evidence-copy">
                  <span class="eyebrow">${pick(siteContent.hero.proofTitle)}</span>
                  <p>${pick(siteContent.hero.proofBody)}</p>
                </div>
                <div class="proof-strip">
                  ${siteContent.hero.proofMetrics.map(renderProofMetric).join('')}
                </div>
              </div>
            </div>

            <aside class="profile-panel">
              <div class="profile-card">
                <div class="portrait-wrap">
                  <img src="/img/profile.jpg" alt="${pick(siteContent.hero.profileAlt)}" class="portrait" fetchpriority="high" decoding="async">
                </div>
                <div class="profile-meta">
                  <span class="eyebrow">${pick(siteContent.hero.location)}</span>
                  <h2>InJoo Kim</h2>
                  <p>${pick(siteContent.hero.currentRole)}</p>
                </div>
                <div class="best-fit">
                  <h3>${pick(siteContent.hero.bestFitTitle)}</h3>
                  <ul>
                    ${pick(siteContent.hero.bestFitRoles).map((role) => `<li>${role}</li>`).join('')}
                  </ul>
                </div>
                <div class="profile-companies">
                  <span class="mini-label">${pick(siteContent.hero.companyRailLabel)}</span>
                  <div class="profile-company-grid">
                    ${siteContent.companyRail.map(renderLogoRailItem).join('')}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section class="content-section" id="case-studies">
          <div class="section-frame">
            <div class="section-heading">
              <span class="eyebrow">${pick(siteContent.caseStudies.kicker)}</span>
              <h2>${pick(siteContent.caseStudies.title)}</h2>
              <p>${pick(siteContent.caseStudies.intro)}</p>
            </div>
            <div class="case-study-stack">
              ${siteContent.caseStudies.items.map(renderCaseStudy).join('')}
            </div>
          </div>
        </section>

        <section class="content-section strategy-section">
          <div class="section-frame capability-block">
            <div class="section-heading compact">
              <span class="eyebrow">${pick(siteContent.capabilities.kicker)}</span>
              <h2>${pick(siteContent.capabilities.title)}</h2>
              <p>${pick(siteContent.capabilities.intro)}</p>
            </div>
            <div class="capability-grid">
              ${siteContent.capabilities.items.map(renderCapability).join('')}
            </div>
          </div>
        </section>

        <section class="content-section" id="timeline">
          <div class="section-frame">
            <div class="section-heading">
              <span class="eyebrow">${pick(siteContent.timeline.kicker)}</span>
              <h2>${pick(siteContent.timeline.title)}</h2>
              <p>${pick(siteContent.timeline.intro)}</p>
            </div>
            <div class="timeline-list">
              ${siteContent.timeline.items.map(renderTimelineItem).join('')}
            </div>
          </div>
        </section>

        <section class="content-section" id="projects">
          <div class="section-frame">
            <div class="section-heading">
              <span class="eyebrow">${pick(siteContent.projects.kicker)}</span>
              <h2>${pick(siteContent.projects.title)}</h2>
            </div>
            <div class="project-grid">
              ${projectItems().map(renderProject).join('')}
            </div>
            ${renderProjectsToggle()}
          </div>
        </section>

        <section class="content-section" id="credentials">
          <div class="section-frame">
            <div class="section-heading">
              <span class="eyebrow">${pick(siteContent.credentials.kicker)}</span>
              <h2>${pick(siteContent.credentials.title)}</h2>
            </div>

            <div class="credential-columns">
              <div>
                <div class="subsection-title">${pick(siteContent.credentials.educationLabel)}</div>
                <div class="credential-stack">
                  ${siteContent.credentials.education.map(renderCredential).join('')}
                </div>
              </div>
              <div>
                <div class="subsection-title">${pick(siteContent.credentials.certificationLabel)}</div>
                <div class="credential-stack">
                  ${siteContent.credentials.certifications.map(renderCredential).join('')}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="content-section" id="contact">
          <div class="section-frame">
            <div class="contact-card">
              <div class="section-heading compact">
                <span class="eyebrow">${pick(siteContent.contact.kicker)}</span>
                <h2>${pick(siteContent.contact.title)}</h2>
                <p>${pick(siteContent.contact.body)}</p>
              </div>
              <div class="contact-actions">
                <a class="button primary" href="mailto:ink595@g.harvard.edu">${pick(siteContent.contact.primary)}</a>
                <a class="button secondary" href="/resume.pdf" target="_blank" rel="noopener noreferrer">${pick(siteContent.contact.secondary)}</a>
                <a class="contact-link" href="https://github.com/injooinjoo" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="section-frame footer-inner">
          <p>${pick(siteContent.footer.note)}</p>
          <span>© InJoo Kim</span>
        </div>
      </footer>
    </div>
  `;

  applyTheme();
  syncMeta();
  bindInteractions();
  initSectionObserver();
  initCaseStudyMedia();

  if (restoreFocusSelector) {
    requestAnimationFrame(() => {
      document.querySelector(restoreFocusSelector)?.focus();
    });
  }
}

function syncMeta() {
  document.title = pick(siteContent.metaTitle);
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', pick(siteContent.metaDescription));
  }
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
}

function setTheme(nextTheme) {
  state.theme = nextTheme;
  localStorage.setItem('theme', state.theme);
  applyTheme();

  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    themeToggle.textContent = themeLabel();
    themeToggle.setAttribute('aria-label', themeAriaLabel());
  }
}

function setLanguage(nextLanguage) {
  state.lang = nextLanguage;
  state.menuOpen = false;
  localStorage.setItem('language', state.lang);
  renderApp('[data-language-toggle]');
}

function setProjectsExpanded(expanded) {
  state.projectsExpanded = expanded;
  renderApp('[data-project-toggle]');
}

function setMenuOpen(open, options = {}) {
  state.menuOpen = open;

  const menu = document.getElementById('site-nav');
  const button = document.querySelector('[data-menu-toggle]');

  menu?.classList.toggle('open', open);
  button?.setAttribute('aria-expanded', open ? 'true' : 'false');
  button?.setAttribute('aria-label', menuLabel());
  document.body.classList.toggle('menu-open', open && window.innerWidth <= 860);

  const srOnly = button?.querySelector('.sr-only');
  if (srOnly) srOnly.textContent = menuLabel();

  if (!open && options.returnFocus) {
    button?.focus();
  }
}

function handleOutsideMenuClick(event) {
  if (!state.menuOpen) return;

  const header = document.querySelector('.site-header');
  if (header && !header.contains(event.target)) {
    setMenuOpen(false);
  }
}

function handleWindowKeydown(event) {
  if (event.key === 'Escape' && state.menuOpen) {
    setMenuOpen(false, { returnFocus: true });
  }
}

function bindInteractions() {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const languageToggle = document.querySelector('[data-language-toggle]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const projectToggle = document.querySelector('[data-project-toggle]');
  const navLinks = [...document.querySelectorAll('[data-nav-link]')];

  themeToggle?.addEventListener('click', () => {
    setTheme(state.theme === 'light' ? 'dark' : 'light');
  });

  languageToggle?.addEventListener('click', () => {
    setLanguage(state.lang === 'en' ? 'ko' : 'en');
  });

  menuToggle?.addEventListener('click', () => {
    setMenuOpen(!state.menuOpen);
  });

  projectToggle?.addEventListener('click', () => {
    setProjectsExpanded(!state.projectsExpanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) return;

      event.preventDefault();
      setActiveNavLink(targetId);
      setMenuOpen(false);
      target.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
      window.history.replaceState({}, '', targetId);
    });
  });

  document.removeEventListener('click', handleOutsideMenuClick);
  window.removeEventListener('keydown', handleWindowKeydown);
  document.addEventListener('click', handleOutsideMenuClick);
  window.addEventListener('keydown', handleWindowKeydown);
}

function setActiveNavLink(activeHref) {
  const navLinks = [...document.querySelectorAll('[data-nav-link]')];
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === activeHref;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}

function initSectionObserver() {
  cleanupNavTracking();

  const sections = [...document.querySelectorAll('main section[id]')];
  if (!sections.length) return;

  let rafId = null;

  const updateActiveSection = () => {
    const headerOffset = (document.querySelector('.site-header')?.offsetHeight || 0) + 32;
    let activeHref = `#${sections[0].id}`;

    sections.forEach((section) => {
      const threshold = section.offsetTop - headerOffset;
      if (window.scrollY >= threshold) {
        activeHref = `#${section.id}`;
      }
    });

    setActiveNavLink(activeHref);
    rafId = null;
  };

  const onScroll = () => {
    if (rafId !== null) return;
    rafId = window.requestAnimationFrame(updateActiveSection);
  };

  const onResize = () => {
    if (window.innerWidth > 860 && state.menuOpen) {
      setMenuOpen(false);
    }
    updateActiveSection();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
  updateActiveSection();

  cleanupNavTracking = () => {
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
  };
}

function initCaseStudyMedia() {
  cleanupMediaObserver();

  const videos = [...document.querySelectorAll('[data-case-video]')];
  if (!videos.length) return;

  if (shouldReduceMotion() || !('IntersectionObserver' in window)) {
    videos.forEach((video) => {
      video.pause();
      video.removeAttribute('autoplay');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.45 });

  videos.forEach((video) => observer.observe(video));
  cleanupMediaObserver = () => observer.disconnect();
}

prefersReducedMotion.addEventListener('change', () => {
  initCaseStudyMedia();
});

renderApp();
