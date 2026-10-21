export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  details: string[];
  pricingLabel: string;
  featured?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  services: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "cuts-curls",
    title: "Curly Hair & Precision Cuts",
    subtitle: "Custom shaping tailored to your natural movement and bone structure",
    description: "Every cut begins with a detailed lifestyle consultation. Whether defining delicate natural curl patterns or executing crisp architectural silhouettes, cuts are designed for lasting wear and effortless daily styling.",
    services: [
      {
        id: "curly-hair-shaping",
        name: "Curly Hair Shaping & Texture Cut",
        category: "Curly Hair & Precision Cuts",
        description: "Specialized dry or wet curl-by-curl shaping designed to release weight, enhance natural bounce, and eliminate triangle shapes.",
        details: [
          "Comprehensive curl pattern assessment",
          "Dry or damp precision tension cutting",
          "Hydration prep and diffuse finish",
          "Curl maintenance and product regimen advice"
        ],
        pricingLabel: "Contact Matt for Pricing",
        featured: true
      },
      {
        id: "womens-precision-cut",
        name: "Women's Precision Haircut",
        category: "Curly Hair & Precision Cuts",
        description: "Tailored haircut customized to hair density, facial structure, and personal aesthetic. Includes clarifying wash, condition, and polished blowout.",
        details: [
          "One-on-one style consultation",
          "Deep cleanse & conditioning wash",
          "Precision geometric or lived-in cutting",
          "Signature blow-dry and thermal styling"
        ],
        pricingLabel: "Contact Matt for Pricing",
        featured: true
      },
      {
        id: "mens-tailored-cut",
        name: "Men's Tailored Cut",
        category: "Curly Hair & Precision Cuts",
        description: "Clean, classic, or contemporary scissor and clipper work with meticulous attention to neckline, natural growth direction, and texture.",
        details: [
          "Custom taper, fade, or scissor-over-comb",
          "Neckline cleanup and ear perimeter detail",
          "Refreshing shampoo wash",
          "Natural matte or pliable finish styling"
        ],
        pricingLabel: "Contact Matt for Pricing"
      },
      {
        id: "kids-haircut",
        name: "Kids' Haircut",
        category: "Curly Hair & Precision Cuts",
        description: "Patient, attentive haircuts for children and teens in a comfortable, relaxed salon atmosphere.",
        details: [
          "Gentle and friendly approach",
          "Easy-to-manage styles for active lifestyles",
          "Quick and comfortable experience"
        ],
        pricingLabel: "Contact Matt for Pricing"
      }
    ]
  },
  {
    id: "blonding-color",
    title: "Blonding & Dimensional Color",
    subtitle: "Sun-kissed elevation, customized balayage, and luminous tone control",
    description: "Achieving clean blondes and rich dimensional tones requires 15 years of technical chemistry mastery. We formulate with hair integrity at the forefront for seamless grow-out and luminous depth.",
    services: [
      {
        id: "balayage-dimensional-color",
        name: "Hand-Painted Balayage & Foilayage",
        category: "Blonding & Dimensional Color",
        description: "Freehand swept highlights creating soft, lived-in graduation from root to ends without harsh grow-out demarcation lines.",
        details: [
          "Face-framing brightness & interior depth",
          "Custom gloss toner formulation",
          "Low-maintenance grow-out schedule",
          "Bond-protecting additive included"
        ],
        pricingLabel: "Contact Matt for Pricing",
        featured: true
      },
      {
        id: "highlights-dimensional",
        name: "Full & Partial Dimensional Highlights",
        category: "Blonding & Dimensional Color",
        description: "Precision foil placement tailored to introduce uniform brightness, subtle multi-tonal lowlights, or high-impact blonde transformation.",
        details: [
          "Micro-fine or ribboned foil placement",
          "Scalp-to-end illumination",
          "Custom tonal glaze / shadow root option",
          "Blowout styling"
        ],
        pricingLabel: "Contact Matt for Pricing"
      },
      {
        id: "blonde-refresh-toner",
        name: "Blonde Refresh & Gloss Toner",
        category: "Blonding & Dimensional Color",
        description: "An express revival service between full color appointments to cancel brassiness, restore icy or golden tones, and seal the hair cuticle with mirror shine.",
        details: [
          "Targeted pH-balancing color glaze",
          "Deep shine deposit & tone neutralization",
          "Quick wash & blow-dry revival",
          "Ideal 4-6 weeks post-blonding"
        ],
        pricingLabel: "Contact Matt for Pricing"
      },
      {
        id: "color-consultation",
        name: "Custom Color Consultation",
        category: "Blonding & Dimensional Color",
        description: "Dedicated discussion of your hair color history, current condition, strand test if necessary, and realistic phased plan for major transformations.",
        details: [
          "Strand health and porosity evaluation",
          "Inspiration review and lifestyle alignment",
          "Session roadmap and timeframe estimate",
          "Custom maintenance routine guidance"
        ],
        pricingLabel: "Contact Matt for Pricing"
      }
    ]
  },
  {
    id: "treatments",
    title: "Hair Health Treatments",
    subtitle: "Restorative science and mountain-climate hydration therapies",
    description: "Living at 7,400+ feet in the Arkansas River Valley presents unique challenges: dry air, intense high-altitude UV, and mineral-rich water. These targeted treatments rebuild hair bonds and restore essential moisture.",
    services: [
      {
        id: "olaplex-treatment",
        name: "OLAPLEX Bond-Building Treatment",
        category: "Hair Health Treatments",
        description: "The gold standard in bond repair. Rebuilds broken disulfide bonds at a molecular level caused by coloring, heat styling, and environmental exposure.",
        details: [
          "Intensive No.1 & No.2 professional bond repair",
          "Noticeable reduction in breakage & split ends",
          "Restores natural structural elasticity",
          "Recommended with all blonding services"
        ],
        pricingLabel: "Contact Matt for Pricing",
        featured: true
      },
      {
        id: "moisture-scalp-therapy",
        name: "High-Altitude Moisture & Scalp Therapy",
        category: "Hair Health Treatments",
        description: "Deep nourishing hair mask and gentle scalp massage designed specifically to counteract Colorado's arid climate and winter dry air.",
        details: [
          "Botanical moisture-infusion mask",
          "Soothing scalp stimulation",
          "Cuticle sealing for lasting softness",
          "Blowout finish"
        ],
        pricingLabel: "Contact Matt for Pricing"
      },
      {
        id: "hair-care-consultation",
        name: "Personalized Hair-Care Consultation",
        category: "Hair Health Treatments",
        description: "A 1-on-1 personalized diagnostic session to curate the ideal at-home wash, conditioning, and thermal defense regimen tailored to your hair's unique texture.",
        details: [
          "Texture, density, and elasticity audit",
          "Product ingredient breakdown",
          "Wash frequency and thermal styling advice",
          "Tailored product recommendations"
        ],
        pricingLabel: "Contact Matt for Pricing"
      }
    ]
  }
];

export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) => c.services);
