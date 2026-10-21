import { Link } from "react-router-dom";
import { Phone, MessageSquare, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { BUSINESS_CONFIG } from "@/src/config/business";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242424] text-[#F7F5F0] border-t border-[#3D4033] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Stylist column */}
          <div className="space-y-4">
            <h3 className="font-serif-display text-2xl font-normal tracking-tight text-white">
              {BUSINESS_CONFIG.name}
            </h3>
            <p className="text-sm text-[#D8CFC3] leading-relaxed">
              Boutique hair salon led by master stylist {BUSINESS_CONFIG.owner}, bringing {BUSINESS_CONFIG.experienceYears} years of technical precision, curly hair expertise, and dimensional color to Poncha Springs.
            </p>
            <div className="pt-2 text-xs text-[#D8CFC3]/80">
              <span className="block font-medium text-white">Owner & Stylist</span>
              <span>{BUSINESS_CONFIG.owner} · {BUSINESS_CONFIG.experienceYears} Years Craft</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-[#D8CFC3]">
              Studio Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#D8CFC3] hover:text-white transition-colors">
                  Home & Overview
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#D8CFC3] hover:text-white transition-colors">
                  Services & Techniques
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#D8CFC3] hover:text-white transition-colors">
                  Inspiration Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#D8CFC3] hover:text-white transition-colors">
                  Hours & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-[#D8CFC3] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#777A63]" />
              <span>Salon Hours</span>
            </h4>
            <div className="space-y-2 text-sm text-[#D8CFC3]">
              <div className="flex justify-between items-baseline border-b border-[#3D4033] pb-1.5">
                <span className="text-white">Tuesday – Saturday</span>
                <span className="font-mono text-xs">10:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between items-baseline border-b border-[#3D4033] pb-1.5">
                <span className="text-[#D8CFC3]/70">Sunday & Monday</span>
                <span className="text-xs uppercase tracking-wide text-[#D8CFC3]/60">Closed</span>
              </div>
              <p className="text-xs text-[#D8CFC3]/70 pt-1 leading-normal">
                By appointment. Early booking via SMS recommended.
              </p>
            </div>
          </div>

          {/* Contact & Directions */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-[#D8CFC3] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#777A63]" />
              <span>Poncha Springs Studio</span>
            </h4>
            <address className="not-italic text-sm text-[#D8CFC3] space-y-1.5 leading-relaxed">
              <p>{BUSINESS_CONFIG.address.street}</p>
              <p>{BUSINESS_CONFIG.address.city}, {BUSINESS_CONFIG.address.state} {BUSINESS_CONFIG.address.zip}</p>
            </address>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href={BUSINESS_CONFIG.urls.smsBooking}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-[#777A63] hover:bg-[#888c73] px-3.5 py-2 rounded-md transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Text Matt: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.urls.phoneCall}
                className="inline-flex items-center gap-2 text-xs text-[#D8CFC3] hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_CONFIG.urls.googleMapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D8CFC3] hover:text-white transition-colors"
              >
                <span>Get Google Maps Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Trust Note */}
        <div className="mt-12 pt-8 border-t border-[#3D4033] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#D8CFC3]/70">
          <p>
            © {currentYear} {BUSINESS_CONFIG.name}. All rights reserved. Poncha Springs, Colorado.
          </p>
          <p className="max-w-xl text-[11px] leading-relaxed">
            Photography is presented as inspirational styling reference and does not represent verified salon work. All appointments and pricing are confirmed directly with Matt Nance.
          </p>
        </div>
      </div>
    </footer>
  );
}
