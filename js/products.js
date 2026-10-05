/* ==========================================================================
   Bella Beauty Shop — données produits
   -----------------------------------------------------------------------
   Catégorie "Perruques" : contenu réel fourni par Hussein (18 pièces).
   Les champs "image" seront ajoutés dès réception des fichiers photo ;
   en attendant, la structure affiche un encadré placeholder.
   Catégories "Vêtements" et "Bazar" : volontairement vides pour l'instant,
   ce qui déclenche l'état "Cette collection arrive bientôt" sur le site.
   Pas de prix affiché : chaque produit renvoie vers le formulaire de
   contact via un CTA "Réserver".
   ========================================================================== */

const PRODUCTS = [
  {
    id: "p1",
    images: ["p1.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Perruque Bandeau Raw Hair Vietnamien",
    lead: "Perruque bandeau en raw hair vietnamien.",
    description: ["Perruque bandeau confectionnée en raw hair vietnamien."],
    specs: [
      { label: "Type", value: "Perruque bandeau" },
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Raw hair" }
    ]
  },
  {
    id: "p2",
    images: ["p2-1.jpg", "p2-2.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Raw Hair Birman — Taille 10, Frontale 13x4",
    lead: "Raw hair birman, taille 10, frontale 13x4.",
    description: ["Raw hair birman, taille 10, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Birman" },
      { label: "Texture", value: "Raw hair" },
      { label: "Longueur", value: "Taille 10" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p3",
    images: ["p3.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Raw Hair Birman — Taille 20, Frontale 13x4",
    lead: "Raw hair birman, taille 20, frontale 13x4.",
    description: ["Raw hair birman, taille 20, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Birman" },
      { label: "Texture", value: "Raw hair" },
      { label: "Longueur", value: "Taille 20" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p4",
    images: ["p4.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Water Wave Raw Hair Birman — Taille 10, Frontale 13x4",
    lead: "Water wave raw hair birman, taille 10, frontale 13x4.",
    description: ["Water wave raw hair birman, taille 10, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Birman" },
      { label: "Texture", value: "Water wave raw hair" },
      { label: "Longueur", value: "Taille 10" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p5",
    images: ["p5-1.jpg", "p5-2.jpg", "p5-3.jpg", "p5-4.jpg", "p5-5.jpg", "p5-6.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Bouncy Raw Hair Indien — Taille 10, Frontale 13x4",
    lead: "Bouncy raw hair indien, taille 10, frontale 13x4.",
    description: ["Bouncy raw hair indien, taille 10, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Indien" },
      { label: "Texture", value: "Bouncy raw hair" },
      { label: "Longueur", value: "Taille 10" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p6",
    images: ["p6-1.jpg", "p6-2.jpg", "p6-3.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Raw Hair Vietnamien — Taille 30, Frontale 13x4",
    lead: "Raw hair vietnamien, taille 30, frontale 13x4.",
    description: ["Raw hair vietnamien, taille 30, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Raw hair" },
      { label: "Longueur", value: "Taille 30" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p7",
    images: ["p7.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Bouncy Raw Hair Vietnamien — Taille 30, Frontale 13x4",
    lead: "Bouncy raw hair vietnamien, taille 30, frontale 13x4.",
    description: ["Bouncy raw hair vietnamien, taille 30, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Bouncy raw hair" },
      { label: "Longueur", value: "Taille 30" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p8",
    images: ["p8-1.jpg", "p8-2.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Water Wave Raw Hair Vietnamien — Taille 30, Frontale 13x4",
    lead: "Water wave raw hair vietnamien, taille 30, frontale 13x4.",
    description: ["Water wave raw hair vietnamien, taille 30, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Water wave raw hair" },
      { label: "Longueur", value: "Taille 30" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p9",
    images: ["p9.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Bouncy Raw Hair Vietnamien — Taille 30, Frontale 13x4 (2ᵉ pièce)",
    lead: "Bouncy raw hair vietnamien, taille 30, frontale 13x4.",
    description: ["Bouncy raw hair vietnamien, taille 30, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Bouncy raw hair" },
      { label: "Longueur", value: "Taille 30" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p10",
    images: ["p10-1.jpg", "p10-2.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Bouncy Raw Hair Vietnamien — Taille 30, Frontale 13x4 (3ᵉ pièce)",
    lead: "Bouncy raw hair vietnamien, taille 30, frontale 13x4.",
    description: ["Bouncy raw hair vietnamien, taille 30, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Bouncy raw hair" },
      { label: "Longueur", value: "Taille 30" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p11",
    images: ["p11-1.jpg", "p11-2.jpg", "p11-3.jpg", "p11-4.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Water Raw Hair Indien — Taille 20, Frontale 13x4",
    lead: "Water raw hair indien, taille 20, frontale 13x4.",
    description: ["Water raw hair indien, taille 20, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Indien" },
      { label: "Texture", value: "Water raw hair" },
      { label: "Longueur", value: "Taille 20" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p12",
    images: ["p12.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Bouncy Hair Vietnamien — Taille 30, Frontale 13x4",
    lead: "Bouncy hair vietnamien, taille 30, frontale 13x4.",
    description: ["Bouncy hair vietnamien, taille 30, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Bouncy hair" },
      { label: "Longueur", value: "Taille 30" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p13",
    images: ["p13.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Coupe Pixie",
    lead: "Coupe pixie.",
    description: ["Coupe pixie — détails à préciser."],
    specs: [
      { label: "Type", value: "Coupe pixie" }
    ]
  },
  {
    id: "p14",
    images: ["p14.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Bouncy Raw Hair Indien — Taille 12, Frontale 13x4",
    lead: "Bouncy raw hair indien, taille 12, frontale 13x4.",
    description: ["Bouncy raw hair indien, taille 12, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Indien" },
      { label: "Texture", value: "Bouncy raw hair" },
      { label: "Longueur", value: "Taille 12" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p15",
    images: ["p15-1.jpg", "p15-2.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Water Raw Hair Indien — Taille 20, Frontale 13x4 (2ᵉ pièce)",
    lead: "Water raw hair indien, taille 20, frontale 13x4.",
    description: ["Water raw hair indien, taille 20, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Indien" },
      { label: "Texture", value: "Water raw hair" },
      { label: "Longueur", value: "Taille 20" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p16",
    images: ["p16.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Bouncy Raw Hair Vietnamien — Taille 30, Frontale 13x4 (4ᵉ pièce)",
    lead: "Bouncy raw hair vietnamien, taille 30, frontale 13x4.",
    description: ["Bouncy raw hair vietnamien, taille 30, frontale 13x4."],
    specs: [
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Bouncy raw hair" },
      { label: "Longueur", value: "Taille 30" },
      { label: "Base", value: "Frontale 13x4" }
    ]
  },
  {
    id: "p17",
    images: ["p17-1.jpg", "p17-2.jpg", "p17-3.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Coupe Carré Raw Hair Vietnamien — Taille 10, Closure 4x4",
    lead: "Coupe carré raw hair vietnamien, taille 10, closure 4x4.",
    description: ["Coupe carré raw hair vietnamien, taille 10, closure 4x4."],
    specs: [
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Coupe carré raw hair" },
      { label: "Longueur", value: "Taille 10" },
      { label: "Base", value: "Closure 4x4" }
    ]
  },
  {
    id: "p18",
    images: ["p18.jpg"],
    category: "perruques",
    categoryLabel: "Perruques",
    title: "Coupe Carré Raw Hair Vietnamien — Taille 12, Closure 4x4",
    lead: "Coupe carré raw hair vietnamien, taille 12, closure 4x4.",
    description: ["Coupe carré raw hair vietnamien, taille 12, closure 4x4."],
    specs: [
      { label: "Origine", value: "Vietnamien" },
      { label: "Texture", value: "Coupe carré raw hair" },
      { label: "Longueur", value: "Taille 12" },
      { label: "Base", value: "Closure 4x4" }
    ]
  }
];

// Rend la liste disponible aussi bien en <script> classique (window.PRODUCTS)
// que si un jour le projet passe en modules ES.
if (typeof window !== "undefined") {
  window.PRODUCTS = PRODUCTS;
}
