import React, { useState, useEffect } from 'react';
import { BusinessEnquiry } from '../types';
import { getStoredEnquiries, updateEnquiryStatus, exportEnquiriesToCSV } from '../services/api';
import { X, Search, Download, Filter, Check, Clock, Mail, Phone, Building, Edit3, ShieldAlert } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose
}) => {
  const [enquiries, setEnquiries] = useState<BusinessEnquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editStatus, setEditStatus] = useState<BusinessEnquiry['status']>('New');
  const [editNotes, setEditNotes] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setEnquiries(getStoredEnquiries());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredEnquiries = enquiries.filter(item => {
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.businessEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.serviceInterest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.referenceId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleStartEdit = (item: BusinessEnquiry) => {
    setEditingId(item.id);
    setEditStatus(item.status);
    setEditNotes(item.internalNotes || '');
  };

  const handleSaveEdit = (id: string) => {
    updateEnquiryStatus(id, editStatus, editNotes);
    setEnquiries(getStoredEnquiries());
    setEditingId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl border border-stone-300 overflow-hidden my-4 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-white">
                  Staff & Solutions Admin Desk
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                  Live Operations
                </span>
              </div>
              <p className="text-xs text-stone-300">
                VijVaar Innovations internal enquiry registry, CRM lead tracking, and CSV reporting.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-300 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[240px]">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[180px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search by company, client, email, or ref..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-1.5 text-xs">
              <Filter className="w-3.5 h-3.5 text-stone-500" />
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="px-2.5 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none"
              >
                <option value="All">All Statuses ({enquiries.length})</option>
                <option value="New">New</option>
                <option value="Under Review">Under Review</option>
                <option value="Contacted">Contacted</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
          </div>

          {/* Export to CSV Action */}
          <button
            onClick={exportEnquiriesToCSV}
            className="px-3.5 py-1.5 bg-white hover:bg-stone-100 text-stone-800 text-xs font-medium border border-stone-300 rounded-lg shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-amber-600" />
            <span>Export CSV</span>
          </button>
        </div>

        {/* Enquiry Records Table */}
        <div className="flex-1 overflow-auto p-4">
          {filteredEnquiries.length === 0 ? (
            <div className="py-12 text-center text-stone-400 text-xs">
              No matching client enquiries found in the database.
            </div>
          ) : (
            <div className="space-y-3">
              {filteredEnquiries.map(item => {
                const isEditing = editingId === item.id;

                const statusColor = 
                  item.status === 'New' ? 'bg-amber-100 text-amber-800 border-amber-300' :
                  item.status === 'Under Review' ? 'bg-blue-100 text-blue-800 border-blue-300' :
                  item.status === 'Contacted' ? 'bg-purple-100 text-purple-800 border-purple-300' :
                  item.status === 'Proposal Sent' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                  'bg-stone-200 text-stone-700 border-stone-300';

                return (
                  <div
                    key={item.id}
                    className="p-4 bg-white border border-stone-200 rounded-lg hover:border-amber-400 transition-colors shadow-2xs text-xs space-y-3"
                  >
                    {/* Top Row: Ref & Status */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-amber-800 tracking-wider">
                          {item.referenceId}
                        </span>
                        <span className="text-stone-400" aria-hidden="true">·</span>
                        <span className="text-stone-500 font-mono text-[11px] tabular-nums">
                          {new Date(item.createdAt).toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold border ${statusColor}`}>
                          {item.status}
                        </span>
                        {!isEditing && (
                          <button
                            onClick={() => handleStartEdit(item)}
                            className="p-1 text-stone-400 hover:text-stone-700 transition-colors cursor-pointer"
                            title="Update Status or Notes"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Middle Row: Client Profile & Service */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div>
                        <div className="font-bold text-stone-900 text-sm">{item.name}</div>
                        <div className="flex items-center gap-1.5 text-stone-600 mt-0.5">
                          <Building className="w-3 h-3 text-stone-400" />
                          <span>{item.companyName}</span>
                        </div>
                      </div>

                      <div className="space-y-0.5 text-stone-600">
                        <div className="flex items-center gap-1.5">
                          <Mail className="w-3 h-3 text-stone-400" />
                          <a href={`mailto:${item.businessEmail}`} className="text-amber-700 hover:underline">
                            {item.businessEmail}
                          </a>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Phone className="w-3 h-3 text-stone-400" />
                          <a href={`tel:${item.phone}`} className="hover:underline">
                            {item.phone}
                          </a>
                        </div>
                        <div className="text-[11px] text-stone-400">
                          Prefers: <span className="font-medium text-stone-700">{item.preferredContactMethod}</span>
                        </div>
                      </div>

                      <div className="space-y-0.5">
                        <div className="text-stone-500 font-medium">Interest & Budget:</div>
                        <div className="text-stone-900 font-semibold">{item.serviceInterest}</div>
                        <div className="text-stone-600 font-mono text-[11px]">Budget: {item.estimatedBudget}</div>
                      </div>
                    </div>

                    {/* Requirements Quote */}
                    <div className="bg-stone-50 rounded p-2.5 border border-stone-200/80 text-stone-700 text-xs">
                      <span className="font-semibold text-stone-900">Project Brief: </span>
                      {item.requirements}
                    </div>

                    {/* Internal Notes or Editing Form */}
                    {isEditing ? (
                      <div className="pt-2 border-t border-stone-200 space-y-2 bg-amber-50/50 p-3 rounded-md">
                        <div className="flex flex-wrap items-center gap-3">
                          <label className="font-medium text-stone-700">Change Status:</label>
                          <select
                            value={editStatus}
                            onChange={e => setEditStatus(e.target.value as any)}
                            className="bg-white border border-stone-300 rounded px-2 py-1 text-xs"
                          >
                            <option value="New">New</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Proposal Sent">Proposal Sent</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-stone-700 font-medium mb-1">
                            Internal Follow-up Notes:
                          </label>
                          <textarea
                            rows={2}
                            value={editNotes}
                            onChange={e => setEditNotes(e.target.value)}
                            placeholder="Add call notes, assignee, or proposal details..."
                            className="w-full p-2 bg-white border border-stone-300 rounded text-xs focus:ring-1 focus:ring-amber-500"
                          />
                        </div>

                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setEditingId(null)}
                            className="px-3 py-1 text-stone-600 hover:text-stone-900 text-xs"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSaveEdit(item.id)}
                            className="px-4 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded font-medium text-xs flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" />
                            <span>Save Changes</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      item.internalNotes && (
                        <div className="text-[11px] text-stone-500 italic bg-amber-50/40 p-2 rounded border border-amber-100 flex items-start gap-1.5">
                          <Clock className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>Internal Note:</strong> {item.internalNotes}</span>
                        </div>
                      )
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-stone-100 px-6 py-3 border-t border-stone-200 text-stone-500 text-xs flex items-center justify-between shrink-0">
          <span>Total Records: <strong className="text-stone-800 tabular-nums">{filteredEnquiries.length}</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-900 text-white rounded text-xs font-semibold hover:bg-stone-800 transition-colors"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};
