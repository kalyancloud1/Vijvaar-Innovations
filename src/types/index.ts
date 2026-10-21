export interface BusinessEnquiry {
  id: string;
  referenceId: string;
  name: string;
  businessEmail: string;
  phone: string;
  companyName: string;
  serviceInterest: string;
  estimatedBudget: string;
  requirements: string;
  preferredContactMethod: 'Email' | 'Phone' | 'WhatsApp';
  consentAccepted: boolean;
  createdAt: string;
  status: 'New' | 'Under Review' | 'Contacted' | 'Proposal Sent' | 'Closed';
  internalNotes?: string;
}

export interface DemoRequest {
  id: string;
  referenceId: string;
  productName: string;
  fullName: string;
  businessEmail: string;
  phone: string;
  companyName: string;
  teamSize: string;
  implementationTimeline: string;
  createdAt: string;
  status: 'Pending' | 'Scheduled' | 'Completed';
}

export type PageView = 
  | 'home'
  | 'about'
  | 'saas'
  | 'it-services'
  | 'bpo'
  | 'industries'
  | 'process'
  | 'insights'
  | 'contact';
