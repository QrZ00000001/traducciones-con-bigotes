(function updateGameCount() {
  const countEl = document.getElementById("gameCount");
  if (!countEl) return;
  const total = document.querySelectorAll("article.game").length;
  countEl.textContent = String(total).padStart(2, "0");
})();

function copyDiscord(btn) {
  const user = btn.dataset.discord;
  navigator.clipboard.writeText(user);
  const label = btn.querySelector(".btn-label") || btn;
  const original = label.textContent;
  label.textContent = "¡Copiado!";
  setTimeout(() => { label.textContent = original; }, 1500);
}

function toggleDropdown(btn) {
  const dropdown = btn.closest(".dropdown");
  const wasOpen = dropdown.classList.contains("open");
  document.querySelectorAll(".dropdown.open").forEach((d) => d.classList.remove("open"));
  if (!wasOpen) dropdown.classList.add("open");
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown.open").forEach((d) => d.classList.remove("open"));
  }
});

(function initMobileNavigation() {
  const header = document.querySelector("header.topbar");
  const toggle = header?.querySelector(".nav-toggle");
  const nav = header?.querySelector(".topnav");
  if (!header || !toggle || !nav) return;

  function closeNavigation() {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú de navegación");
  }

  toggle.addEventListener("click", () => {
    const willOpen = !header.classList.contains("nav-open");
    header.classList.toggle("nav-open", willOpen);
    toggle.setAttribute("aria-expanded", String(willOpen));
    toggle.setAttribute("aria-label", willOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation();
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) closeNavigation();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });

  window.matchMedia("(min-width: 641px)").addEventListener("change", closeNavigation);
})();

const KOFI_USER = "qrz00000001";

function openKofi() {
  const overlay = document.getElementById("kofiOverlay");
  const frame = document.getElementById("kofiFrame");
  frame.src = `https://ko-fi.com/${KOFI_USER}/?hidefeed=true&widget=true&embed=true`;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeKofi() {
  const overlay = document.getElementById("kofiOverlay");
  const frame = document.getElementById("kofiFrame");
  if (!overlay || !frame) return;
  frame.src = "";
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeKofi();
    document.querySelectorAll(".dropdown.open").forEach((d) => d.classList.remove("open"));
  }
});

function scaleSteamWidgets() {
  document.querySelectorAll(".steam-widget").forEach((box) => {
    const iframe = box.querySelector("iframe");
    if (!iframe) return;
    const scale = box.clientWidth / 646;
    iframe.style.transform = `scale(${scale})`;
  });
}

function refreshResponsiveLayout() {
  requestAnimationFrame(() => requestAnimationFrame(scaleSteamWidgets));
}

refreshResponsiveLayout();
document.addEventListener("DOMContentLoaded", refreshResponsiveLayout);
window.addEventListener("load", refreshResponsiveLayout);
window.addEventListener("pageshow", refreshResponsiveLayout);
window.addEventListener("resize", refreshResponsiveLayout);
window.addEventListener("orientationchange", refreshResponsiveLayout);

if (window.ResizeObserver) {
  const widgetResizeObserver = new ResizeObserver(refreshResponsiveLayout);
  document.querySelectorAll(".steam-widget").forEach((box) => widgetResizeObserver.observe(box));
}

(function initCatMascot() {
  const mascot = document.getElementById("catMascot");
  const eyes = document.getElementById("catEyes");
  if (!mascot || !eyes) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let blinking = false;

  function scheduleBlink() {
    const delay = 2600 + Math.random() * 3200;
    setTimeout(() => {
      blinking = true;
      eyes.src = "assets/cat-eyes-closed.png";
      eyes.style.transform = "translate(0, 0)";
      setTimeout(() => {
        eyes.src = "assets/cat-eyes-open.png";
        blinking = false;
      }, 140);
      scheduleBlink();
    }, delay);
  }

  if (!reduceMotion) {
    scheduleBlink();

    const MAX_OFFSET = 4;
    let pending = false;

    document.addEventListener("mousemove", (e) => {
      if (blinking || pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        const rect = mascot.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy) || 1;
        const x = (dx / dist) * MAX_OFFSET;
        const y = (dy / dist) * MAX_OFFSET;
        eyes.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
      });
    });
  }
})();
