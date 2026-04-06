export type Photo = {
  src: string;
  alt: string;
};

export type PhotoCategory = {
  name: string;
  slug: string;
  coverImage: string;
  photos: Photo[];
};

const categories: PhotoCategory[] = [
  {
    name: "Food",
    slug: "food",
    coverImage: "/img/chocolate_cookies.jpg",
    photos: [
      { src: "/img/chocolate_cookies.jpg", alt: "Chocolate cookies" },
      { src: "/img/grilled_mushrooms.jpg", alt: "Grilled mushrooms" },
      { src: "/img/roasted_veg_salad.jpg", alt: "Roasted veg salad" },
      { src: "/img/veg_alfredo.jpg", alt: "Veg alfredo" },
      { src: "/img/veg_lentil_soup.jpg", alt: "Veg lentil soup" },
      { src: "/img/veg_stir_fry.jpg", alt: "Veg stir fry" },
      { src: "/img/veggie_carbonara.jpg", alt: "Veggie carbonara" },
      { src: "/img/veggie_tacos.jpg", alt: "Veggie tacos" },
    ],
  },
  {
    name: "Nature",
    slug: "nature",
    coverImage: "/img/roasted_veg_salad.jpg",
    photos: [
      {
        src: "/img/roasted_veg_salad.jpg",
        alt: "Colourful roasted vegetable salad in natural light",
      },
      { src: "/img/veg_stir_fry.jpg", alt: "Steaming vegetable stir fry with fresh herbs" },
      { src: "/img/grilled_mushrooms.jpg", alt: "Grilled mushrooms on a wooden board" },
      { src: "/img/veg_lentil_soup.jpg", alt: "Warm lentil soup in a rustic bowl" },
      { src: "/img/chocolate_cookies.jpg", alt: "Stack of chocolate cookies with visible chips" },
    ],
  },
  {
    name: "Black & White",
    slug: "black-and-white",
    coverImage: "/img/veg_stir_fry.jpg",
    photos: [
      { src: "/img/veg_alfredo.jpg", alt: "Veg alfredo pasta in monochrome" },
      { src: "/img/veggie_carbonara.jpg", alt: "Veggie carbonara plated in black and white" },
      { src: "/img/veggie_tacos.jpg", alt: "Veggie tacos arranged in greyscale tones" },
    ],
  },
  {
    name: "Street",
    slug: "street",
    coverImage: "/img/veggie_tacos.jpg",
    photos: [
      { src: "/img/veggie_tacos.jpg", alt: "Street food-style veggie tacos on a counter" },
      { src: "/img/chocolate_cookies.jpg", alt: "Fresh-baked chocolate cookies at a market stall" },
      { src: "/img/veg_alfredo.jpg", alt: "Veg alfredo served at an outdoor café" },
      { src: "/img/grilled_mushrooms.jpg", alt: "Grilled mushrooms from a street vendor" },
    ],
  },
];

export function getAllCategories(): PhotoCategory[] {
  return categories;
}

export function getCategoryBySlug(slug: string): PhotoCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllPhotos(): Photo[] {
  return categories.flatMap((c) => c.photos);
}
