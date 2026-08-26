import React, { useState } from 'react';
import {
  X,
  Shield,
  BarChart3,
  Briefcase,
  MessageSquare,
  FileText,
  Settings,
  Plus,
  Trash2,
  CheckCircle,
  Clock,
  Eye,
  Search,
  Sparkles,
  Download
} from 'lucide-react';
import { PortfolioProject, ContactMessage, CareerApplication } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  projects: PortfolioProject[];
  onAddProject: (p: PortfolioProject) => void;
  onDeleteProject: (id: string) => void;
  messages: ContactMessage[];
  onUpdateMessageStatus: (id: string, status: ContactMessage['status']) => void;
  applications: CareerApplication[];
  onUpdateAppStatus: (id: string, status: CareerApplication['status']) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  projects,
  onAddProject,
  onDeleteProject,
  messages,
  onUpdateMessageStatus,
  applications,
  onUpdateAppStatus,
}) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'portfolio' | 'messages' | 'careers' | 'seo'>('analytics');

  // New Project Form State
  const [showAddProject, setShowAddProject] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newCat, setNewCat] = useState<any>('3D');
  const [newDesc, setNewDesc] = useState('');

  // SEO Form State
  const [metaTitle, setMetaTitle] = useState('AA Animations — We Animate Your Dreams');
  const [metaDesc, setMetaDesc] = useState('AA Animations — We Animate Your Dreams. Premier studio specializing in 2D/3D Animation, VFX, and Digital Experiences.');
  const [analyticsId, setAnalyticsId] = useState('G-AAANIMATIONS2026');
  const [seoSaved, setSeoSaved] = useState(false);

  if (!isOpen) return null;

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const proj: PortfolioProject = {
      id: `p-${Date.now()}`,
      title: newTitle,
      category: newCat,
      client: newClient || 'AA Client',
      duration: '3 Weeks',
      year: '2026',
      thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      galleryImages: ['https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop'],
      shortDescription: newDesc || 'High-end digital production project executed by AA Animations.',
      challenge: 'Tight production turnaround specs.',
      solution: 'Unreal Engine 5 realtime rendering pipeline.',
      results: 'Over 1 million views achieved across launch campaign.',
      softwareUsed: ['Unreal Engine 5', 'Maya', 'After Effects']
    };

    onAddProject(proj);
    setNewTitle('');
    setNewClient('');
    setNewDesc('');
    setShowAddProject(false);
  };

  const handleSaveSeo = (e: React.FormEvent) => {
    e.preventDefault();
    setSeoSaved(true);
    setTimeout(() => setSeoSaved(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-6xl bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]">
        {/* Admin Header Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-600 flex items-center justify-center font-bold text-xs text-white shadow-lg">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">AA Animations Studio CMS & Admin Portal</h3>
              <p className="text-[11px] text-slate-400">Authenticated Admin Console • Internal Management</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1 px-6 pt-3 bg-slate-950 border-b border-slate-800 text-xs font-bold overflow-x-auto">
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-4 py-2.5 rounded-t-xl transition-colors flex items-center space-x-2 ${
              activeTab === 'analytics' ? 'bg-slate-900 text-cyan-400 border-t-2 border-cyan-500' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Dashboard & Metrics</span>
          </button>

          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2.5 rounded-t-xl transition-colors flex items-center space-x-2 ${
              activeTab === 'portfolio' ? 'bg-slate-900 text-cyan-400 border-t-2 border-cyan-500' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Portfolio Manager ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2.5 rounded-t-xl transition-colors flex items-center space-x-2 ${
              activeTab === 'messages' ? 'bg-slate-900 text-cyan-400 border-t-2 border-cyan-500' : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquiries Inbox ({messages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('careers')}
            className={`px-4 py-2.5 rounded-t-xl transition-colors flex items-center space-x-2 ${
              activeTab === 'careers' ? 'bg-slate-900 text-cyan-400 border-t-2 border-cyan-500' : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Career Resumes ({applications.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2.5 rounded-t-xl transition-colors flex items-center space-x-2 ${
              activeTab === 'seo' ? 'bg-slate-900 text-cyan-400 border-t-2 border-cyan-500' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>SEO & Settings</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* 1. Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold mb-1">Monthly Studio Views</div>
                  <div className="text-3xl font-black text-white font-mono">48,290</div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-1">↑ 24% vs last month</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold mb-1">Total Project Inquiries</div>
                  <div className="text-3xl font-black text-cyan-400 font-mono">{messages.length + 18}</div>
                  <div className="text-[10px] text-cyan-300 font-bold mt-1">Active Leads</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold mb-1">Job Applications</div>
                  <div className="text-3xl font-black text-purple-400 font-mono">{applications.length + 12}</div>
                  <div className="text-[10px] text-purple-300 font-bold mt-1">3 Shortlisted</div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold mb-1">Estimated Lead Pipeline</div>
                  <div className="text-3xl font-black text-amber-400 font-mono">$380,000</div>
                  <div className="text-[10px] text-amber-300 font-bold mt-1">Q3 Revenue Target</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <h4 className="font-extrabold text-sm text-white">Recent Admin Activity Log</h4>
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                    <span>New project inquiry from BioHealth Tech Global ($10k-$25k)</span>
                    <span className="text-[10px] font-mono text-slate-500">10 mins ago</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                    <span>New application submitted for Senior 3D Animator position</span>
                    <span className="text-[10px] font-mono text-slate-500">1 hour ago</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between">
                    <span>Showreel video analytics report compiled (100% completion rate)</span>
                    <span className="text-[10px] font-mono text-slate-500">3 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 2. Portfolio Manager Tab */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-base">Studio Portfolio Items ({projects.length})</h4>
                <button
                  onClick={() => setShowAddProject(!showAddProject)}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white flex items-center space-x-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>{showAddProject ? 'Cancel' : 'Add New Project'}</span>
                </button>
              </div>

              {/* Add Project Form Drawer */}
              {showAddProject && (
                <form onSubmit={handleCreateProject} className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/50 space-y-4">
                  <h5 className="font-bold text-sm text-cyan-400">Publish New Portfolio Item</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">Title *</label>
                      <input
                        type="text"
                        required
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Project Title"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">Client Name</label>
                      <input
                        type="text"
                        value={newClient}
                        onChange={(e) => setNewClient(e.target.value)}
                        placeholder="Client Company"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">Category</label>
                      <select
                        value={newCat}
                        onChange={(e) => setNewCat(e.target.value as any)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs outline-none text-white"
                      >
                        <option>2D</option>
                        <option>3D</option>
                        <option>Motion Graphics</option>
                        <option>VFX</option>
                        <option>Game Art</option>
                        <option>Web Development</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1">Short Summary</label>
                    <textarea
                      rows={2}
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      placeholder="Brief description..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl font-bold text-xs bg-cyan-600 text-white"
                  >
                    Save & Publish Project
                  </button>
                </form>
              )}

              {/* Projects List */}
              <div className="space-y-3">
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img src={p.thumbnail} alt="" className="w-14 h-10 rounded-xl object-cover" />
                      <div>
                        <div className="font-extrabold text-sm text-white">{p.title}</div>
                        <div className="text-xs text-slate-400">{p.client} • Category: {p.category}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => onDeleteProject(p.id)}
                      className="p-2 rounded-xl bg-rose-950/60 border border-rose-800/60 text-rose-400 hover:text-white hover:bg-rose-600 transition-colors text-xs font-bold flex items-center space-x-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Messages Inbox */}
          {activeTab === 'messages' && (
            <div className="space-y-4">
              <h4 className="font-extrabold text-base">Client Messages Inbox ({messages.length})</h4>
              {messages.length === 0 ? (
                <div className="text-xs text-slate-400 italic">No incoming contact messages yet.</div>
              ) : (
                <div className="space-y-3">
                  {messages.map((m) => (
                    <div key={m.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="font-bold text-cyan-400">{m.name} ({m.email})</div>
                        <span className="font-mono text-slate-500">{m.submittedAt}</span>
                      </div>
                      <div className="text-xs text-slate-300">
                        <strong>Service:</strong> {m.service} | <strong>Budget:</strong> {m.budget}
                      </div>
                      <p className="text-xs text-slate-400 bg-slate-900 p-3 rounded-xl border border-slate-800">{m.message}</p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[10px] uppercase font-mono font-bold text-amber-400">Status: {m.status}</span>
                        <div className="flex space-x-2 text-xs">
                          <button
                            onClick={() => onUpdateMessageStatus(m.id, 'Replied')}
                            className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800"
                          >
                            Mark Replied
                          </button>
                          <button
                            onClick={() => onUpdateMessageStatus(m.id, 'Archived')}
                            className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400"
                          >
                            Archive
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 4. Careers Inbox */}
          {activeTab === 'careers' && (
            <div className="space-y-4">
              <h4 className="font-extrabold text-base">Job & Internship Applications ({applications.length})</h4>
              {applications.length === 0 ? (
                <div className="text-xs text-slate-400 italic">No job applications submitted yet.</div>
              ) : (
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div key={app.id} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="font-bold text-cyan-400">{app.applicantName} ({app.email})</div>
                        <span className="font-mono text-slate-500">{app.submittedAt}</span>
                      </div>
                      <div className="text-xs text-slate-300">
                        Position: <strong>{app.positionTitle}</strong> | Resume File: <span className="text-amber-300 font-mono">{app.resumeFileName}</span>
                      </div>
                      <div className="text-xs text-cyan-300">
                        Portfolio Reel: <a href={app.portfolioUrl} target="_blank" rel="noreferrer" className="underline">{app.portfolioUrl}</a>
                      </div>
                      {app.coverLetter && (
                        <p className="text-xs text-slate-400 bg-slate-900 p-3 rounded-xl border border-slate-800">{app.coverLetter}</p>
                      )}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[10px] uppercase font-mono font-bold text-cyan-400">Status: {app.status}</span>
                        <div className="flex space-x-2 text-xs">
                          <button
                            onClick={() => onUpdateAppStatus(app.id, 'Shortlisted')}
                            className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800"
                          >
                            Shortlist
                          </button>
                          <button
                            onClick={() => onUpdateAppStatus(app.id, 'Rejected')}
                            className="px-3 py-1 rounded-lg bg-rose-950 text-rose-400 border border-rose-800"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 5. SEO Settings */}
          {activeTab === 'seo' && (
            <form onSubmit={handleSaveSeo} className="space-y-4 max-w-2xl">
              <h4 className="font-extrabold text-base">Global SEO & Meta Tag Settings</h4>

              {seoSaved && (
                <div className="p-3 bg-emerald-950 border border-emerald-500 text-emerald-300 rounded-xl text-xs font-bold">
                  ✓ SEO Settings Saved Successfully!
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Page Title Tag</label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Meta Description</label>
                <textarea
                  rows={3}
                  value={metaDesc}
                  onChange={(e) => setMetaDesc(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Google Analytics Measurement ID</label>
                <input
                  type="text"
                  value={analyticsId}
                  onChange={(e) => setAnalyticsId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-bold text-xs bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg"
              >
                Save Meta SEO Configurations
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
