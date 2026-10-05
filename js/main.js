/* ==========================================================================
   Bella Beauty Shop — logique du site (maquette)
   ========================================================================== */

/* -----------------------------------------------------------------------
   CONFIGURATION — à adapter avant mise en ligne
   ----------------------------------------------------------------------- */
// Numéro WhatsApp de la boutique, au format international SANS le "+"
// et sans espaces. Exemple pour la Côte d'Ivoire : "2250700000000"
const WHATSAPP_NUMBER = "2250707420556";

/* Icône utilisée pour tous les encadrés "image produit" de la maquette */
const PLACEHOLDER_ICON = `
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="3" y="4" width="18" height="16" rx="2"/>
    <circle cx="8.5" cy="9.5" r="1.5"/>
    <path d="M21 16l-5.5-5.5a2 2 0 0 0-2.8 0L3 20"/>
  </svg>`;

function placeholderMarkup(label) {
  return `<div class="placeholder">${PLACEHOLDER_ICON}<span>${label}</span></div>`;
}

function frameMarkup(label, src) {
  if (src) {
    return `
      <div class="frame frame__c2">
        <img src="assets/products/${src}" alt="${label}" loading="lazy" />
      </div>`;
  }
  return `
    <div class="frame frame__c2">
      ${placeholderMarkup(label)}
    </div>`;
}

/* -----------------------------------------------------------------------
   Carte produit (réutilisée : accueil, produits liés)
   ----------------------------------------------------------------------- */
function productCardMarkup(product) {
  const cover = product.images && product.images.length ? product.images[0] : null;
  return `
    <article class="product-card" data-category="${product.category}">
      <a class="product-card__media" href="product.html?id=${product.id}">
        <div class="product-card__frame">${frameMarkup(product.title, cover)}</div>
      </a>
      <div class="product-card__body">
        <a class="product-card__title-link" href="product.html?id=${product.id}">
          <span class="product-card__eyebrow">${product.categoryLabel}</span>
          <h3 class="product-card__title">${product.title}</h3>
        </a>
        <a class="reserve-pill" href="contact.html?produit=${product.id}">
          Réserver
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </article>`;
}

/* -----------------------------------------------------------------------
   Page d'accueil : grille + filtres
   ----------------------------------------------------------------------- */
function initProductGrid() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;

  const emptyState = document.querySelector("[data-empty-state]");
  const filterButtons = document.querySelectorAll("[data-filter]");
  const catalogue = document.getElementById("catalogue");
  const VALID_FILTERS = ["all", "perruques", "vetements", "bazar"];

  function render(filter) {
    const items = filter === "all"
      ? window.PRODUCTS
      : window.PRODUCTS.filter((p) => p.category === filter);

    grid.innerHTML = items.map(productCardMarkup).join("");
    if (emptyState) {
      emptyState.classList.toggle("is-visible", items.length === 0);
    }
  }

  // Applique un filtre : met à jour les boutons, la grille et l'adresse (#perruques...)
  function applyFilter(filter, { scroll = false } = {}) {
    if (!VALID_FILTERS.includes(filter)) filter = "all";

    filterButtons.forEach((b) => {
      b.classList.toggle("is-active", b.dataset.filter === filter);
    });
    render(filter);

    const newUrl = filter === "all"
      ? window.location.pathname + window.location.search
      : `${window.location.pathname}${window.location.search}#${filter}`;
    history.replaceState(null, "", newUrl);

    if (scroll && catalogue) {
      catalogue.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Boutons de filtre du catalogue
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
  });

  // Tous les liens de catégorie de la page (cartes, menu, pastilles, pied de page)
  // filtrent le catalogue puis font défiler jusqu'à lui.
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[href]");
    if (!link) return;
    const match = link.getAttribute("href").match(/^(?:index\.html)?#(perruques|vetements|bazar)$/);
    if (!match) return;

    e.preventDefault();
    applyFilter(match[1], { scroll: true });

    const nav = document.querySelector("[data-main-nav]");
    if (nav) nav.classList.remove("is-open");
  });

  // Bouton "Précédent" du navigateur
  window.addEventListener("hashchange", () => {
    applyFilter(window.location.hash.replace("#", ""));
  });

  // Arrivée depuis une autre page (ex. fiche produit -> index.html#perruques)
  const initialFilter = window.location.hash.replace("#", "");
  if (VALID_FILTERS.includes(initialFilter) && initialFilter !== "all") {
    applyFilter(initialFilter);
    setTimeout(() => catalogue && catalogue.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
  } else {
    render("all");
  }
}

/* -----------------------------------------------------------------------
   Page produit : rendu du détail + produits liés
   ----------------------------------------------------------------------- */
