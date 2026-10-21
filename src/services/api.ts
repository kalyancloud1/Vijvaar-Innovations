import { BusinessEnquiry, DemoRequest } from '../types';

const ENQUIRIES_STORAGE_KEY = 'vijvaar_enquiries_db_v1';
const DEMOS_STORAGE_KEY = 'vijvaar_demos_db_v1';

// Initial seed enquiries so the admin portal looks realistic on first run
const SEED_ENQUIRIES: BusinessEnquiry[] = [
  {
    id: "enq-101",
    referenceId: "VV-2026-8812",
    name: "Rajesh Varma",
    businessEmail: "rajesh.varma@andhralogistics.in",
    phone: "+91 9848022311",
    companyName: "Andhra Coastal Freight Logistics",
    serviceInterest: "BPO Services - Order Processing & Back-Office",
    estimatedBudget: "₹2,50,000 - ₹5,00,000 / month",
    requirements: "We need dedicated back-office support for digitizing 400+ airway bills and driver delivery receipts daily with 99.5% accuracy.",
    preferredContactMethod: "Phone",
    consentAccepted: true,
    createdAt: "2026-10-19T09:30:00.000Z",
    status: "Under Review",
    internalNotes: "Initial review completed by Kalyan. Scheduled discovery call for Thursday."
  },
  {
    id: "enq-102",
    referenceId: "VV-2026-8945",
    name: "Dr. P. Srinivas Rao",
    businessEmail: "admin@kakinadahealthcare.org",
    phone: "+91 8842345678",
    companyName: "Kakinada Advanced Specialty Clinics",
    serviceInterest: "Custom Software Development & Clinic SaaS",
    estimatedBudget: "₹5,00,000 - ₹10,00,000",
    requirements: "Seeking custom patient appointment booking, doctor schedule coordination, and WhatsApp notification integration.",
    preferredContactMethod: "Email",
    consentAccepted: true,
    createdAt: "2026-10-20T14:15:00.000Z",
    status: "New",
    internalNotes: "High-priority local healthcare account."
  }
];

export const getStoredEnquiries = (): BusinessEnquiry[] => {
  try {
    const raw = localStorage.getItem(ENQUIRIES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(SEED_ENQUIRIES));
      return SEED_ENQUIRIES;
    }
    return JSON.parse(raw);
  } catch {
    return SEED_ENQUIRIES;
  }
};

export const saveEnquiry = async (
  enquiryData: Omit<BusinessEnquiry, 'id' | 'referenceId' | 'createdAt' | 'status'>
): Promise<{ success: boolean; referenceId: string; error?: string }> => {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `VV-2026-${randomSuffix}`;
  
  const newEnquiry: BusinessEnquiry = {
    ...enquiryData,
    id: `enq-${Date.now()}`,
    referenceId,
    createdAt: new Date().toISOString(),
    status: 'New'
  };

  // Try API submission first
  try {
    const response = await fetch('/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEnquiry)
    });
    if (response.ok) {
      const data = await response.json();
      // Also cache locally
      const current = getStoredEnquiries();
      localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify([newEnquiry, ...current]));
      return { success: true, referenceId: data.referenceId || referenceId };
    }
  } catch {
    // If backend endpoint is offline or running standalone client, fall back safely to local storage
  }

  // Fallback persistent storage
  const current = getStoredEnquiries();
  localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify([newEnquiry, ...current]));
  return { success: true, referenceId };
};

export const updateEnquiryStatus = (
  id: string,
  status: BusinessEnquiry['status'],
  notes?: string
): boolean => {
  try {
    const current = getStoredEnquiries();
    const updated = current.map(item => {
      if (item.id === id) {
        return {
          ...item,
          status,
          internalNotes: notes !== undefined ? notes : item.internalNotes
        };
      }
      return item;
    });
    localStorage.setItem(ENQUIRIES_STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch {
    return false;
  }
};

export const getStoredDemoRequests = (): DemoRequest[] => {
  try {
    const raw = localStorage.getItem(DEMOS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveDemoRequest = async (
  demoData: Omit<DemoRequest, 'id' | 'referenceId' | 'createdAt' | 'status'>
): Promise<{ success: boolean; referenceId: string }> => {
  const referenceId = `DEMO-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const newRequest: DemoRequest = {
    ...demoData,
    id: `demo-${Date.now()}`,
    referenceId,
    createdAt: new Date().toISOString(),
    status: 'Pending'
  };

  try {
    await fetch('/api/demo-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRequest)
    });
  } catch {
    // Local fallback
  }

  const current = getStoredDemoRequests();
  localStorage.setItem(DEMOS_STORAGE_KEY, JSON.stringify([newRequest, ...current]));
  return { success: true, referenceId };
};

export const exportEnquiriesToCSV = (): void => {
  const enquiries = getStoredEnquiries();
  if (enquiries.length === 0) return;

  const headers = [
    "Reference ID",
    "Date",
    "Status",
    "Name",
    "Company",
    "Email",
    "Phone",
    "Service Interest",
    "Estimated Budget",
    "Contact Method",
    "Requirements",
    "Notes"
  ];

  const rows = enquiries.map(e => [
    `"${e.referenceId}"`,
    `"${new Date(e.createdAt).toLocaleDateString()}"`,
    `"${e.status}"`,
    `"${e.name.replace(/"/g, '""')}"`,
    `"${e.companyName.replace(/"/g, '""')}"`,
    `"${e.businessEmail}"`,
    `"${e.phone}"`,
    `"${e.serviceInterest.replace(/"/g, '""')}"`,
    `"${e.estimatedBudget.replace(/"/g, '""')}"`,
    `"${e.preferredContactMethod}"`,
    `"${e.requirements.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
    `"${(e.internalNotes || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `vijvaar_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
