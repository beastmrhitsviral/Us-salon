import blondBalayageImg from "@/src/assets/images/gallery_blonde_balayage_1792585111794.jpg";
import curlyHairImg from "@/src/assets/images/gallery_curly_hair_1792585111507.jpg";
import precisionCutImg from "@/src/assets/images/gallery_precision_cut_1792585111841.jpg";
import salonInteriorImg from "@/src/assets/images/hero_salon_interior_1792585110736.jpg";
import stylistPortraitImg from "@/src/assets/images/matt_nance_stylist_1792585112426.jpg";
import olaplexWashImg from "@/src/assets/images/gallery_olaplex_wash_1792585131966.jpg";
import brunetteDimensionImg from "@/src/assets/images/gallery_brunette_dimension_1792585132398.jpg";
import mensFadeCutImg from "@/src/assets/images/gallery_mens_fade_cut_1792585132317.jpg";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Curly Hair" | "Blonding & Color" | "Precision Cuts" | "Salon Studio";
  description: string;
  imageSrc: string;
  altText: string;
  aspectClass?: string; // For editorial rhythm in masonry/grid
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "curly-hair-editorial",
    title: "Defined Curly Hair Shaping & Volume",
    category: "Curly Hair",
    description: "Multi-dimensional curl shaping celebrating natural bounce, crown volume, and moisture retention.",
    imageSrc: curlyHairImg,
    altText: "Editorial hair photograph of defined, voluminous natural curls styled in a boutique salon setting",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: "blonde-balayage-ribbons",
    title: "Dimensional Blonde Balayage & Waves",
    category: "Blonding & Color",
    description: "Seamless sun-kissed blonde balayage with warm golden tones, soft contrast, and lived-in root depth.",
    imageSrc: blondBalayageImg,
    altText: "Lived-in dimensional blonde balayage with natural beach waves and luminous shine",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: "salon-interior-view",
    title: "The Hair Company Studio Atmosphere",
    category: "Salon Studio",
    description: "A calming boutique retreat in Poncha Springs, featuring natural wood elements, arched mirror, and mountain daylight.",
    imageSrc: salonInteriorImg,
    altText: "Boutique hair salon interior with natural wood finishes, arched mirror with backlight, and cozy mountain aesthetic",
    aspectClass: "aspect-[16/9] sm:col-span-2"
  },
  {
    id: "precision-bob-cut",
    title: "Architectural Precision Blunt Bob",
    category: "Precision Cuts",
    description: "Sharp, balanced perimeter haircut with subtle internal weight removal for modern swing and elegance.",
    imageSrc: precisionCutImg,
    altText: "Precision architectural blunt bob haircut with clean geometry and smooth texture",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: "brunette-dimensional-color",
    title: "Rich Dimensional Mocha & Caramel",
    category: "Blonding & Color",
    description: "Subtle multi-tonal brunette balayage ribbons adding light-catching warmth without dramatic lightening.",
    imageSrc: brunetteDimensionImg,
    altText: "Dimensional rich brunette hair with soft caramel and mocha ribbons",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: "mens-textured-cut",
    title: "Tailored Men's Scissor & Clipper Cut",
    category: "Precision Cuts",
    description: "Structured scissor texture on top with soft tapered edges and clean perimeter styling.",
    imageSrc: mensFadeCutImg,
    altText: "Men's tailored haircut with natural texture, clean fade, and modern matte finish",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: "restorative-wash-treatment",
    title: "Mindful Basin Treatment & Scalp Care",
    category: "Salon Studio",
    description: "A restorative hair and scalp ritual utilizing bond-building and deep hydration therapies.",
    imageSrc: olaplexWashImg,
    altText: "Restorative hair wash basin treatment and scalp therapy in a serene stone and wood salon space",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: "matt-nance-craft",
    title: "15 Years of Dedicated Hair Craft",
    category: "Salon Studio",
    description: "Matt Nance at his styling station, committed to personalized 1-on-1 attention for every guest.",
    imageSrc: stylistPortraitImg,
    altText: "Stylist and owner Matt Nance at his boutique salon workstation with shears and comb in hand",
    aspectClass: "aspect-[3/4]"
  }
];

export const GALLERY_CATEGORIES = [
  "All",
  "Curly Hair",
  "Blonding & Color",
  "Precision Cuts",
  "Salon Studio"
] as const;

export {
  blondBalayageImg,
  curlyHairImg,
  precisionCutImg,
  salonInteriorImg,
  stylistPortraitImg,
  olaplexWashImg,
  brunetteDimensionImg,
  mensFadeCutImg
};
