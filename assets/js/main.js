/* ============ Icons (inline SVG, stroke style) ============ */
const ICONS = {
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>',
  bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  crane: '<path d="M4 21V8l8-5 8 5v3M4 21h16M8 21v-6h8v6M4 11h16"/>',
  truck: '<rect x="1" y="7" width="15" height="10"/><path d="M16 10h4l3 3v4h-7z"/><circle cx="5.5" cy="18.5" r="1.5"/><circle cx="18.5" cy="18.5" r="1.5"/>',
  hardhat: '<path d="M4 18v-2a8 8 0 0 1 16 0v2"/><path d="M2 18h20"/><path d="M12 8V4"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14a8 3 0 0 0 16 0V5"/><path d="M4 12a8 3 0 0 0 16 0"/>',
  code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  chart: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  spark: '<path d="M12 2l2.2 6.8H21l-5.6 4.2 2.2 6.8L12 15.6 6.4 19.8l2.2-6.8L3 8.8h6.8z"/>',
  gauge: '<path d="M12 14l4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
  r: '<path d="M6 21V3h6a4.5 4.5 0 0 1 0 9H6"/><path d="M12 12l6 9"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  quote: '<path d="M3 21c3-2 4-4 4-8V6a1 1 0 0 1 1-1h4v6H8v2c0 3-1 4-3 5z"/><path d="M14 21c3-2 4-4 4-8V6a1 1 0 0 1 1-1h4v6h-4v2c0 3-1 4-3 5z"/>',
  trend: '<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>'
};

function icon(name, cls = "w-5 h-5") {
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;
}

/* ============ i18n ============ */
let currentLang = localStorage.getItem("lang") || "fr";

