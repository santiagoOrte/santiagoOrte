/**
 * main.js
 * ========
 * Lógica principal: lee el arreglo PROJECTS de projects.js
 * y genera las tarjetas en el DOM. No necesitas tocar este archivo
 * a menos que quieras cambiar el comportamiento del sitio.
 */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});

/* ── Render de tarjetas ── */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  grid.innerHTML = "";

  if (!PROJECTS || PROJECTS.length === 0) {
    grid.innerHTML = `
      <p class="empty-state">
        Aún no hay proyectos.<br>
        Edita <code>js/projects.js</code> para añadir los tuyos 🌱
      </p>`;
    return;
  }

  PROJECTS.forEach((project, index) => {
    const card = createCard(project, index);
    grid.appendChild(card);
  });
}

/* ── Construye una tarjeta ── */
function createCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.style.animationDelay = `${index * 0.08}s`;

  const tagsHTML = (project.tags || [])
    .map(tag => `<span class="tag">${escapeHTML(tag)}</span>`)
    .join("");

  const imageHTML = project.image
    ? `<div class="card-image">
         <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.name)}" loading="lazy" />
       </div>`
    : "";

  const githubBtn = project.github
    ? `<a class="btn-link" href="${escapeHTML(project.github)}" target="_blank" rel="noopener">
         ↗ GitHub
       </a>`
    : "";

  const demoBtn = project.demo
    ? `<a class="btn-link btn-link--demo" href="${escapeHTML(project.demo)}" target="_blank" rel="noopener">
         ↗ Demo
       </a>`
    : "";

  card.innerHTML = `
    ${imageHTML}
    <div class="card-body">
      ${tagsHTML ? `<div class="tag-row">${tagsHTML}</div>` : ""}
      <h3 class="card-title">${escapeHTML(project.name)}</h3>
      <p class="card-desc">${escapeHTML(project.desc)}</p>
      ${githubBtn || demoBtn ? `<div class="card-links">${githubBtn}${demoBtn}</div>` : ""}
    </div>
  `;

  return card;
}

/* ── Utilidad: escapa HTML para evitar XSS ── */
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
