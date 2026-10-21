import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Scissors,
  Sun,
  ShieldCheck,
  ArrowRight,
  Maximize2
} from "lucide-react";
import { PageSEO } from "@/src/components/PageSEO";
import { AppointmentCTA } from "@/src/components/AppointmentCTA";
import { Lightbox } from "@/src/components/Lightbox";
import { BUSINESS_CONFIG, buildSmsLink } from "@/src/config/business";
import { GALLERY_ITEMS } from "@/src/data/gallery";
import salonInteriorImg from "@/src/assets/images/hero_salon_interior_1792585110736.jpg";
import stylistPortraitImg from "@/src/assets/images/matt_nance_stylist_1792585112426.jpg";
import hairCuttingImg from "@/src/assets/images/hero_hair_cutting_craft_1792585891775.jpg";

export function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // Take first 4 gallery items for preview
  const previewGallery = GALLERY_ITEMS.slice(0, 4);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageSEO
        title="The Hair Company – Boutique Salon in Poncha Springs, CO"
        description="Boutique hair salon in Poncha Springs, CO led by master stylist Matt Nance with 15 years experience. Specializing in curly hair shaping, blonding, precision cuts, and OLAPLEX."
      />

      {/* Hero Section with Professional Hair Cutting Background & Dark Semi-Transparent Mask */}
      <section className="relative overflow-hidden bg-[#181916] text-[#F7F5F0] pt-12 pb-16 sm:pt-20 sm:pb-28 border-b border-[#3D4033]">
        {/* Background photo of cutting hair */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={hairCuttingImg}
            alt="Professional precision shears and comb cutting hair"
            className="w-full h-full object-cover object-center opacity-45 sm:opacity-50 select-none scale-105"
          />
          {/* Dark semi-transparent mask overlay ensuring high legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-[#1b1c18]/88 to-black/80 backdrop-blur-[1.5px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left column: Typography & CTAs */}
            <div className="lg:col-span-7 space-y-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8CFC3]">
                <Sparkles className="w-3.5 h-3.5 text-[#D8CFC3]" />
                <span>Poncha Springs · Chaffee County, Colorado</span>
              </div>

              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.12] text-balance drop-shadow-sm">
                Elevated Hair Craft Guided by 15 Years of Precision.
              </h1>

              <p className="text-base sm:text-lg text-[#D8CFC3] leading-relaxed max-w-xl font-light">
                Welcome to <strong className="font-medium text-white">{BUSINESS_CONFIG.name}</strong>, a boutique hair studio in Poncha Springs founded by stylist <strong className="font-medium text-white">{BUSINESS_CONFIG.owner}</strong>. We specialize in custom curly hair shaping, lived-in blonding, and restorative treatments designed for authentic mountain lifestyles.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={BUSINESS_CONFIG.urls.smsBooking}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#242424] bg-[#F7F5F0] hover:bg-white rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageSquare className="w-4 h-4 text-[#777A63]" />
                  <span>Book Appointment via SMS</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.urls.phoneCall}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white border border-[#D8CFC3]/40 hover:border-white hover:bg-white/10 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Phone className="w-4 h-4 text-[#D8CFC3]" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
              </div>

              {/* Micro Trust Indicators */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#D8CFC3]/90">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#777A63]" />
                  <span className="font-medium text-white">15 Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#777A63]" />
                  <span>Bespoke 1-on-1 Studio Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#777A63]" />
                  <span>Tue – Sat, 10 AM – 6 PM</span>
                </div>
              </div>
            </div>

            {/* Right column: Salon interior showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-[#242424]/60">
                <img
                  src={salonInteriorImg}
                  alt="The Hair Company boutique salon interior in Poncha Springs, Colorado"
                  className="w-full h-full object-cover object-center"
                />
                {/* Contrast scrim for label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] uppercase tracking-widest text-[#D8CFC3] font-medium block">
                    Salon Sanctuary
                  </span>
                  <p className="font-serif-display text-xl font-normal leading-snug">
                    Serene mountain studio tailored for relaxed, unhurried appointments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stylist Spotlight Section: Matt Nance & 15 Years Experience */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D8CFC3]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Portrait column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D8CFC3] aspect-[3/4] max-w-md mx-auto lg:max-w-none bg-[#EBE5DC]">
                <img
                  src={stylistPortraitImg}
                  alt="Matt Nance, owner and master stylist at The Hair Company in Poncha Springs"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#D8CFC3]">
                    Founder & Master Stylist
                  </p>
                  <p className="font-serif-display text-2xl font-normal">
                    {BUSINESS_CONFIG.owner}
                  </p>
                  <p className="text-xs text-[#D8CFC3] mt-1 font-light">
                    15 Years of Dedicated Hair Styling Mastery
                  </p>
                </div>
              </div>
            </div>

            {/* Story column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777A63]">
                <Scissors className="w-3.5 h-3.5" />
                <span>Meet Your Stylist</span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#242424] leading-tight">
                Crafting Hair That Enhances Who You Are.
              </h2>

              <p className="text-base text-[#555550] leading-relaxed font-light">
                With <strong>15 years of hands-on experience</strong> behind the chair, Matt Nance founded The Hair Company to bring thoughtful, individualized hair design to Poncha Springs and the Upper Arkansas River Valley.
              </p>

              <p className="text-base text-[#555550] leading-relaxed font-light">
                Matt believes your hair should look effortlessly radiant not just when leaving the chair, but weeks later in your everyday mountain life. His signature specialties include curl-by-curl shaping that works with natural texture, dimensional blonding that grows out seamlessly, and restorative treatments that defend against Colorado&apos;s dry air and intense sun.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D8CFC3]/60">
                  <h3 className="font-semibold text-sm text-[#242424] mb-1">
                    Dedicated 1-on-1 Focus
                  </h3>
                  <p className="text-xs text-[#555550] leading-relaxed">
                    No double-booking or rushed conveyor-belt appointments. Your session is private and personalized.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#D8CFC3]/60">
                  <h3 className="font-semibold text-sm text-[#242424] mb-1">
                    High-Altitude Hair Care
                  </h3>
                  <p className="text-xs text-[#555550] leading-relaxed">
                    Formulations and techniques selected specifically for hair subjected to Colorado elevation, wind, and dry seasons.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={buildSmsLink("Consultation with Matt", "I would like to discuss my hair goals with Matt")}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242424] hover:text-[#777A63] underline underline-offset-4 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Start a Conversation via Text with Matt</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Services Overview */}
      <section className="py-16 sm:py-24 border-b border-[#D8CFC3]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#777A63] block">
              Core Specializations
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#242424] tracking-tight">
              Boutique Hair Craft & Services
            </h2>
            <p className="text-base text-[#555550] font-light leading-relaxed">
              Every service is tailored to your hair texture, lifestyle, and aesthetic. Contact Matt directly for current pricing and customized time allocations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service Pillar 1 */}
            <div className="bg-white rounded-2xl p-8 border border-[#D8CFC3] shadow-sm flex flex-col justify-between hover:border-[#777A63] transition-all duration-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] border border-[#D8CFC3] flex items-center justify-center text-[#777A63]">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-2xl font-normal text-[#242424]">
                  Curly Hair & Precision Cuts
                </h3>
                <p className="text-sm text-[#555550] leading-relaxed">
                  Specialized curl-by-curl shaping, women&apos;s architectural cuts, and tailored men&apos;s and kids&apos; styling crafted to honor natural hair movement.
                </p>
                <div className="pt-2 text-xs text-[#777A63] font-medium">
                  Contact Matt for Pricing
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8CFC3]/60 flex items-center justify-between">
                <Link
                  to="/services"
                  className="text-xs font-semibold uppercase tracking-wider text-[#242424] hover:text-[#777A63] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Cuts</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildSmsLink("Haircut Inquiry")}
                  className="text-xs text-[#777A63] hover:underline"
                >
                  Inquire via SMS
                </a>
              </div>
            </div>

            {/* Service Pillar 2 */}
            <div className="bg-white rounded-2xl p-8 border border-[#D8CFC3] shadow-sm flex flex-col justify-between hover:border-[#777A63] transition-all duration-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] border border-[#D8CFC3] flex items-center justify-center text-[#777A63]">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-2xl font-normal text-[#242424]">
                  Blonding & Dimensional Color
                </h3>
                <p className="text-sm text-[#555550] leading-relaxed">
                  Lived-in balayage, custom foils, full and partial highlights, and toner refreshes that capture natural Colorado sunshine while preserving strand health.
                </p>
                <div className="pt-2 text-xs text-[#777A63] font-medium">
                  Contact Matt for Pricing
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8CFC3]/60 flex items-center justify-between">
                <Link
                  to="/services"
                  className="text-xs font-semibold uppercase tracking-wider text-[#242424] hover:text-[#777A63] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Color</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildSmsLink("Blonding & Color Inquiry")}
                  className="text-xs text-[#777A63] hover:underline"
                >
                  Inquire via SMS
                </a>
              </div>
            </div>

            {/* Service Pillar 3 */}
            <div className="bg-white rounded-2xl p-8 border border-[#D8CFC3] shadow-sm flex flex-col justify-between hover:border-[#777A63] transition-all duration-200">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] border border-[#D8CFC3] flex items-center justify-center text-[#777A63]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-2xl font-normal text-[#242424]">
                  Hair Health Treatments
                </h3>
                <p className="text-sm text-[#555550] leading-relaxed">
                  OLAPLEX bond-building therapies and intensive moisture rituals to repair environmental stress, mineral build-up, and chemical damage.
                </p>
                <div className="pt-2 text-xs text-[#777A63] font-medium">
                  Contact Matt for Pricing
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#D8CFC3]/60 flex items-center justify-between">
                <Link
                  to="/services"
                  className="text-xs font-semibold uppercase tracking-wider text-[#242424] hover:text-[#777A63] inline-flex items-center gap-1 transition-colors"
                >
                  <span>View Treatments</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={buildSmsLink("OLAPLEX Treatment Inquiry")}
                  className="text-xs text-[#777A63] hover:underline"
                >
                  Inquire via SMS
                </a>
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#242424] hover:bg-[#777A63] rounded-xl transition-colors shadow-sm"
            >
              <span>Explore All Services & Techniques</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#D8CFC3]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#777A63] block mb-2">
                Inspirational Photography
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#242424]">
                Styling Inspiration
              </h2>
              <p className="text-xs sm:text-sm text-[#555550] mt-1 font-light">
                Editorial hair references showcasing curl definition, blonde balayage, and salon ambiance.
              </p>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242424] hover:text-[#777A63] transition-colors whitespace-nowrap"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewGallery.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden border border-[#D8CFC3] aspect-[4/3] bg-[#EBE5DC] shadow-sm hover:shadow-md transition-all duration-200"
              >
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-end">
                    <span className="p-1.5 rounded-full bg-black/40 text-white backdrop-blur-sm">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D8CFC3] font-semibold block">
                      {item.category}
                    </span>
                    <h4 className="font-serif-display text-sm font-medium leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#555550]/80 text-center mt-6">
            *All imagery displayed as inspirational photography and references, not verified client work.
          </p>

        </div>
      </section>

      {/* Business Hours & Location Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Location details */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#D8CFC3] shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777A63]">
                  <MapPin className="w-4 h-4" />
                  <span>Salon Location & Directions</span>
                </div>

                <h3 className="font-serif-display text-3xl font-normal text-[#242424]">
                  Conveniently Located in Poncha Springs
                </h3>

                <address className="not-italic text-base text-[#242424] space-y-1">
                  <p className="font-medium">{BUSINESS_CONFIG.name}</p>
                  <p>{BUSINESS_CONFIG.address.street}</p>
                  <p>{BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.zip}</p>
                </address>

                <p className="text-sm text-[#555550] leading-relaxed">
                  {BUSINESS_CONFIG.address.notes} Easy access with dedicated parking available for salon clients.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#D8CFC3]/60 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_CONFIG.urls.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#242424] hover:bg-[#777A63] rounded-xl transition-colors shadow-sm"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#D8CFC3]" />
                  <span>Google Maps Directions</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.urls.phoneCall}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#242424] bg-[#F7F5F0] hover:bg-[#D8CFC3]/60 border border-[#D8CFC3] rounded-xl transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#777A63]" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Hours card */}
            <div className="lg:col-span-6 bg-[#242424] text-[#F7F5F0] rounded-3xl p-8 sm:p-10 border border-[#3D4033] shadow-md flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8CFC3]">
                  <Clock className="w-4 h-4 text-[#777A63]" />
                  <span>Opening Hours</span>
                </div>

                <h3 className="font-serif-display text-3xl font-normal text-white">
                  Weekly Schedule
                </h3>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between py-3 border-b border-[#3D4033]">
                    <span className="text-base text-white font-medium">Tuesday – Saturday</span>
                    <span className="font-mono text-sm text-[#D8CFC3]">10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#3D4033]">
                    <span className="text-base text-[#D8CFC3]/70">Sunday & Monday</span>
                    <span className="text-xs uppercase tracking-wider text-[#D8CFC3]/60">Closed</span>
                  </div>
                </div>

                <p className="text-xs text-[#D8CFC3]/80 leading-relaxed">
                  Appointments are private and scheduled in advance. Texting Matt is the fastest way to confirm availability or ask questions about services.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#3D4033]">
                <a
                  href={BUSINESS_CONFIG.urls.smsBooking}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#242424] bg-[#F7F5F0] hover:bg-[#D8CFC3] rounded-xl transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#777A63]" />
                  <span>Text Matt to Book: {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Reusable Appointment CTA */}
      <AppointmentCTA />

      {/* Lightbox for preview images */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={activePhotoIndex}
        items={GALLERY_ITEMS}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setActivePhotoIndex((prev) => (prev + 1) % GALLERY_ITEMS.length)}
        onPrev={() => setActivePhotoIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
      />
    </>
  );
}
