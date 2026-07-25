export interface Collection {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const collections: Collection[] = [
  {
    id: 1,
    name: "Ready-to-Wear",
    slug: "ready-to-wear",
    image: "/images/home/hero-4.jpg",
    description:
      "Contemporary pieces designed for effortless elegance every day.",
  },
  {
    id: 2,
    name: "Bespoke",
    slug: "bespoke",
    image: "/images/home/hero-2.jpg",
    description:
      "Tailored garments handcrafted exclusively for you.",
  },
  {
    id: 3,
    name: "Bridal",
    slug: "bridal",
    image: "/images/home/hero-1.jpg",
    description:
      "Luxury bridal creations for unforgettable moments.",
  },
  {
    id: 4,
    name: "Accessories",
    slug: "accessories",
    image: "/images/home/hero-3.jpg",
    description:
      "Complete your look with timeless accessories.",
  },
];