function applyStaticTranslations(lang) {
  document.querySelectorAll("[data-fr]").forEach(el => {
    const val = el.getAttribute(`data-${lang}`);
    if (val !== null) el.textContent = val;
  });
  document.querySelectorAll("[data-fr-html]").forEach(el => {
    const val = el.getAttribute(`data-${lang}-html`);
    if (val !== null) el.innerHTML = val;
  });
  document.querySelectorAll("[data-fr-placeholder]").forEach(el => {
    const val = el.getAttribute(`data-${lang}-placeholder`);
    if (val !== null) el.setAttribute("placeholder", val);
  });
  document.querySelectorAll("[data-fr-aria]").forEach(el => {
    const val = el.getAttribute(`data-${lang}-aria`);
    if (val !== null) el.setAttribute("aria-label", val);
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyStaticTranslations(lang);
  renderProjects(lang);
  renderTimeline(lang);
  renderCertifications(lang);
  renderSkills(lang);
  revealAll();
}

/* ============ Dynamic renders ============ */
function renderProjects(lang) {
  const root = document.getElementById("projects-grid");
  if (!root || typeof PROJECTS === "undefined") return;
  const colorMap = {
    blue: { chip: "bg-blue-500/15 text-blue-300 border-blue-500/30", btn: "bg-blue-500 hover:bg-blue-400" },
    orange: { chip: "bg-orange-500/15 text-orange-300 border-orange-500/30", btn: "bg-orange-500 hover:bg-orange-400" }
  };
  root.innerHTML = PROJECTS.map(p => {
    const c = colorMap[p.color];
    return `
    <article class="card card-hover reveal p-6 md:p-8 flex flex-col gap-5">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold tracking-wide px-3 py-1 rounded-full border ${c.chip}">${p.tag}</span>
        <div class="text-right">
          <div class="flex items-center justify-end gap-1.5">
            ${icon("trend", `w-4 h-4 ${p.color === "orange" ? "text-orange-400" : "text-blue-400"}`)}
            <div class="font-display text-2xl md:text-3xl font-extrabold text-gradient leading-none">${p.stat.value}</div>
          </div>
          <div class="text-[11px] text-slate-400 max-w-[9rem]">${p.stat.label[lang]}</div>
        </div>
      </div>
      <h3 class="font-display text-xl font-bold">${p.title[lang]}</h3>
      <div class="space-y-3 text-sm text-slate-300">
        <p><span class="font-semibold text-white">${lang === "fr" ? "Problème" : "Problem"} —</span> ${p.problem[lang]}</p>
        <p><span class="font-semibold text-white">${lang === "fr" ? "Démarche" : "Approach"} —</span> ${p.approach[lang]}</p>
        <p><span class="font-semibold text-white">${lang === "fr" ? "Résultat" : "Result"} —</span> ${p.result[lang]}</p>
      </div>
      <div class="border-l-2 border-orange-500/60 pl-4 py-1 text-sm text-slate-300 bg-orange-500/5 rounded-r">
        <span class="font-semibold text-orange-300">${lang === "fr" ? "Pour un employeur en maintenance" : "For a maintenance employer"} —</span> ${p.proof[lang]}
      </div>
      <div class="flex flex-wrap items-center gap-3 mt-auto pt-2">
        ${p.links.map(l => l.primary ? `
          <a href="${l.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-semibold text-white ${c.btn} px-4 py-2 rounded-lg transition-colors">
            ${l.label[lang]} ${icon("arrow", "w-4 h-4")}
          </a>
        ` : `
          <span class="inline-flex flex-col">
            <a href="${l.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 border border-white/15 hover:bg-white/5 px-4 py-2 rounded-lg transition-colors">
              ${l.label[lang]} ${icon("arrow", "w-4 h-4")}
            </a>
            ${l.note ? `<span class="text-[11px] text-slate-500 mt-1 text-center">${l.note[lang]}</span>` : ""}
          </span>
        `).join("")}
      </div>
    </article>`;
  }).join("");
}

function renderTimeline(lang) {
  const root = document.getElementById("timeline");
  if (!root || typeof TIMELINE === "undefined") return;
  root.innerHTML = `
    <div class="relative border-l-2 border-white/10 ml-3 md:ml-4">
      ${TIMELINE.map(t => {
        const company = typeof t.company === "string" ? t.company : t.company[lang];
        return `
        <div class="reveal relative pl-8 md:pl-10 pb-10 last:pb-0">
          <span class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-orange-500 timeline-dot"></span>
          <div class="card card-hover p-5 md:p-6">
            <div class="text-xs font-bold text-orange-300 mb-1">${t.period[lang]}</div>
            <div class="font-display font-bold">${t.role[lang]}</div>
            <div class="text-sm text-blue-300 font-semibold mb-2">${company} — ${t.place[lang]}</div>
            <p class="text-sm text-slate-400">${t.desc[lang]}</p>
          </div>
        </div>`;
      }).join("")}
    </div>
  `;
}

function renderCertifications(lang) {
  const root = document.getElementById("certifications-grid");
  if (!root || typeof CERTIFICATIONS === "undefined") return;
  root.innerHTML = CERTIFICATIONS.map(c => `
    <div class="card card-hover reveal p-5 flex items-center gap-4">
      <div class="w-11 h-11 rounded-lg bg-blue-500/15 text-blue-300 flex items-center justify-center shrink-0">
        ${icon(c.icon, "w-5 h-5")}
      </div>
      <div>
        <div class="font-semibold text-sm leading-snug">${c.title[lang]}</div>
        <div class="text-xs text-orange-300 font-bold mt-0.5">${c.date[lang]}</div>
      </div>
    </div>
  `).join("");
}

function renderSkills(lang) {
  const field = document.getElementById("skills-field");
  const data = document.getElementById("skills-data");
  const build = (arr, accent) => arr.map(s => `
    <div class="reveal flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
      <div class="w-10 h-10 rounded-lg ${accent} flex items-center justify-center shrink-0">
        ${icon(s.icon, "w-5 h-5")}
      </div>
      <div>
        <div class="font-semibold">${s.title[lang]}</div>
        <div class="text-sm text-slate-400">${s.desc[lang]}</div>
      </div>
    </div>
  `).join("");
  if (field && typeof SKILLS_FIELD !== "undefined") field.innerHTML = build(SKILLS_FIELD, "bg-orange-500/15 text-orange-300");
  if (data && typeof SKILLS_DATA !== "undefined") data.innerHTML = build(SKILLS_DATA, "bg-blue-500/15 text-blue-300");
}

/* ============ Scroll reveal ============ */
let revealObserver;
function revealAll() {
  const els = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  }
  els.forEach(el => revealObserver.observe(el));
}

/* ============ Sticky contact bar ============ */
function initStickyBar() {
  const bar = document.getElementById("sticky-bar");
  const hero = document.getElementById("hero");
  if (!bar || !hero) return;
  const io = new IntersectionObserver(([entry]) => {
    bar.classList.toggle("is-shown", !entry.isIntersecting);
  }, { threshold: 0 });
  io.observe(hero);
}

/* ============ Scrollspy ============ */
function initScrollspy() {
  const links = document.querySelectorAll(".nav-link");
  if (!links.length) return;
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute("href"))).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => io.observe(s));
}

/* ============ Mobile nav ============ */
function initMobileNav() {
  const btn = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!isOpen));
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.add("hidden")));
}

/* ============ Contact form (mailto fallback, no backend) ============ */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent("Opportunité de poste — via portfolio");
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:ngomajaihuriche0@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ============ Lang buttons + init ============ */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  setLang(currentLang);
  initStickyBar();
  initMobileNav();
  initContactForm();
  initScrollspy();
});
