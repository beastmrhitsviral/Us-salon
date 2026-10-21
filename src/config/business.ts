/**
 * Central business configuration for The Hair Company
 * Poncha Springs, Colorado
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  owner: string;
  experienceYears: number;
  phoneDisplay: string;
  phoneRaw: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    formatted: string;
    notes: string;
  };
  hours: {
    days: string;
    time: string;
    isOpen: boolean;
  }[];
  hoursSummary: string;
  closedDays: string;
  urls: {
    smsBooking: string;
    phoneCall: string;
    googleMapsDirections: string;
  };
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "The Hair Company",
  tagline: "Boutique Hair Studio in Poncha Springs",
  owner: "Matt Nance",
  experienceYears: 15,
  phoneDisplay: "(719) 221-3570",
  phoneRaw: "+17192213570",
  address: {
    street: "6360 1/2 US Hwy 285",
    city: "Poncha Springs",
    state: "CO",
    zip: "81242",
    formatted: "6360 1/2 US Hwy 285, Poncha Springs, CO 81242",
    notes: "Located along Highway 285 in Poncha Springs, minutes from Salida in Chaffee County."
  },
  hours: [
    { days: "Tuesday – Saturday", time: "10:00 AM – 6:00 PM", isOpen: true },
    { days: "Sunday & Monday", time: "Closed", isOpen: false },
  ],
  hoursSummary: "Tuesday–Saturday, 10:00 AM–6:00 PM",
  closedDays: "Sunday and Monday",
  urls: {
    smsBooking: "sms:+17192213570?body=Hi%20Matt!%20I'd%20like%20to%20book%20an%20appointment%20at%20The%20Hair%20Company...",
    phoneCall: "tel:+17192213570",
    googleMapsDirections: "https://www.google.com/maps/dir/?api=1&destination=6360%201%2F2%20US%20Hwy%20285%2C%20Poncha%20Springs%2C%20CO%2081242"
  }
};

/**
 * Builds a tailored SMS booking link for a specific service or consultation
 */
export function buildSmsLink(serviceName?: string, additionalNotes?: string): string {
  const phone = BUSINESS_CONFIG.phoneRaw;
  let message = "Hi Matt! I'd like to book an appointment at The Hair Company";
  
  if (serviceName) {
    message += ` for ${serviceName}`;
  }
  
  if (additionalNotes && additionalNotes.trim().length > 0) {
    message += `. Notes: ${additionalNotes.trim()}`;
  } else {
    message += "...";
  }

  return `sms:${phone}?body=${encodeURIComponent(message)}`;
}
