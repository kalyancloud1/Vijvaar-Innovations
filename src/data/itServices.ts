export interface ItServiceItem {
  id: string;
  title: string;
  kicker: string;
  tagline: string;
  overview: string;
  deliverables: string[];
  techStack: string[];
  businessValue: string;
  engagementModels: string[];
}

export const IT_SERVICES: ItServiceItem[] = [
  {
    id: "it-consulting",
    title: "IT Consulting and Solutions",
    kicker: "Strategic Advisory",
    tagline: "Aligning technology investments with tangible commercial outcomes.",
    overview: "We evaluate existing technical debt, vendor dependencies, and operational bottlenecks to build pragmatically phased IT roadmaps. From selecting core architectures to optimizing software license portfolios, we ensure your IT budget delivers measurable ROI.",
    deliverables: [
      "Enterprise IT Architecture Audit & Gap Analysis",
      "Digital Roadmap & Vendor Evaluation Matrix",
      "IT Infrastructure Scalability & Cost Optimization",
      "Business Technology Governance & Standard Operating Protocols"
    ],
    techStack: ["Enterprise Arch", "TOGAF", "Cloud Economics", "Microservices", "REST/gRPC"],
    businessValue: "Eliminates redundant software spend, prevents costly architectural dead-ends, and accelerates project delivery timelines.",
    engagementModels: ["Fixed-Scope Strategic Audit", "Retainer Advisory", "Fractional CTO"]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    kicker: "Engineering Excellence",
    tagline: "Purpose-built web applications and enterprise systems that scale smoothly.",
    overview: "When off-the-shelf software falls short, we engineer tailor-made web platforms, administrative portals, and robust API layers. Built using modern TypeScript, Python, and resilient database patterns for zero-downtime reliability.",
    deliverables: [
      "Custom Business Management & Operations Portals",
      "Full-Stack Web Application Engineering (React, Node, Python)",
      "High-Throughput RESTful & GraphQL API Development",
      "Legacy Code Refactoring & System Modernization",
      "Long-Term Application SLA Maintenance & Upgrades"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python / Django", "PostgreSQL", "Docker"],
    businessValue: "Gives your business a proprietary technological advantage tailored exactly to your unique customer journey.",
    engagementModels: ["Milestone-Based Delivery", "Dedicated Engineering Team", "Managed Maintenance"]
  },
  {
    id: "cloud-services",
    title: "Cloud Services & Infrastructure",
    kicker: "Resilient Operations",
    tagline: "Secure, cost-controlled cloud architectures engineered for high availability.",
    overview: "We architect, migrate, and maintain cloud environments across leading hyperscalers (GCP, AWS, Azure). We emphasize cost governance, automated container deployments, and disaster recovery so your services stay fast and available around the clock.",
    deliverables: [
      "Cloud Migration Planning & Zero-Downtime Data Transfer",
      "Containerized Cloud Application Deployments (Docker, Kubernetes)",
      "Automated Infrastructure Provisioning (Terraform / CI/CD Pipelines)",
      "Cost Governance, FinOps, & Resource Right-Sizing",
      "Multi-Region Backup & Automated Disaster Recovery Playbooks"
    ],
    techStack: ["Google Cloud", "AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
    businessValue: "Guarantees 99.9%+ application uptime while curbing unexpected cloud hosting bills through automated scaling rules.",
    engagementModels: ["Migration Project", "Cloud Infrastructure Audit", "24/7 Managed Cloud Ops"]
  },
  {
    id: "automation-solutions",
    title: "Automation Solutions",
    kicker: "Intelligent Workflows",
    tagline: "Freeing your staff from manual drudgery with intelligent business automations.",
    overview: "We eliminate repetitive manual keystrokes across your organization. By combining API orchestrations, automated document extractors, and rule-based workflow engines, your business operates faster with fewer human errors.",
    deliverables: [
      "End-to-End Business Workflow Orchestration",
      "Repetitive Data Entry & Cross-System Synchronization",
      "Automated Document Ingestion & Invoice Data Extraction",
      "API Integrations across ERPs, CRMs, and Payment Gateways",
      "Intelligent Decision Rules & Automated Notification Triggers"
    ],
    techStack: ["Node.js Orchestrator", "Python Automation", "REST Webhooks", "OAuth 2.0", "Redis Queue"],
    businessValue: "Cuts processing turnaround time from days to minutes while virtually eliminating human clerical mistakes.",
    engagementModels: ["Workflow Assessment & Build", "Modular Automation Sprints", "Continuous Pipeline Optimization"]
  },
  {
    id: "cybersecurity-compliance",
    title: "Cybersecurity and Compliance Support",
    kicker: "Defense in Depth",
    tagline: "Practical, rigorous safeguards to protect sensitive business assets and customer data.",
    overview: "Security cannot be an afterthought. We implement multi-layered defenses, conduct thorough vulnerability reviews, configure strict least-privilege access controls, and guide teams on adherence to DPDP Act principles and enterprise security standards.",
    deliverables: [
      "Application Vulnerability Assessments & Code Reviews",
      "Role-Based Access Control (RBAC) & Identity Audits",
      "Secure Software Development Lifecycle (SSDLC) Implementation",
      "Data Protection & Privacy Policy Alignment (DPDP Act guidance)",
      "Incident Response Playbooks & Employee Security Best Practices"
    ],
    techStack: ["OWASP Standards", "TLS 1.3", "JWT / RBAC", "Vulnerability Scanners", "Audit Trail Engines"],
    businessValue: "Protects enterprise reputation, prevents costly breaches, and builds institutional trust with corporate clients.",
    engagementModels: ["Comprehensive Security Audit", "Quarterly Vulnerability Review", "Compliance Readiness"]
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    kicker: "Operational Evolution",
    tagline: "Modernizing paper and spreadsheet dependencies into agile digital operations.",
    overview: "True digital transformation isn't just buying new tools; it's redesigning how your organization delivers value. We guide traditional businesses through phased process digitization, team upskilling, and unified data architectures.",
    deliverables: [
      "Operational Process Digitization & Paperless Workflows",
      "Legacy Database & Spreadsheet Normalization",
      "Customer Self-Service Digital Experience Portals",
      "Centralized Data Analytics for Executive Decision-Making",
      "Change Management & Internal Staff Onboarding Support"
    ],
    techStack: ["Modern Web UX", "PostgreSQL", "Cloud APIs", "Analytics Engines", "Responsive Mobile"],
    businessValue: "Unlocks company agility, shortens turnaround times, and positions traditional businesses to compete effectively in digital markets.",
    engagementModels: ["Turnkey Transformation Roadmap", "Phased Departmental Rollout", "Advisory & Implementation"]
  }
];
