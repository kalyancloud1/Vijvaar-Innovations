export interface ProcessStep {
  stepNumber: string;
  title: string;
  summary: string;
  details: string[];
  clientTouchpoints: string;
  keyDeliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Discover",
    summary: "Deep-dive workshops to analyze existing bottlenecks, workflows, and commercial objectives.",
    details: [
      "Initial stakeholder interviews to capture operational pain points",
      "Current-state workflow auditing and legacy technology review",
      "Data security, volume, and compliance constraint identification",
      "Success benchmark agreement (cost reduction, throughput, SLA targets)"
    ],
    clientTouchpoints: "Kickoff discovery session, process walk-through calls, and access handover.",
    keyDeliverable: "Comprehensive Requirements Document (BRD) & Feasibility Report"
  },
  {
    stepNumber: "02",
    title: "Plan",
    summary: "Architecting the technical blueprint, resource allocations, and realistic milestone timelines.",
    details: [
      "Solution architecture design and database schema definition",
      "API integration mapping and third-party dependency review",
      "Standard Operating Procedure (SOP) documentation for BPO services",
      "Transparent timeline, budget milestones, and SLA matrix signoff"
    ],
    clientTouchpoints: "Weekly planning reviews, interactive UI prototype walk-throughs, and milestone approval signoffs.",
    keyDeliverable: "Technical Architecture Blueprint & Milestone Execution Schedule"
  },
  {
    stepNumber: "03",
    title: "Develop",
    summary: "Iterative engineering, secure cloud configuration, and operational workforce onboarding.",
    details: [
      "Modular full-stack development using modern React, TypeScript, and Python",
      "Continuous integration with automated code quality and lint checks",
      "Dedicated BPO team recruitment, domain training, and SOP dry runs",
      "Staging environment deployment with regular client review demos"
    ],
    clientTouchpoints: "Bi-weekly sprint progress demonstrations, shared staging access, and direct Slack/email channel communication.",
    keyDeliverable: "Functional Staging Environment & Calibrated Operations Team"
  },
  {
    stepNumber: "04",
    title: "Test",
    summary: "Exhaustive functional validation, user acceptance testing (UAT), and security stress-testing.",
    details: [
      "End-to-end user scenario testing and cross-browser validation",
      "Security audit including input validation, authentication, and RBAC",
      "BPO accuracy sampling and supervisor calibration sessions",
      "User Acceptance Testing (UAT) signoff with customer stakeholders"
    ],
    clientTouchpoints: "Guided UAT walk-through, bug triage feedback loops, and calibration scorecards.",
    keyDeliverable: "UAT Signoff Matrix & Security Verification Certificate"
  },
  {
    stepNumber: "05",
    title: "Deliver & Improve",
    summary: "Seamless production launch, staff training, SLA monitoring, and continuous optimization.",
    details: [
      "Zero-downtime production deployment with database cutover",
      "Comprehensive admin and user onboarding documentation and video guides",
      "Real-time operational monitoring and dedicated SLA helpdesk",
      "Monthly performance reviews and continuous workflow refinement"
    ],
    clientTouchpoints: "Production go-live support, monthly executive review meetings, and 24/7 escalation channels.",
    keyDeliverable: "Live Production Environment, SLA Maintenance Contract & Operations Manual"
  }
];

export const COLLABORATION_PILLARS = [
  {
    title: "Transparent Communication",
    description: "No technical jargon or surprise invoices. You receive regular, clear milestone reports with access to live staging environments and progress trackers."
  },
  {
    title: "Documented Accountability",
    description: "Every single operational workflow and codebase feature is backed by clear documentation, commit histories, and standard operating procedures (SOPs)."
  },
  {
    title: "Long-Term Partnership",
    description: "We don't abandon you at launch. We provide ongoing maintenance, security updates, and operational support to scale alongside your business growth."
  }
];
