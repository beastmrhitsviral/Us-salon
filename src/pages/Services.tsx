import { useState } from "react";
import { MessageSquare, Phone, Check, Sparkles, Droplets, Scissors, Sun, HelpCircle } from "lucide-react";
import { PageSEO } from "@/src/components/PageSEO";
import { AppointmentCTA } from "@/src/components/AppointmentCTA";
import { SERVICE_CATEGORIES, ServiceCategory } from "@/src/data/services";
import { BUSINESS_CONFIG, buildSmsLink } from "@/src/config/business";

export function ServicesPage() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");

  const filteredCategories: ServiceCategory[] =
    activeCategoryFilter === "all"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) => c.id === activeCategoryFilter);

  return (
    <>
      <PageSEO
        title="Services & Techniques – The Hair Company Poncha Springs"
        description="Comprehensive salon services by Matt Nance: curly hair shaping, women's & men's precision cuts, lived-in blonding, balayage, and OLAPLEX bond repair in Poncha Springs, CO."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#D8CFC3]/50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777A63]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Salon Offerings</span>
            </div>
            
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#242424] tracking-tight leading-tight">
              Bespoke Hair Craft, Formulated for You.
            </h1>

            <p className="text-base sm:text-lg text-[#555550] font-light leading-relaxed">
              Every appointment at The Hair Company is an unhurried, one-on-one session with stylist Matt Nance. Because hair density, length, and history vary greatly, all services are priced during your private consultation.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#777A63] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#777A63]" />
              <span>Contact Matt for Pricing · SMS Inquiries Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="sticky top-20 z-30 bg-[#F7F5F0]/95 backdrop-blur-sm border-b border-[#D8CFC3]/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveCategoryFilter("all")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategoryFilter === "all"
                  ? "bg-[#242424] text-white shadow-sm"
                  : "bg-white text-[#555550] hover:text-[#242424] border border-[#D8CFC3]"
              }`}
            >
              All Services
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryFilter("cuts-curls")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategoryFilter === "cuts-curls"
                  ? "bg-[#242424] text-white shadow-sm"
                  : "bg-white text-[#555550] hover:text-[#242424] border border-[#D8CFC3]"
              }`}
            >
              Curly Hair & Precision Cuts
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryFilter("blonding-color")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategoryFilter === "blonding-color"
                  ? "bg-[#242424] text-white shadow-sm"
                  : "bg-white text-[#555550] hover:text-[#242424] border border-[#D8CFC3]"
              }`}
            >
              Blonding & Dimensional Color
            </button>
            <button
              type="button"
              onClick={() => setActiveCategoryFilter("treatments")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeCategoryFilter === "treatments"
                  ? "bg-[#242424] text-white shadow-sm"
                  : "bg-white text-[#555550] hover:text-[#242424] border border-[#D8CFC3]"
              }`}
            >
              Hair Health Treatments
            </button>
          </div>
        </div>
      </section>

      {/* Main Service Categories Listing */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-8 scroll-mt-36" id={category.id}>
              
              {/* Category Header */}
              <div className="border-b border-[#D8CFC3] pb-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777A63] mb-2">
                  {category.id === "cuts-curls" && <Scissors className="w-4 h-4" />}
                  {category.id === "blonding-color" && <Sun className="w-4 h-4" />}
                  {category.id === "treatments" && <Droplets className="w-4 h-4" />}
                  <span>{category.subtitle}</span>
                </div>
                <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-[#242424] tracking-tight">
                  {category.title}
                </h2>
                <p className="text-sm sm:text-base text-[#555550] font-light max-w-3xl mt-2 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service) => {
                  const smsLink = buildSmsLink(service.name);

                  return (
                    <div
                      key={service.id}
                      className="bg-white rounded-2xl p-6 sm:p-8 border border-[#D8CFC3] shadow-sm flex flex-col justify-between hover:border-[#777A63] transition-all duration-200"
                    >
                      <div className="space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-serif-display text-2xl font-normal text-[#242424] leading-snug">
                            {service.name}
                          </h3>
                        </div>

                        <p className="text-sm text-[#555550] leading-relaxed">
                          {service.description}
                        </p>

                        {/* What's Included */}
                        <div className="pt-2">
                          <h4 className="text-xs uppercase font-semibold tracking-wider text-[#242424] mb-2">
                            Session Highlights:
                          </h4>
                          <ul className="space-y-1.5">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-[#555550]">
                                <Check className="w-3.5 h-3.5 text-[#777A63] shrink-0 mt-0.5" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Pricing & Service Inquiry Action */}
                      <div className="pt-6 mt-6 border-t border-[#D8CFC3]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[#555550] block font-medium">
                            Investment
                          </span>
                          <span className="text-sm font-semibold text-[#242424]">
                            {service.pricingLabel}
                          </span>
                        </div>

                        <a
                          href={smsLink}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#242424] hover:bg-[#777A63] rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#777A63]"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#D8CFC3]" />
                          <span>Inquire via SMS</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* Mountain Hair Health Insight Box */}
      <section className="py-12 bg-white border-y border-[#D8CFC3]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#F7F5F0] border border-[#D8CFC3] p-8 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777A63]">
                  <Droplets className="w-4 h-4" />
                  <span>The High-Altitude Difference</span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-normal text-[#242424]">
                  Why Hair Care in Poncha Springs Demands Specialized Chemistry
                </h3>
                <p className="text-sm text-[#555550] leading-relaxed font-light">
                  At 7,465 feet elevation, ambient humidity frequently dips below 15% and ultraviolet radiation is significantly stronger than at sea level. Without proper cuticle hydration and bond reinforcement, color fades faster and hair loses elasticity. Matt tailors all color formulas and conditioner treatments specifically to fortify strands against mountain weather.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <a
                  href={buildSmsLink("Hair Health Consultation", "I would like to discuss high-altitude hair repair")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#242424] hover:bg-[#777A63] rounded-xl transition-colors shadow-sm text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#D8CFC3]" />
                  <span>Ask Matt About Treatment Regimens</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.urls.phoneCall}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#242424] bg-white border border-[#D8CFC3] rounded-xl hover:bg-[#EBE5DC] transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#777A63]" />
                  <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Pricing Transparency Explainer */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-10 h-10 rounded-full bg-white border border-[#D8CFC3] flex items-center justify-center mx-auto text-[#777A63]">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-serif-display text-2xl font-normal text-[#242424]">
            Why &ldquo;Contact Matt for Pricing&rdquo;?
          </h3>
          <p className="text-sm text-[#555550] leading-relaxed font-light">
            As a boutique private studio, The Hair Company does not use rigid one-size-fits-all tiered menus. A balayage on fine shoulder-length hair requires vastly different time, product, and technique than dimensional foil work on thick, coarse, long curls. Matt communicates openly and provides exact pricing estimates before starting your appointment.
          </p>
        </div>
      </section>

      <AppointmentCTA
        title="Ready to Discuss Your Hair Goals?"
        subtitle="Text Matt Nance to inquire about openings, discuss your current hair history, and get an honest pricing estimate."
      />
    </>
  );
}
