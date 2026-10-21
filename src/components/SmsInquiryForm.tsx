import { useState } from "react";
import { MessageSquare, Copy, Check, Sparkles } from "lucide-react";
import { BUSINESS_CONFIG } from "@/src/config/business";
import { ALL_SERVICES } from "@/src/data/services";

export function SmsInquiryForm() {
  const [selectedService, setSelectedService] = useState<string>("Curly Hair Shaping & Texture Cut");
  const [clientName, setClientName] = useState<string>("");
  const [preferredDay, setPreferredDay] = useState<string>("Tuesday");
  const [preferredTime, setPreferredTime] = useState<string>("Morning (10 AM - 1 PM)");
  const [hairNotes, setHairNotes] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // Build crafted message
  const generateMessageBody = () => {
    let msg = `Hi Matt! I'd like to book an appointment at The Hair Company.`;
    if (clientName.trim()) {
      msg = `Hi Matt! My name is ${clientName.trim()} and I'd like to book an appointment at The Hair Company.`;
    }
    msg += `\n\nService: ${selectedService}`;
    msg += `\nPreferred Day: ${preferredDay}`;
    msg += `\nPreferred Time: ${preferredTime}`;
    if (hairNotes.trim()) {
      msg += `\nNotes: ${hairNotes.trim()}`;
    }
    return msg;
  };

  const messageBody = generateMessageBody();
  const smsUrl = `sms:${BUSINESS_CONFIG.phoneRaw}?body=${encodeURIComponent(messageBody)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-[#D8CFC3] p-6 sm:p-8 shadow-sm">
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#777A63]">
          <Sparkles className="w-4 h-4 text-[#777A63]" />
          <span>Interactive SMS Booking Composer</span>
        </div>
        <h3 className="font-serif-display text-2xl font-normal text-[#242424]">
          Prepare Your Appointment Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#555550] leading-relaxed">
          Select your service and timing preferences below to draft a direct text message to Matt Nance. No backend accounts or passwords required.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = smsUrl;
        }}
        className="space-y-5"
      >
        {/* Your Name */}
        <div>
          <label htmlFor="client-name" className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
            Your Name (Optional)
          </label>
          <input
            id="client-name"
            type="text"
            placeholder="e.g. Sarah Jenkins"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0] border border-[#D8CFC3] rounded-lg text-[#242424] placeholder-[#555550]/50 focus:outline-none focus:ring-2 focus:ring-[#777A63] focus:border-transparent transition-all"
          />
        </div>

        {/* Service selector */}
        <div>
          <label htmlFor="service-select" className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
            Service of Interest
          </label>
          <select
            id="service-select"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0] border border-[#D8CFC3] rounded-lg text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#777A63] focus:border-transparent transition-all cursor-pointer"
          >
            {ALL_SERVICES.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name} ({s.category})
              </option>
            ))}
          </select>
        </div>

        {/* Day & Time preferences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="day-pref" className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
              Preferred Day (Tue–Sat)
            </label>
            <select
              id="day-pref"
              value={preferredDay}
              onChange={(e) => setPreferredDay(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0] border border-[#D8CFC3] rounded-lg text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#777A63] focus:border-transparent transition-all cursor-pointer"
            >
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Flexible / Next Available">Flexible / Next Available</option>
            </select>
          </div>

          <div>
            <label htmlFor="time-pref" className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
              Preferred Time Window
            </label>
            <select
              id="time-pref"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0] border border-[#D8CFC3] rounded-lg text-[#242424] focus:outline-none focus:ring-2 focus:ring-[#777A63] focus:border-transparent transition-all cursor-pointer"
            >
              <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
              <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
              <option value="Late Afternoon (4 PM - 6 PM)">Late Afternoon (4 PM - 6 PM)</option>
              <option value="Any Available Window">Any Available Window</option>
            </select>
          </div>
        </div>

        {/* Hair notes */}
        <div>
          <label htmlFor="hair-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#242424] mb-1.5">
            Hair History / Questions (Optional)
          </label>
          <textarea
            id="hair-notes"
            rows={2}
            placeholder="e.g., Natural 3A curls, dry from mountain air, looking to refresh shape..."
            value={hairNotes}
            onChange={(e) => setHairNotes(e.target.value)}
            className="w-full px-4 py-2.5 text-sm bg-[#F7F5F0] border border-[#D8CFC3] rounded-lg text-[#242424] placeholder-[#555550]/50 focus:outline-none focus:ring-2 focus:ring-[#777A63] focus:border-transparent transition-all"
          />
        </div>

        {/* Live Message Preview Box */}
        <div className="bg-[#F7F5F0] border border-[#D8CFC3] rounded-xl p-4">
          <div className="flex items-center justify-between text-xs font-medium text-[#777A63] mb-2">
            <span>Prepared SMS Draft</span>
            <span className="font-mono text-[11px] text-[#242424]/70">To: {BUSINESS_CONFIG.phoneDisplay}</span>
          </div>
          <div className="text-xs sm:text-sm font-sans whitespace-pre-line text-[#242424] bg-white p-3 rounded-lg border border-[#D8CFC3]/60 shadow-inner">
            {messageBody}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={smsUrl}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#242424] hover:bg-[#777A63] rounded-xl shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#777A63]"
          >
            <MessageSquare className="w-4 h-4 text-[#D8CFC3]" />
            <span>Open in Messages (SMS)</span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#242424] bg-[#F7F5F0] hover:bg-[#D8CFC3]/60 border border-[#D8CFC3] rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#777A63]"
            aria-label="Copy drafted message to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#777A63]" />
                <span>Copy Draft</span>
              </>
            )}
          </button>
        </div>

        <p className="text-[11px] text-[#555550]/80 text-center leading-normal">
          This opens your device&apos;s standard SMS messaging app. No automated bot; messages go directly to Matt Nance&apos;s phone.
        </p>
      </form>
    </div>
  );
}
