import { Phone, MessageSquare, MapPin, Clock, ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";
import { PageSEO } from "@/src/components/PageSEO";
import { SmsInquiryForm } from "@/src/components/SmsInquiryForm";
import { BUSINESS_CONFIG } from "@/src/config/business";

export function ContactPage() {
  return (
    <>
      <PageSEO
        title="Contact & Booking – The Hair Company Poncha Springs, CO"
        description="Book your hair appointment with Matt Nance at The Hair Company in Poncha Springs, Colorado. Call or text (719) 221-3570, or get Google Maps directions."
      />

      {/* Header Banner */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-18 bg-white border-b border-[#D8CFC3]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777A63]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Studio Location & Booking</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-[#242424] tracking-tight">
              Get in Touch with Matt
            </h1>

            <p className="text-base sm:text-lg text-[#555550] font-light leading-relaxed">
              Appointments at The Hair Company are scheduled directly via text message or phone call with stylist Matt Nance. Reach out to ask questions, request an opening, or consult on your next cut or color.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Actions & Interactive Form */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Action Cards & Details */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Primary Direct Actions */}
              <div className="bg-white rounded-2xl border border-[#D8CFC3] p-6 sm:p-8 shadow-sm space-y-6">
                <h2 className="font-serif-display text-2xl font-normal text-[#242424]">
                  Direct Contact Methods
                </h2>

                <div className="space-y-4">
                  {/* SMS Button */}
                  <a
                    href={BUSINESS_CONFIG.urls.smsBooking}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#242424] text-white hover:bg-[#777A63] transition-colors shadow-sm group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#D8CFC3]" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#D8CFC3] block font-semibold">
                        Fastest Response
                      </span>
                      <span className="text-sm font-medium">
                        Text Matt: {BUSINESS_CONFIG.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Call Button */}
                  <a
                    href={BUSINESS_CONFIG.urls.phoneCall}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F5F0] border border-[#D8CFC3] text-[#242424] hover:bg-[#EBE5DC] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#D8CFC3] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#777A63]" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#555550] block font-semibold">
                        Direct Phone Call
                      </span>
                      <span className="text-sm font-medium">
                        {BUSINESS_CONFIG.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  {/* Google Maps Directions Button */}
                  <a
                    href={BUSINESS_CONFIG.urls.googleMapsDirections}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-[#F7F5F0] border border-[#D8CFC3] text-[#242424] hover:bg-[#EBE5DC] transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#D8CFC3] flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-[#777A63]" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#555550] block font-semibold">
                          Turn-by-Turn Navigation
                        </span>
                        <span className="text-sm font-medium">
                          Open in Google Maps
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#777A63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl border border-[#D8CFC3] p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777A63]">
                  <Clock className="w-4 h-4" />
                  <span>Salon Hours</span>
                </div>

                <h3 className="font-serif-display text-2xl font-normal text-[#242424]">
                  Weekly Availability
                </h3>

                <div className="space-y-3 pt-1 text-sm">
                  <div className="flex justify-between items-baseline py-2 border-b border-[#D8CFC3]/60">
                    <span className="font-medium text-[#242424]">Tuesday – Saturday</span>
                    <span className="font-mono text-xs text-[#242424]">10:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-baseline py-2 border-b border-[#D8CFC3]/60">
                    <span className="text-[#555550]">Sunday & Monday</span>
                    <span className="text-xs uppercase tracking-wider text-[#555550]">Closed</span>
                  </div>
                </div>

                <p className="text-xs text-[#555550] leading-relaxed pt-2">
                  Please plan appointments ahead of time. Early morning and weekend afternoon slots tend to book quickly.
                </p>
              </div>

              {/* Location & Parking Details */}
              <div className="bg-white rounded-2xl border border-[#D8CFC3] p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#777A63]">
                  <MapPin className="w-4 h-4" />
                  <span>Studio Location</span>
                </div>

                <h3 className="font-serif-display text-2xl font-normal text-[#242424]">
                  6360 1/2 US Hwy 285
                </h3>

                <p className="text-sm text-[#555550] leading-relaxed">
                  Located along US Highway 285 in Poncha Springs, just 10 minutes west of downtown Salida at the crossroads of Highway 50 and 285.
                </p>

                <div className="space-y-2 text-xs text-[#555550] pt-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#777A63] shrink-0 mt-0.5" />
                    <span>Free on-site parking directly outside the salon</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#777A63] shrink-0 mt-0.5" />
                    <span>Private, quiet studio environment</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive SMS Builder & FAQ */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Interactive SMS Inquiry Form */}
              <SmsInquiryForm />

              {/* What to Expect Card */}
              <div className="bg-white rounded-2xl border border-[#D8CFC3] p-6 sm:p-8 shadow-sm space-y-4">
                <h3 className="font-serif-display text-xl font-normal text-[#242424]">
                  What to Expect When You Reach Out
                </h3>
                
                <div className="space-y-3 text-xs sm:text-sm text-[#555550] leading-relaxed">
                  <p>
                    <strong>Personal Communication:</strong> When you send an SMS or call, you are connecting directly with Matt Nance, not a remote answering service or automated bot.
                  </p>
                  <p>
                    <strong>Pricing Clarity:</strong> In your message, mention your current hair length, density, or send a quick photo of your hair and inspiration. Matt will reply with available time slots and an honest pricing expectation.
                  </p>
                  <p>
                    <strong>Arriving for Your Appointment:</strong> Arrive with dry, naturally styled hair if receiving a curl shaping consultation so Matt can assess your organic curl pattern in its true state.
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8CFC3]/60 flex items-start gap-2 text-xs text-[#777A63]">
                  <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    No automated credit card deposits or third-party bookings. All arrangements confirmed personally with Matt.
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Full Width Google Maps Visual Banner */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#D8CFC3] overflow-hidden bg-[#242424] text-white p-8 sm:p-12 relative shadow-lg">
            
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#D8CFC3] font-semibold block">
                Upper Arkansas River Valley
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-normal">
                Visit Us in Poncha Springs, Colorado
              </h2>
              <p className="text-sm text-[#D8CFC3] leading-relaxed">
                6360 1/2 US Hwy 285, Poncha Springs, CO 81242. Minutes from Salida, Mount Princeton, and Monarch Pass.
              </p>
              
              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.urls.googleMapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#242424] bg-[#F7F5F0] hover:bg-[#D8CFC3] rounded-xl transition-colors shadow-md"
                >
                  <MapPin className="w-4 h-4 text-[#777A63]" />
                  <span>Get Driving Directions to The Hair Company</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Subtle stylized background map contour overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden lg:block">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 350 C150 200, 250 250, 350 100" stroke="white" strokeWidth="2" strokeDasharray="6 6" />
                <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="1" />
                <circle cx="200" cy="200" r="160" stroke="white" strokeWidth="1" />
                <circle cx="200" cy="200" r="6" fill="#777A63" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
