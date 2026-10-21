import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory / file-backed storage for enquiries
interface StoredEnquiry {
  id: string;
  referenceId: string;
  name: string;
  businessEmail: string;
  phone: string;
  companyName: string;
  serviceInterest: string;
  estimatedBudget: string;
  requirements: string;
  preferredContactMethod: string;
  consentAccepted: boolean;
  createdAt: string;
  status: string;
  internalNotes?: string;
}

const memoryEnquiries: StoredEnquiry[] = [
  {
    id: "enq-101",
    referenceId: "VV-2026-8812",
    name: "Rajesh Varma",
    businessEmail: "rajesh.varma@andhralogistics.in",
    phone: "+91 9848022311",
    companyName: "Andhra Coastal Freight Logistics",
    serviceInterest: "BPO Services - Order Processing & Back-Office",
    estimatedBudget: "₹2,50,000 - ₹5,00,000 / month",
    requirements: "We need dedicated back-office support for digitizing 400+ airway bills and driver delivery receipts daily.",
    preferredContactMethod: "Phone",
    consentAccepted: true,
    createdAt: "2026-10-19T09:30:00.000Z",
    status: "Under Review",
    internalNotes: "Initial review completed by Kalyan. Scheduled discovery call for Thursday."
  }
];

const memoryDemoRequests: any[] = [];

// Health & System Info
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'online',
    app: 'VijVaar Innovations OPC Pvt Ltd Web Engine',
    timestamp: new Date().toISOString(),
    officialContact: {
      phone1: '+91 8341907677',
      phone2: '+91 8341563696',
      email: 'kalyanwork23@gmail.com',
      location: 'Kakinada, Andhra Pradesh, India'
    }
  });
});

// GET /api/enquiries
app.get('/api/enquiries', (_req, res) => {
  res.json({ success: true, count: memoryEnquiries.length, data: memoryEnquiries });
});

// POST /api/enquiries
app.post('/api/enquiries', (req, res) => {
  const { name, businessEmail, phone, companyName, serviceInterest, requirements } = req.body;

  if (!name || !businessEmail || !phone) {
    return res.status(400).json({ success: false, error: 'Name, Business Email, and Phone number are required fields.' });
  }

  const referenceId = req.body.referenceId || `VV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const enquiry: StoredEnquiry = {
    id: req.body.id || `enq-${Date.now()}`,
    referenceId,
    name: String(name).trim(),
    businessEmail: String(businessEmail).trim().toLowerCase(),
    phone: String(phone).trim(),
    companyName: String(companyName || 'Not Specified').trim(),
    serviceInterest: String(serviceInterest || 'General IT Consultation').trim(),
    estimatedBudget: String(req.body.estimatedBudget || 'Flexible / To be discussed').trim(),
    requirements: String(requirements || '').trim(),
    preferredContactMethod: String(req.body.preferredContactMethod || 'Email'),
    consentAccepted: Boolean(req.body.consentAccepted),
    createdAt: req.body.createdAt || new Date().toISOString(),
    status: req.body.status || 'New',
    internalNotes: req.body.internalNotes || ''
  };

  memoryEnquiries.unshift(enquiry);

  // Simulate transactional email notification dispatch to official email
  console.log(`[EMAIL NOTIFICATION DISPATCHED] -> To: kalyanwork23@gmail.com | New Enquiry [${referenceId}] from ${name} (${companyName}) for ${serviceInterest}`);

  return res.status(201).json({
    success: true,
    message: 'Business enquiry successfully registered and queued for review.',
    referenceId,
    enquiry
  });
});

// PATCH /api/enquiries/:id
app.patch('/api/enquiries/:id', (req, res) => {
  const { id } = req.params;
  const { status, internalNotes } = req.body;

  const itemIndex = memoryEnquiries.findIndex(e => e.id === id || e.referenceId === id);
  if (itemIndex === -1) {
    return res.status(404).json({ success: false, error: 'Enquiry record not found.' });
  }

  if (status) memoryEnquiries[itemIndex].status = status;
  if (internalNotes !== undefined) memoryEnquiries[itemIndex].internalNotes = internalNotes;

  return res.json({ success: true, data: memoryEnquiries[itemIndex] });
});

// POST /api/demo-requests
app.post('/api/demo-requests', (req, res) => {
  const { productName, fullName, businessEmail, phone, companyName } = req.body;
  if (!fullName || !businessEmail) {
    return res.status(400).json({ success: false, error: 'Full name and business email are required.' });
  }

  const referenceId = req.body.referenceId || `DEMO-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  const requestItem = {
    id: req.body.id || `demo-${Date.now()}`,
    referenceId,
    productName: productName || 'SaaS Solution',
    fullName,
    businessEmail,
    phone,
    companyName: companyName || '',
    teamSize: req.body.teamSize || '10-50',
    implementationTimeline: req.body.implementationTimeline || 'Within 1-2 months',
    createdAt: new Date().toISOString(),
    status: 'Pending'
  };

  memoryDemoRequests.unshift(requestItem);
  console.log(`[DEMO REQUEST DISPATCHED] -> To: kalyanwork23@gmail.com | Demo for ${productName} by ${fullName} (${companyName})`);

  return res.status(201).json({ success: true, referenceId, data: requestItem });
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (_req, res) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
      });
    }
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[VijVaar Server] Running at http://localhost:${PORT}`);
  });
}

startServer();
