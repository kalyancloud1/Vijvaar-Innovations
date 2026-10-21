export interface SaasProduct {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  keyFeatures: string[];
  businessBenefits: string[];
  intendedCustomers: string[];
  deploymentStatus: 'Production Ready' | 'Custom Enterprise Rollout' | 'Interactive Sandbox Demo';
  architectureHighlights: string[];
}

export const SAAS_SOLUTIONS: SaasProduct[] = [
  {
    id: "crm-suite",
    name: "Customer Relationship Management (CRM)",
    category: "Customer & Growth",
    summary: "Unified customer intelligence, multi-channel interaction history, and deal tracking pipeline.",
    description: "A centralized customer record platform designed for growing teams to manage contacts, track interactions across email and phone, maintain account histories, and optimize conversion journeys without bloated licensing costs.",
    keyFeatures: [
      "Contact & organization 360-degree timeline view",
      "Interactive kanban pipeline for sales stages",
      "Activity logging with automated follow-up reminders",
      "Role-based access permissions per department",
      "Customer segment tagging and custom field builder"
    ],
    businessBenefits: [
      "Eliminates lost leads and disjointed customer interactions",
      "Accelerates deal closing cycles by 35% on average",
      "Provides transparent visibility for executive leadership"
    ],
    intendedCustomers: [
      "B2B service providers and consulting firms",
      "Growing technology startups and sales teams",
      "Commercial distribution and trading agencies"
    ],
    deploymentStatus: "Production Ready",
    architectureHighlights: [
      "Multi-tenant PostgreSQL schema isolation",
      "End-to-end encrypted contact records",
      "REST & Webhook hooks for ERP connectivity"
    ]
  },
  {
    id: "bpm-engine",
    name: "Business Process Management (BPM)",
    category: "Operations & Governance",
    summary: "Digital process modeling, SOP enforcement, and stage-gate approval workflows.",
    description: "Standardize organizational procedures into traceable, digital workflows. Eliminate manual email chasers and verbal approvals with automated compliance checkpoints and auditable activity trails.",
    keyFeatures: [
      "Visual workflow builder with conditional logic branching",
      "Multi-level approval queues with role escalations",
      "Strict SLA tracking with automated overdue warnings",
      "Standard Operating Procedure (SOP) embedded documentation",
      "Exportable compliance audit trails with cryptographic stamps"
    ],
    businessBenefits: [
      "Reduces administrative bottlenecks by over 50%",
      "Enforces company governance without slowing down operations",
      "Simplifies internal and external regulatory compliance audits"
    ],
    intendedCustomers: [
      "Mid-market enterprises with multi-step signoffs",
      "Financial, insurance, and compliance-driven businesses",
      "Logistics operations requiring multi-party handoffs"
    ],
    deploymentStatus: "Custom Enterprise Rollout",
    architectureHighlights: [
      "State-machine execution engine",
      "High-throughput transactional queue",
      "Granular audit event logging"
    ]
  },
  {
    id: "workflow-automation",
    name: "Workflow and Task Automation",
    category: "Productivity",
    summary: "Rules-based task orchestration, trigger-based actions, and cross-tool synchronizers.",
    description: "Connect disjointed SaaS tools, cloud drives, communication channels, and internal databases to automatically sync records, trigger invoice generation, and dispatch notifications.",
    keyFeatures: [
      "Pre-built connectors for standard accounting & communication tools",
      "Event-driven trigger recipes (webhook, scheduled cron, manual)",
      "Automated payload transformation and deduplication",
      "Fail-safe execution logs with auto-retry mechanisms",
      "Team collaboration task boards with auto-assignment"
    ],
    businessBenefits: [
      "Saves up to 20 hours per employee monthly on manual copy-pasting",
      "Drastically reduces human data-entry errors",
      "Ensures real-time status updates across departments"
    ],
    intendedCustomers: [
      "Operations managers seeking to automate repetitive tasks",
      "Fast-scaling e-commerce businesses managing multi-channel orders",
      "Professional service agencies tracking billable project deliverables"
    ],
    deploymentStatus: "Production Ready",
    architectureHighlights: [
      "Asynchronous worker pool",
      "Configurable rate-limiting adapters",
      "Dead-letter queues for zero data loss"
    ]
  },
  {
    id: "sales-lead-mgmt",
    name: "Sales and Lead Management",
    category: "Customer & Growth",
    summary: "Inbound lead capture, algorithmic qualification scoring, and assignment routing.",
    description: "Capture prospect inquiries from web forms, digital campaigns, and inbound calls. Automatically score leads based on profile fit and assign them instantly to available sales consultants.",
    keyFeatures: [
      "Omni-source lead capture widgets and API endpoints",
      "Configurable lead scoring rubrics (demographic + engagement)",
      "Round-robin and geo-territory lead routing",
      "Quote and proposal creation with live view tracking",
      "Conversion analytics by source channel and sales agent"
    ],
    businessBenefits: [
      "Reduces lead response times from hours to under 3 minutes",
      "Focuses high-value sales reps on the most qualified prospects",
      "Provides clear ROI attribution across marketing channels"
    ],
    intendedCustomers: [
      "Real estate developers and channel partners",
      "SaaS and enterprise technology sales organizations",
      "Educational institutions and training academies"
    ],
    deploymentStatus: "Production Ready",
    architectureHighlights: [
      "Real-time WebSocket notifications for new high-priority leads",
      "Spam filtering and email verification hooks",
      "CSV & CRM bidirectional sync"
    ]
  },
  {
    id: "support-desk",
    name: "Customer Support Management",
    category: "Customer & Growth",
    summary: "Omnichannel ticketing, knowledge base engine, and customer satisfaction monitoring.",
    description: "Empower helpdesk and support agents with a single interface to resolve client inquiries across email, web forms, and chat. Includes integrated SLA timers and canned responses for fast resolution.",
    keyFeatures: [
      "Unified ticket inbox with thread history",
      "Internal customer knowledge base and self-service FAQ portal",
      "SLA priority matrix with automated manager escalation",
      "Customer satisfaction (CSAT) survey triggers post-resolution",
      "Agent performance analytics and response time tracking"
    ],
    businessBenefits: [
      "Maintains first-contact resolution rates above 80%",
      "Lowers repetitive support volume through indexed self-help",
      "Protects brand reputation with consistent SLA enforcement"
    ],
    intendedCustomers: [
      "Customer support teams managing hundreds of tickets weekly",
      "E-commerce stores handling shipping and refund inquiries",
      "IT service providers offering managed helpdesk contracts"
    ],
    deploymentStatus: "Interactive Sandbox Demo",
    architectureHighlights: [
      "Elastic search indexing for knowledge articles",
      "Multi-channel mail parser integration",
      "Real-time ticket concurrency locking"
    ]
  },
  {
    id: "reporting-analytics",
    name: "Reporting and Business Analytics",
    category: "Intelligence",
    summary: "Executive KPI dashboards, cohort retention analysis, and scheduled data reports.",
    description: "Transform raw database records and operational spreadsheets into actionable executive dashboards. Monitor revenue trends, cost distributions, staff productivity, and fulfillment metrics at a glance.",
    keyFeatures: [
      "Configurable drag-and-drop dashboard widgets",
      "Automated PDF & Excel report dispatch via email",
      "Drill-down capabilities from macro metrics to line-item transactions",
      "Custom metric formula builder with currency conversion",
      "Data export in CSV, JSON, and XLSX formats"
    ],
    businessBenefits: [
      "Eliminates guesswork with verified real-time performance data",
      "Reduces weekly manual reporting prep time from days to zero",
      "Empowers stakeholders to make data-backed growth decisions"
    ],
    intendedCustomers: [
      "C-level executives, finance heads, and business directors",
      "Operations teams managing distributed branch offices",
      "Investors requiring standardized monthly board metrics"
    ],
    deploymentStatus: "Production Ready",
    architectureHighlights: [
      "Read-replica database routing for zero-impact queries",
      "Pre-aggregated time-series rollups",
      "Strict data classification permissions"
    ]
  },
  {
    id: "employee-ops",
    name: "Employee and Operations Management",
    category: "Operations & Governance",
    summary: "Attendance tracking, asset allocation, performance appraisals, and roster shifts.",
    description: "Manage internal staff operations from onboarding to shifts, leave requests, digital asset assignments, and daily operational check-ins in one unified portal.",
    keyFeatures: [
      "Leave balance management with automated accrual calculations",
      "Company hardware & software license asset tracking",
      "Shift scheduling with swap requests and holiday calendars",
      "Structured quarterly performance appraisal check-ins",
      "Company announcements bulletin and policy acknowledgment"
    ],
    businessBenefits: [
      "Replaces messy spreadsheets with a secure employee single source",
      "Ensures transparent tracking of company equipment and software spend",
      "Provides HR with automated payroll-ready attendance summaries"
    ],
    intendedCustomers: [
      "Growing companies scaling from 15 to 500+ employees",
      "BPO operations and call centers running multi-shift rosters",
      "Field service businesses tracking staff allocations"
    ],
    deploymentStatus: "Custom Enterprise Rollout",
    architectureHighlights: [
      "Role-based access separating HR admin from staff self-service",
      "Secure document storage for employee records",
      "Mobile-friendly employee self-service portal"
    ]
  },
  {
    id: "industry-verticals",
    name: "Industry-Specific SaaS Applications",
    category: "Intelligence",
    summary: "Tailored micro-vertical solutions engineered for domain-specific compliance and workflows.",
    description: "Purpose-built business suites designed around the unique regulatory and operational requirements of specific sectors including healthcare clinics, educational institutes, and logistics hubs.",
    keyFeatures: [
      "Pre-configured industry workflows (e.g. patient records, dispatch manifests)",
      "Sector-specific regulatory compliance templates",
      "Customizable invoice and quotation formats adhering to GST norms",
      "Integration with domain hardware (barcode scanners, thermal printers)",
      "Dedicated multi-tenant database clusters"
    ],
    businessBenefits: [
      "Bypasses generic one-size-fits-all software limitations",
      "Shortens onboarding time with ready-to-use industry vocabulary",
      "Ensures adherence to local statutory reporting standards"
    ],
    intendedCustomers: [
      "Independent clinics, diagnostic centers, and healthcare providers",
      "Warehousing, freight forwarders, and fleet operators",
      "Regional educational academies and vocational institutions"
    ],
    deploymentStatus: "Interactive Sandbox Demo",
    architectureHighlights: [
      "Modular micro-service architecture",
      "Tenant-level database isolation options",
      "White-label branding support"
    ]
  }
];
