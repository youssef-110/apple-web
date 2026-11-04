/* apple-web.js — scroll reveals, sticky nav state, scroll-scrub, galleries, count-up. No dependencies.
   Usage: <script src="apple-web.js" defer></script>. Everything is attribute-driven; see demo/index.html. */
(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.remove("no-js");

  // Reveal once when ~15% in view. Siblings inside [data-reveal-group] get a stagger index.
  document.querySelectorAll("[data-reveal-group]").forEach((g) =>
    g.querySelectorAll("[data-reveal]").forEach((el, i) => el.style.setProperty("--i", i))
  );
  const revealIO = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      revealIO.unobserve(e.target);
      e.target.querySelectorAll("[data-count]").forEach(countUp);
      if (e.target.hasAttribute("data-count")) countUp(e.target);
    }),
    { rootMargin: "0px 0px -15% 0px" }
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => revealIO.observe(el));

  // Count-up numbers: <span data-count="22" data-decimals="0">22</span>. Final text is in the HTML for no-JS / SEO.
  function countUp(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = "1";
    const to = parseFloat(el.dataset.count), dec = +(el.dataset.decimals || 0);
    if (reduce || isNaN(to)) return;
    const dur = 1200, t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur), eased = 1 - Math.pow(1 - k, 3);
      el.textContent = (to * eased).toFixed(dec);
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  document.querySelectorAll("[data-count]").forEach((el) => {
    if (!el.closest("[data-reveal]")) revealIO.observe(el);
  });

  // Sticky local nav: toggle .is-stuck when its top hits 0. A 1px sentinel sits right above it.
  document.querySelectorAll(".localnav").forEach((nav) => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "height:1px;margin-bottom:-1px";
    nav.before(sentinel);
    new IntersectionObserver(([e]) => nav.classList.toggle("is-stuck", !e.isIntersecting)).observe(sentinel);
  });

  // Scroll-scrub: sets --p (0..1) on .scrub from how far the section has scrolled through the viewport.
  const scrubs = [...document.querySelectorAll(".scrub")];
  if (scrubs.length && !reduce) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = innerHeight;
      scrubs.forEach((s) => {
        const r = s.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -r.top / (r.height - vh)));
        s.style.setProperty("--p", p.toFixed(4));
      });
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener("resize", update);
    update();
  } else scrubs.forEach((s) => s.style.setProperty("--p", 1));

  // Galleries: dots + paddles synced to native scroll-snap position.
  document.querySelectorAll(".gallery").forEach((g) => {
    const track = g.querySelector(".gallery-track");
    const items = [...track.children];
    const dots = g.querySelector(".gallery-dots");
    const prev = g.querySelector("[data-prev]"), next = g.querySelector("[data-next]");
    let current = 0;
    if (dots) items.forEach((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", `Item ${i + 1} of ${items.length}`);
      b.addEventListener("click", () => go(i));
      dots.append(b);
    });
    const go = (i) => {
      i = Math.max(0, Math.min(items.length - 1, i));
      track.scrollTo({ left: items[i].offsetLeft - items[0].offsetLeft, behavior: reduce ? "auto" : "smooth" });
    };
    const sync = () => {
      const x = track.scrollLeft;
      current = items.reduce((best, it, i) =>
        Math.abs(it.offsetLeft - items[0].offsetLeft - x) < Math.abs(items[best].offsetLeft - items[0].offsetLeft - x) ? i : best, 0);
      dots && [...dots.children].forEach((d, i) => d.setAttribute("aria-current", i === current));
      if (prev) prev.disabled = current === 0;
      if (next) next.disabled = current === items.length - 1;
    };
    prev && prev.addEventListener("click", () => go(current - 1));
    next && next.addEventListener("click", () => go(current + 1));
    track.addEventListener("scroll", () => requestAnimationFrame(sync), { passive: true });
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); go(current + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(current - 1); }
    });
    sync();
  });
})();
