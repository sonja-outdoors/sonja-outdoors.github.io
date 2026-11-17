// Builds the pages from content/site.json (edited through Pages CMS).
// You normally don't need to edit this file.
fetch("content/site.json", { cache: "no-cache" })
  .then((r) => r.json())
  .then(build);

function build(S) {
  S.social = S.social || [];
  S.projects = S.projects || [];
  const page = document.body.dataset.page;
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  // Image paths from the editor may start with "/" — make them relative so the site works in any folder.
  const img = (p) => String(p || "").replace(/^\/+/, "");
  // Turn text with blank lines into paragraphs.
  const paras = (t) => String(t || "").split(/\n\s*\n/).map((x) => x.trim()).filter(Boolean);
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const initials = S.name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2);

  document.title = (page === "home" ? "" : page[0].toUpperCase() + page.slice(1) + " · ") + S.name;

  // Header
  const links = [["home", "index.html", "About"], ["projects", "projects.html", "Projects"], ["contact", "contact.html", "Contact"]];
  document.getElementById("header").innerHTML = `
    <a class="brand" href="index.html">${esc(S.name)}</a>
    <nav>${links.map(([id, href, label]) => `<a href="${href}"${id === page ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav>`;

  // Footer
  document.getElementById("footer").innerHTML = `
    <span>© ${new Date().getFullYear()} ${esc(S.name)}</span>
    <span class="social">${S.social.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("")}</span>`;

  const facts = (p) =>
    `<ul class="facts">
      <li><span class="tag ${p.mode === "By bike" ? "bike" : "foot"}">${esc(p.mode)}</span></li>
      ${[p.year, p.duration, p.distance, p.elevation, p.region].filter(Boolean).map((f) => `<li>${esc(f)}</li>`).join("")}
    </ul>`;

  const main = document.getElementById("main");

  if (page === "home") {
    main.innerHTML = `
      <section class="hero">
        <div class="photo" data-initials="${esc(initials)}">
          ${S.photo ? `<img src="${esc(img(S.photo))}" alt="Portrait of ${esc(S.name)}" onerror="this.remove()">` : ""}
        </div>
        <div>
          <p class="eyebrow">${esc(S.tagline)}</p>
          <h1>Hi, I'm ${esc(S.name)}.</h1>
          <p class="lead">${esc(S.intro)}</p>
        </div>
      </section>
      <section class="prose">
        <h2>About me</h2>
        ${paras(S.about).map((p) => `<p>${esc(p)}</p>`).join("")}
      </section>
      <section>
        <div class="section-head"><h2>Recent projects</h2><a href="projects.html">All projects →</a></div>
        <div class="cards">
          ${S.projects.slice(0, 3).map((p) => `
            <a class="card" href="projects.html#${slug(p.title)}">
              ${facts(p)}
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.summary)}</p>
            </a>`).join("")}
        </div>
      </section>`;
  }

  if (page === "projects") {
    main.innerHTML = `
      <section class="page-head">
        <h1>Projects</h1>
        <p class="lead">Journeys on foot and by bike, newest first.</p>
      </section>
      ${S.projects.map((p) => `
        <article class="project" id="${slug(p.title)}">
          ${p.image ? `<img class="project-img" src="${esc(img(p.image))}" alt="">` : ""}
          ${facts(p)}
          <h2>${esc(p.title)}</h2>
          <p class="summary">${esc(p.summary)}</p>
          ${paras(p.text).map((t) => `<p>${esc(t)}</p>`).join("")}
        </article>`).join("")}`;
  }

  if (page === "contact") {
    main.innerHTML = `
      <section class="page-head">
        <h1>Contact</h1>
        <p class="lead">Planning something similar, have a question about a route, or just want to say hello? I'm happy to hear from you.</p>
      </section>
      <section class="contact">
        <a class="button" href="mailto:${esc(S.email)}">${esc(S.email)}</a>
        <ul class="social-list">
          ${S.social.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join("")}
        </ul>
      </section>`;
  }
}
