export type Product = {
  id: string;
  name: string;
  category: "living" | "dining" | "bedroom" | "lighting" | "decor";
  categoryLabel: string;
  price: number;
  description: string;
  materials: string;
  dimensions: string;
  image: string;
  modelCategory: "sofa" | "table" | "chair" | "lighting" | "credenza" | "bed" | "armchair" | "interior";
  isFeatured?: boolean;
  designer: string;
};

export const products: Product[] = [
  {
    id: "grains-oasis-sofa",
    name: "Oasis Sculptural Curved Sofa",
    category: "living",
    categoryLabel: "Living Room",
    price: 4200,
    description: "Designed with architectural fluid lines and rich tactile bouclé fabric. Supported by a handcrafted solid walnut base that embodies natural warmth.",
    materials: "Textured Bouclé, Italian Walnut, High-Density Latex",
    dimensions: "240cm W x 105cm D x 78cm H",
    image: "/assets/IMG_20260905_235158_062.jpg",
    modelCategory: "sofa",
    isFeatured: true,
    designer: "Studio GRAINS, 2024",
  },
  {
    id: "komorebi-dining-table",
    name: "Komorebi Artisanal Oak Table",
    category: "dining",
    categoryLabel: "Dining & Hospitality",
    price: 3850,
    description: "A solid white oak dining table featuring subtle grain patterns, softly chamfered edges, and architectural pillar legs.",
    materials: "Solid White Oak, Natural Organic Oil Finish",
    dimensions: "220cm L x 100cm W x 75cm H",
    image: "/assets/IMG_20260905_235158_063.jpg",
    modelCategory: "table",
    isFeatured: true,
    designer: "Kaito Morimoto",
  },
  {
    id: "solace-accent-chair",
    name: "Solace Low-Profile Accent Chair",
    category: "living",
    categoryLabel: "Living Room",
    price: 1450,
    description: "Ergonomic lounge chair with hand-carved ash wood frame and deep obsidian wool upholstery for peaceful contemplation.",
    materials: "Charcoal Wool, Ash Wood, Brass Fasteners",
    dimensions: "85cm W x 88cm D x 72cm H",
    image: "/assets/IMG_20260905_235158_142.jpg",
    modelCategory: "chair",
    isFeatured: true,
    designer: "Elena Rostova",
  },
  {
    id: "lumina-pendant-light",
    name: "Lumina Brass & Glass Chandelier",
    category: "lighting",
    categoryLabel: "Architectural Lighting",
    price: 890,
    description: "Suspended sculptural pendant casting ambient warm light through hand-blown frosted glass globes and brushed brass arms.",
    materials: "Brushed Brass, Hand-Blown Frosted Glass",
    dimensions: "60cm Diameter x 80cm Drop Length",
    image: "/assets/IMG_20260905_235158_149.jpg",
    modelCategory: "lighting",
    isFeatured: true,
    designer: "Studio GRAINS",
  },
  {
    id: "zenith-credenza",
    name: "Zenith Fluted Wood Credenza",
    category: "decor",
    categoryLabel: "Storage & Consoles",
    price: 2600,
    description: "Features tambour fluted wood doors, concealed soft-close drawers, and a honed travertine marble top.",
    materials: "Reclaimed Teak Wood, Italian Travertine Marble",
    dimensions: "180cm W x 45cm D x 75cm H",
    image: "/assets/IMG_20260905_235158_176.jpg",
    modelCategory: "credenza",
    isFeatured: true,
    designer: "Marcus Vance",
  },
  {
    id: "aura-sanctuary-bed",
    name: "Aura Minimalist Platform Bed",
    category: "bedroom",
    categoryLabel: "Bedroom Sanctuary",
    price: 3400,
    description: "Low-height minimalist bed frame with integrated floating nightstands and upholstered linen headboard.",
    materials: "European Oak, Belgian Organic Linen",
    dimensions: "200cm W x 220cm L x 90cm Headboard H",
    image: "/assets/IMG_20260905_235227_630.jpg",
    modelCategory: "bed",
    isFeatured: true,
    designer: "Studio GRAINS",
  },
  {
    id: "kaze-lounge-armchair",
    name: "Kaze Tactile Modern Armchair",
    category: "living",
    categoryLabel: "Living Room",
    price: 1680,
    description: "Generous deep seating enveloped in plush warm cream woven textile with slatted timber backrest.",
    materials: "Solid Oak, Cream Linen Blend Upholstery",
    dimensions: "92cm W x 95cm D x 78cm H",
    image: "/assets/IMG_20260905_235233_085.jpg",
    modelCategory: "armchair",
    isFeatured: false,
    designer: "Kaito Morimoto",
  },
  {
    id: "verve-dining-chair",
    name: "Verve Curved Back Dining Chair",
    category: "dining",
    categoryLabel: "Dining & Hospitality",
    price: 620,
    description: "Sculptural dining seat designed for extended comfort with a steam-bent wooden back support.",
    materials: "Steam-bent Oak, Charcoal Fabric Seat",
    dimensions: "55cm W x 52cm D x 78cm H",
    image: "/assets/IMG_20260905_235243_919.jpg",
    modelCategory: "chair",
    isFeatured: false,
    designer: "Elena Rostova",
  },
];
