export interface BpoServiceItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  workflowSteps: string[];
  operationalBenefits: string[];
  qualityAssurance: string;
}

export const BPO_SERVICES: BpoServiceItem[] = [
  {
    id: "back-office-ops",
    title: "Back-Office Operations Management",
    category: "Core Operations",
    summary: "Reliable, documented end-to-end administrative execution handling day-to-day corporate operations.",
    workflowSteps: [
      "Process documentation & standard operating procedure (SOP) signoff",
      "Workforce onboarding with multi-tier role permissions",
      "Batch task execution with automated queue tracking",
      "Daily throughput reporting & managerial milestone review"
    ],
    operationalBenefits: [
      "Lowers operational overhead by up to 45% compared to in-house teams",
      "Allows core management to focus on client acquisition and strategy",
      "Ensures business continuity with trained replacement benches"
    ],
    qualityAssurance: "Dual-tier supervisor review with random spot checks on 20% of daily completions."
  },
  {
    id: "data-entry-processing",
    title: "Data Entry & High-Speed Processing",
    category: "Data Integrity",
    summary: "Accurate digitization, batch formatting, and database populating from physical and digital sources.",
    workflowSteps: [
      "Secure source data ingestion via encrypted channels",
      "Standardized data cleaning and attribute mapping",
      "High-speed alphanumeric entry with dual-key verification",
      "Validation script execution and schema conformance check"
    ],
    operationalBenefits: [
      "Guaranteed 99.8% entry accuracy through double-entry protocols",
      "Eliminates internal backlogs in accounting, sales, and logistics",
      "Scales processing bandwidth during seasonal transaction surges"
    ],
    qualityAssurance: "Automated schema validation scripts paired with human verification sampling."
  },
  {
    id: "data-validation-qc",
    title: "Data Validation & Quality Checks",
    category: "Data Integrity",
    summary: "Systematic auditing of customer databases, product catalogs, and vendor registries for integrity.",
    workflowSteps: [
      "Algorithmic anomaly detection and deduplication scanning",
      "Cross-referencing with external public registries or client masters",
      "Manual phone/email verification of anomalous records",
      "Certified clean dataset delivery with detailed change logs"
    ],
    operationalBenefits: [
      "Prevents costly downstream fulfillment errors due to bad address data",
      "Protects marketing campaign deliverability by cleaning contact records",
      "Maintains clean CRM hygiene for sales team productivity"
    ],
    qualityAssurance: "100% verification against customer-defined business validation rules."
  },
  {
    id: "document-processing",
    title: "Document Processing & Digitization",
    category: "Documentation",
    summary: "Indexing, OCR verification, metadata tagging, and archiving of legal, financial, and operational files.",
    workflowSteps: [
      "Secure multi-page scanning or digital PDF ingestion",
      "Automated OCR extraction with human proofreading of low-confidence text",
      "Standardized metadata indexing (dates, reference numbers, parties)",
      "Secure storage upload into searchable client repository"
    ],
    operationalBenefits: [
      "Transforms unsearchable paper archives into instant digital records",
      "Reduces document retrieval time from hours to seconds",
      "Improves regulatory compliance with structured document retention"
    ],
    qualityAssurance: "Cryptographic hash generation for tamper-proof document version tracking."
  },
  {
    id: "customer-support",
    title: "Customer Support Services",
    category: "Customer Experience",
    summary: "Professional, polite, and responsive tier-1 and tier-2 customer assistance across multiple channels.",
    workflowSteps: [
      "Product & brand tone-of-voice training curriculum",
      "Inbound inquiry routing with skill-based agent matching",
      "Ticket triage, troubleshooting, and CRM updates",
      "First-contact resolution tracking and manager escalation"
    ],
    operationalBenefits: [
      "Extends support coverage across extended business hours",
      "Improves customer retention and repeat purchase satisfaction",
      "Provides structured customer feedback loops to product managers"
    ],
    qualityAssurance: "Call recording audits, weekly CSAT monitoring, and calibration sessions."
  },
  {
    id: "email-chat-support",
    title: "Email and Live Chat Support",
    category: "Customer Experience",
    summary: "Fast, empathetic written resolutions for pre-sales inquiries, order issues, and technical help.",
    workflowSteps: [
      "Omnichannel queue monitoring with priority SLA thresholds",
      "Structured macro responses tailored with personalized empathy",
      "Issue escalation to engineering or logistics teams when required",
      "Post-interaction closure confirmation with the customer"
    ],
    operationalBenefits: [
      "Average first-response time kept under 5 minutes for live chat",
      "Handles concurrent customer conversations efficiently",
      "Reduces call center volume by shifting queries to low-friction text"
    ],
    qualityAssurance: "Grammar, tone, and technical correctness graded on random ticket samples."
  },
  {
    id: "crm-management",
    title: "CRM Data Management & Enrichment",
    category: "Sales Enablement",
    summary: "Continuous maintenance, lead enrichment, pipeline hygiene, and deal stage tracking in client CRMs.",
    workflowSteps: [
      "Daily inbound lead deduplication and company domain enrichment",
      "Sales rep activity logging from emails, calls, and WhatsApp notes",
      "Stale pipeline review and contact re-verification",
      "Weekly CRM health scorecard delivery to sales directors"
    ],
    operationalBenefits: [
      "Sales representatives spend 100% of their time selling, not data entering",
      "Provides reliable pipeline forecasting metrics for leadership",
      "Maintains updated stakeholder contacts across enterprise accounts"
    ],
    qualityAssurance: "Automated field-completeness validation scorecards."
  },
  {
    id: "order-processing",
    title: "Order Processing & Administrative Support",
    category: "Fulfillment",
    summary: "End-to-end purchase order verification, invoice generation, inventory reservation, and dispatch tracking.",
    workflowSteps: [
      "Purchase order receipt and line-item price verification",
      "Inventory check against warehouse or ERP balance",
      "Sales order creation and tax invoice generation",
      "Logistics courier assignment and airway bill (AWB) generation"
    ],
    operationalBenefits: [
      "Accelerates same-day order fulfillment cycles",
      "Prevents invoicing discrepancies and credit note adjustments",
      "Provides seamless communication between sales and warehouse floors"
    ],
    qualityAssurance: "Four-eye check on order totals exceeding custom enterprise thresholds."
  },
  {
    id: "reporting-operational-support",
    title: "Business Reporting & Operational Support",
    category: "Analytics & Oversight",
    summary: "Scheduled collation of daily sales figures, inventory movements, attendance sheets, and KPI summaries.",
    workflowSteps: [
      "Raw data aggregation from ERP, POS, and CRM exports",
      "Automated formula reconciliation and variance highlighting",
      "Executive summary formatting with clean visual charts",
      "Timely daily/weekly email dispatch to leadership teams"
    ],
    operationalBenefits: [
      "Executives receive clean decision summaries before 9:00 AM daily",
      "Highlights budget and inventory variances before they escalate",
      "Saves senior managers from manual Excel manipulation"
    ],
    qualityAssurance: "Rigorous reconciliation cross-checks ensuring zero formula discrepancies."
  },
  {
    id: "customized-bpo",
    title: "Customized Outsourcing Solutions",
    category: "Bespoke Delivery",
    summary: "Flexible, dedicated offshore operational cells built around unique proprietary business workflows.",
    workflowSteps: [
      "Joint process mapping workshop and KPI benchmark definition",
      "Custom recruitment & hardware/security provisioning in Kakinada center",
      "Parallel run with shadow operations and knowledge transfer",
      "Independent SLA-governed production handover with continuous governance"
    ],
    operationalBenefits: [
      "Tailored exactly to proprietary legacy enterprise workflows",
      "Dedicated, trained workforce operating under client NDA and guidelines",
      "Elastic scaling up or down with 30-day notice adjustments"
    ],
    qualityAssurance: "Dedicated Operations Manager and weekly governance steering meetings."
  }
];
