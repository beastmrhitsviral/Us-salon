import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageSquare, Phone, Menu, X, MapPin } from "lucide-react";
import { BUSINESS_CONFIG } from "@/src/config/business";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#D8CFC3]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand wordmark in display serif */}
          <Link
            to="/"
            className="flex flex-col whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#777A63]"
            aria-label="The Hair Company - Poncha Springs, CO"
          >
            <span className="font-serif-display text-2xl sm:text-3xl font-medium tracking-tight text-[#242424] group-hover:text-[#777A63] transition-colors">
              The Hair Company
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#777A63] font-medium -mt-1 hidden sm:block">
              Poncha Springs, Colorado
            </span>
          </Link>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#242424]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? "text-[#242424] font-semibold"
                      : "text-[#555550] hover:text-[#242424]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#777A63] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_CONFIG.urls.smsBooking}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#242424] hover:bg-[#777A63] rounded-lg shadow-sm transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#777A63] focus-visible:ring-offset-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Book via SMS</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS_CONFIG.urls.smsBooking}
              className="inline-flex items-center justify-center p-2 text-white bg-[#242424] rounded-lg"
              aria-label="Book via SMS"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#242424] hover:bg-[#D8CFC3]/30 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#777A63]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D8CFC3]/60 bg-[#F7F5F0] px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-base transition-colors ${
                    isActive
                      ? "bg-[#D8CFC3]/40 text-[#242424] font-semibold"
                      : "text-[#555550] hover:bg-[#D8CFC3]/20 hover:text-[#242424]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#777A63]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#D8CFC3]/40 space-y-2">
            <a
              href={BUSINESS_CONFIG.urls.smsBooking}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold tracking-wide text-white bg-[#242424] hover:bg-[#777A63] rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Book via SMS with Matt</span>
            </a>
            <a
              href={BUSINESS_CONFIG.urls.phoneCall}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-medium text-[#242424] bg-white border border-[#D8CFC3] rounded-lg hover:bg-[#D8CFC3]/20 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#777A63]" />
              <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-[#777A63] flex items-center gap-1.5 justify-center">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>6360 1/2 US Hwy 285, Poncha Springs, CO</span>
          </div>
        </div>
      )}
    </header>
  );
}
