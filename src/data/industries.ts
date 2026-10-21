export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  challenges: string[];
  solutionsDelivered: string[];
  techAndBpoSynergy: string;
  regulatoryScopeNotice: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "bfsi",
    name: "Banking & Financial Services",
    tagline: "Secure digital workflows, reconciliation automation, and strict data confidentiality.",
    challenges: [
      "High volume of daily transactional reconciliations and loan document verifications",
      "Stringent statutory reporting and audit trail requirements",
      "Pressure to deliver instantaneous customer self-service"
    ],
    solutionsDelivered: [
      "Automated bank ledger and merchant statement reconciliation engines",
      "Secure digital KYC document ingestion and OCR extraction pipelines",
      "Back-office loan document indexing and customer verification support"
    ],
    techAndBpoSynergy: "Automated scripts handle 80% of routine ledger parsing, while trained BPO analysts investigate complex variance exceptions under strict non-disclosure.",
    regulatoryScopeNotice: "Services are operational and technical support only; banking license activities and credit underwriting decisions remain strictly with authorized financial institutions."
  },
  {
    id: "insurance",
    name: "Insurance",
    tagline: "Streamlining policy administration, claim document triaging, and customer renewals.",
    challenges: [
      "Massive paperwork backlogs for claim submissions and medical invoices",
      "High customer attrition during annual policy renewal periods",
      "Complex cross-referencing between policy terms and submitted receipts"
    ],
    solutionsDelivered: [
      "Digital policyholder self-service portal for renewal payments and endorsements",
      "First Notice of Loss (FNOL) intake via omnichannel chat and email support",
      "Back-office claim document indexing, categorization, and pre-assessment checks"
    ],
    techAndBpoSynergy: "SaaS intake forms capture verified incident metadata, feeding into a structured BPO queue where documents are cross-checked before adjuster review.",
    regulatoryScopeNotice: "Insurance claim adjudication and binding policy underwriting are executed exclusively by the licensed insurer or accredited surveyors."
  },
  {
    id: "retail-ecommerce",
    name: "Retail & E-Commerce",
    tagline: "Omnichannel inventory sync, high-speed order processing, and customer care.",
    challenges: [
      "Managing stock synchronization across web stores, marketplaces, and physical retail",
      "High volume of 'Where is my order?' (WISMO) and return inquiries",
      "Continuous product catalog updates and price adjustments"
    ],
    solutionsDelivered: [
      "Multi-channel inventory and order management integration middleware",
      "24/7 customer chat and email support handling order status and return requests",
      "Product catalog data entry, image tagging, and description formatting"
    ],
    techAndBpoSynergy: "Automated webhook sync ensures stock levels update in real time across channels, while human support teams handle exceptions and courier escalations.",
    regulatoryScopeNotice: "Adheres to local consumer protection guidelines and e-commerce marketplace operational standards."
  },
  {
    id: "healthcare-admin",
    name: "Healthcare Administration",
    tagline: "Digitizing patient records, appointment scheduling, and non-clinical desk operations.",
    challenges: [
      "Disjointed paper charts and slow insurance pre-authorization workflows",
      "Front-desk phone congestion during peak morning booking hours",
      "Maintaining strict patient confidentiality and DPDP compliance"
    ],
    solutionsDelivered: [
      "Web appointment booking portal integrated with clinic calendars",
      "Digital patient record indexing and electronic document management",
      "Outbound reminder calls and SMS notifications to reduce patient no-shows"
    ],
    techAndBpoSynergy: "Automated reminders minimize clinic schedule gaps, backed by trained administrative operators managing rescheduling and patient queries.",
    regulatoryScopeNotice: "Services strictly cover administrative scheduling and document digitization. VijVaar does not provide medical advice, diagnosis, or clinical care."
  },
  {
    id: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    tagline: "Real-time dispatch tracking, airway bill processing, and freight coordination.",
    challenges: [
      "Manual coordination between drivers, dispatchers, customs, and consignees",
      "Delays in proof-of-delivery (POD) document processing and customer invoicing",
      "Exception management during transit delays or address inaccuracies"
    ],
    solutionsDelivered: [
      "Cloud shipment tracking dashboard with carrier webhook integrations",
      "Digitization and indexing of physical Proof of Delivery (POD) slips",
      "Order processing, invoice generation, and customer dispatch notification"
    ],
    techAndBpoSynergy: "Real-time API alerts notify customers of delivery milestones while BPO support staff proactively verify ambiguous delivery addresses.",
    regulatoryScopeNotice: "Freight transport and customs clearing are performed by authorized logistics carriers and licensed customs brokers."
  },
  {
    id: "education",
    name: "Education & Academies",
    tagline: "Student lifecycle management, admission inquiry routing, and fee administration.",
    challenges: [
      "Managing high influxes of student admission inquiries during intake cycles",
      "Tracking fee collection milestones and issuing receipts across batches",
      "Disjointed parent communications and attendance notifications"
    ],
    solutionsDelivered: [
      "Student admission CRM and automated lead qualification pipeline",
      "Online fee collection and automated receipt generation portal",
      "Multi-channel helpdesk answering parent inquiries on curriculum and schedules"
    ],
    techAndBpoSynergy: "Admissions CRM routes prospective parent leads instantly to counselors, while BPO callers assist with orientation verification and document collection.",
    regulatoryScopeNotice: "Accreditation, academic curriculum delivery, and certifications remain the sole responsibility of the educational institution."
  },
  {
    id: "professional-services",
    name: "Professional Services",
    tagline: "Practice management software, client document portals, and billable time tracking.",
    challenges: [
      "Unbilled hours slipping through untracked email and phone advisory work",
      "Unsecure exchange of sensitive financial or legal client records via email",
      "Time spent on administrative billing rather than high-value consulting"
    ],
    solutionsDelivered: [
      "Custom client portal for encrypted document sharing and signoffs",
      "Timesheet and project milestone tracking application with invoice generation",
      "Administrative assistant support for calendar scheduling and document drafting"
    ],
    techAndBpoSynergy: "Centralized client portals ensure secure document delivery, while remote administrative staff handle meeting coordination and follow-up notes.",
    regulatoryScopeNotice: "Legal, statutory audit, and chartered accountancy opinions are executed directly by licensed professionals."
  },
  {
    id: "startups-smb",
    name: "Startups & Small Businesses",
    tagline: "Affordable full-stack software development, automation, and lean operational support.",
    challenges: [
      "Limited technical team to build minimum viable products (MVPs) quickly",
      "Tight budgets making full-time specialized hires cost-prohibitive",
      "Founders trapped in routine operational tasks rather than growth"
    ],
    solutionsDelivered: [
      "Rapid MVP development using modern React, TypeScript, and Python stacks",
      "Off-the-shelf business automation setup connecting email, CRM, and payments",
      "Flexible part-time back-office and customer support outsourcing"
    ],
    techAndBpoSynergy: "Agile software sprints launch products in weeks, while scalable BPO teams handle customer onboarding without adding fixed full-time payroll.",
    regulatoryScopeNotice: "Provides technological engineering and operational support tailored to stage-appropriate growth budgets."
  }
];
