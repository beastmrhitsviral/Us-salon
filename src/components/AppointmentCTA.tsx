import { MessageSquare, Phone, Calendar } from "lucide-react";
import { BUSINESS_CONFIG } from "@/src/config/business";

interface AppointmentCTAProps {
  title?: string;
  subtitle?: string;
}

export function AppointmentCTA({
  title = "Ready for Your Next Transformation?",
  subtitle = "Whether you are seeking custom curl shaping, seamless dimensional blonding, or a healthy precision haircut, Matt Nance brings 15 years of personalized craft to every guest."
}: AppointmentCTAProps) {
  return (
    <section className="my-16 sm:my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#242424] text-[#F7F5F0] overflow-hidden p-8 sm:p-12 lg:p-16 border border-[#3D4033] shadow-lg">
          
          {/* Subtle architectural gradient background accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#777A63]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#D8CFC3]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D8CFC3] mb-4">
              <Calendar className="w-3.5 h-3.5 text-[#777A63]" />
              <span>Poncha Springs, Colorado · By Appointment</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#D8CFC3] mb-8 leading-relaxed max-w-2xl font-light">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={BUSINESS_CONFIG.urls.smsBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#242424] bg-[#F7F5F0] hover:bg-[#D8CFC3] rounded-xl shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="w-4 h-4 text-[#777A63]" />
                <span>Book Appointment via SMS</span>
              </a>

              <a
                href={BUSINESS_CONFIG.urls.phoneCall}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white border border-[#D8CFC3]/30 hover:border-white hover:bg-white/5 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4 text-[#D8CFC3]" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#3D4033] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#D8CFC3]/80">
              <span>Owner & Stylist: {BUSINESS_CONFIG.owner}</span>
              <span aria-hidden="true">·</span>
              <span>15 Years Experience</span>
              <span aria-hidden="true">·</span>
              <span>{BUSINESS_CONFIG.hoursSummary}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
