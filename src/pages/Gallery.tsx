import { useState, useMemo } from "react";
import { Info, Maximize2, Sparkles, MessageSquare } from "lucide-react";
import { PageSEO } from "@/src/components/PageSEO";
import { Lightbox } from "@/src/components/Lightbox";
import { AppointmentCTA } from "@/src/components/AppointmentCTA";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, GalleryItem } from "@/src/data/gallery";
import { buildSmsLink } from "@/src/config/business";

export function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Filter items based on selected category
  const filteredItems: GalleryItem[] = useMemo(() => {
    if (selectedCategory === "All") {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_ITEMS.findIndex((i) => i.id === item.id);
    setCurrentIndex(originalIndex >= 0 ? originalIndex : 0);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <>
      <PageSEO
        title="Inspiration Gallery – The Hair Company Poncha Springs"
        description="Browse styling inspiration for curly hair, lived-in blonde balayage, precision cuts, and boutique salon interiors at The Hair Company in Poncha Springs, CO."
      />

      {/* Hero Header */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-white border-b border-[#D8CFC3]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777A63]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Inspiration</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#242424] tracking-tight">
              Inspirational Hair Gallery
            </h1>

            <p className="text-base sm:text-lg text-[#555550] font-light leading-relaxed">
              Explore dimensional color palettes, natural curl silhouettes, and precision haircuts that inspire our studio craft. Click any image to view fullscreen details.
            </p>

            {/* Mandatory Disclaimer Box */}
            <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D8CFC3] flex items-start gap-3 text-xs text-[#555550] leading-relaxed">
              <Info className="w-4 h-4 text-[#777A63] shrink-0 mt-0.5" />
              <div>
                <strong className="font-medium text-[#242424]">Transparency Note:</strong> The photographs presented below represent aesthetic and technical inspiration, styling references, and studio concepts. They do not represent verified or claimed client work performed at the salon.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 z-30 bg-[#F7F5F0]/95 backdrop-blur-sm border-b border-[#D8CFC3]/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === category
                    ? "bg-[#242424] text-white shadow-sm"
                    : "bg-white text-[#555550] hover:text-[#242424] border border-[#D8CFC3]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Masonry / Responsive Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#D8CFC3] bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE5DC]">
                  <img
                    src={item.imageSrc}
                    alt={item.altText}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/90 text-[#242424] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                      <Maximize2 className="w-5 h-5" />
                    </span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-black/60 text-white rounded-md backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Card description content */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div className="space-y-1">
                    <h3 className="font-serif-display text-xl font-normal text-[#242424] group-hover:text-[#777A63] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#555550] leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#D8CFC3]/50 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#777A63]">Click for details</span>
                    <a
                      href={buildSmsLink(item.title, "Inquiring about this styling look")}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-semibold text-[#242424] hover:text-[#777A63] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#777A63]" />
                      <span>Text Matt</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Footer disclosure */}
          <div className="mt-12 text-center text-xs text-[#555550] max-w-2xl mx-auto space-y-2">
            <p>
              Have a photo of your own dream look or inspiration? Save it to your phone and text it to Matt prior to or during your consultation.
            </p>
            <p className="text-[11px] text-[#555550]/70">
              *Inspirational photography provided as artistic references only.
            </p>
          </div>

        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        items={GALLERY_ITEMS}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <AppointmentCTA
        title="Found a Look That Inspires You?"
        subtitle="Text Matt Nance to discuss whether this texture, tone, or shape aligns with your natural hair and daily routine."
      />
    </>
  );
}