function initProductDetail() {
  const root = document.querySelector("[data-product-detail]");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const product = window.PRODUCTS.find((p) => p.id === id) || window.PRODUCTS[0];

  document.title = `${product.title} — Bella Beauty Shop`;

  // Fil d'Ariane
  const crumbCategory = document.querySelector("[data-crumb-category]");
  const crumbTitle = document.querySelector("[data-crumb-title]");
  if (crumbCategory) {
    crumbCategory.textContent = product.categoryLabel;
    crumbCategory.href = `index.html#${product.category}`;
  }
  if (crumbTitle) crumbTitle.textContent = product.title;

  // Galerie
  const gallery = document.querySelector("[data-gallery]");
  const thumbs = document.querySelector("[data-thumbs]");
  const hasImages = product.images && product.images.length > 0;

  if (gallery) {
    gallery.innerHTML = hasImages
      ? `<div class="frame frame__c2"><img src="assets/products/${product.images[0]}" alt="${product.title}" data-main-image /></div>`
      : frameMarkup("Image à venir");
  }

  if (thumbs) {
    if (hasImages && product.images.length > 1) {
      thumbs.innerHTML = product.images
        .map((img, i) => `
          <button type="button" class="thumb${i === 0 ? " is-active" : ""}" data-thumb data-src="assets/products/${img}">
            <img src="assets/products/${img}" alt="${product.title} — vue ${i + 1}" loading="lazy" />
          </button>`)
        .join("");

      thumbs.querySelectorAll("[data-thumb]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const mainImg = gallery.querySelector("[data-main-image]");
          if (mainImg) mainImg.src = btn.dataset.src;
          thumbs.querySelectorAll("[data-thumb]").forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
        });
      });
    } else {
      thumbs.innerHTML = "";
    }
  }

  // Infos
  document.querySelector("[data-eyebrow]").textContent = product.categoryLabel;
  document.querySelector("[data-title]").textContent = product.title;
  document.querySelector("[data-lead]").textContent = product.lead;

  const descWrap = document.querySelector("[data-description]");
  if (descWrap) {
    descWrap.innerHTML = product.description.map((p) => `<p>${p}</p>`).join("");
  }

  const specsList = document.querySelector("[data-specs]");
  if (specsList) {
    specsList.innerHTML = product.specs
      .map((s) => `<li><span>${s.label}</span><span>${s.value}</span></li>`)
      .join("");
  }

  // CTA -> formulaire de contact avec le produit pré-rempli
  const ctaLinks = document.querySelectorAll("[data-cta-contact]");
  ctaLinks.forEach((link) => {
    link.href = `contact.html?produit=${product.id}`;
  });

  // Produits liés (même catégorie, sauf le produit courant)
  const relatedGrid = document.querySelector("[data-related-grid]");
  if (relatedGrid) {
    const related = window.PRODUCTS
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
    relatedGrid.innerHTML = related.map(productCardMarkup).join("");
  }
}

/* -----------------------------------------------------------------------
   Page contact : pré-remplissage produit + envoi WhatsApp
   ----------------------------------------------------------------------- */
function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const params = new URLSearchParams(window.location.search);
  const produitId = params.get("produit");
  const select = form.querySelector("[name='produit']");
  const selectedProductBox = document.querySelector("[data-selected-product]");

  // Remplit la liste déroulante des produits
  if (select) {
    const options = window.PRODUCTS
      .map((p) => `<option value="${p.id}">${p.title}</option>`)
      .join("");
    select.innerHTML = `<option value="">Choisir un produit (optionnel)</option>${options}`;

    if (produitId) {
      select.value = produitId;
    }
  }

  function updateSelectedPreview() {
    if (!selectedProductBox) return;
    const product = window.PRODUCTS.find((p) => p.id === select.value);
    if (!product) {
      selectedProductBox.classList.remove("is-visible");
      selectedProductBox.innerHTML = "";
      return;
    }
    selectedProductBox.classList.add("is-visible");
    const cover = product.images && product.images.length ? product.images[0] : null;
    const thumb = cover
      ? `<img src="assets/products/${cover}" alt="${product.title}" />`
      : placeholderMarkup("");
    selectedProductBox.innerHTML = `
      ${thumb}
      <div>
        <strong>${product.title}</strong>
        ${product.categoryLabel}
      </div>`;
  }

  if (select) {
    select.addEventListener("change", updateSelectedPreview);
    updateSelectedPreview();
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = form.nom.value.trim();
    const telephone = form.telephone.value.trim();
    const quantite = form.quantite.value.trim();
    const message = form.message.value.trim();
    const produit = select ? select.options[select.selectedIndex]?.text : "";

    const lignes = [
      `Bonjour Bella Beauty Shop, je souhaite passer commande.`,
      ``,
      `Nom : ${nom}`,
      `Téléphone : ${telephone}`,
      produit ? `Produit : ${produit}` : null,
      quantite ? `Quantité : ${quantite}` : null,
      message ? `Message : ${message}` : null,
    ].filter(Boolean);

    const texte = encodeURIComponent(lignes.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${texte}`;

    window.open(url, "_blank");
  });
}

/* -----------------------------------------------------------------------
   Navigation mobile
   ----------------------------------------------------------------------- */
function initNavToggle() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-main-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });
}

/* -----------------------------------------------------------------------
   Init
   ----------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initProductGrid();
  initProductDetail();
  initContactForm();
});
