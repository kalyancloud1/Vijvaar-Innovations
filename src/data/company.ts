export interface CompanyContact {
  name: string;
  legalName: string;
  tagline: string;
  brandStatement: string;
  coreMessage: string;
  phone1: string;
  phone1Formatted: string;
  phone2: string;
  phone2Formatted: string;
  email: string;
  address: {
    line1: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    full: string;
  };
  website: string;
  mapsUrl: string;
  whatsappUrl: string;
}

export const COMPANY: CompanyContact = {
  name: "VijVaar Innovations",
  legalName: "VijVaar Innovations OPC Pvt Ltd",
  tagline: "Innovate | Automate | Elevate",
  brandStatement: "Technology for a Better Tomorrow",
  coreMessage: "Empowering Businesses with Intelligent Solutions",
  phone1: "+918341907677",
  phone1Formatted: "+91 8341907677",
  phone2: "+918341563696",
  phone2Formatted: "+91 8341563696",
  email: "kalyanwork23@gmail.com",
  address: {
    line1: "RGP-53, FF-4",
    city: "Kakinada",
    state: "Andhra Pradesh",
    postalCode: "533001",
    country: "India",
    full: "RGP-53, FF-4, Kakinada, Andhra Pradesh – 533001, India",
  },
  website: "www.vijvaarinnovations.com",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=RGP-53,+FF-4,+Kakinada,+Andhra+Pradesh+533001,+India",
  whatsappUrl: "https://wa.me/918341907677?text=Hello%20VijVaar%20Innovations%20team%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.",
};
