import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Upload, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { JOB_POSITIONS } from '../data/mockData';
import { JobPosition, CareerApplication } from '../types';

interface CareersSectionProps {
  onAddApplication: (app: CareerApplication) => void;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ onAddApplication }) => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(JOB_POSITIONS[0]);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resumeFileName, setResumeFileName] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
    }
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    const newApp: CareerApplication = {
      id: `app-${Date.now()}`,
      applicantName,
      email: applicantEmail,
      phone: applicantPhone,
      positionId: selectedJob.id,
      positionTitle: selectedJob.title,
      portfolioUrl,
      coverLetter,
      resumeFileName: resumeFileName || 'Applicant_Resume.pdf',
      submittedAt: new Date().toLocaleDateString(),
      status: 'New'
    };

    onAddApplication(newApp);
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setPortfolioUrl('');
      setCoverLetter('');
      setResumeFileName('');
    }, 4000);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 font-bold text-xs tracking-wider uppercase border border-cyan-200 dark:border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Our Global Crew</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Careers & Internships at AA Animations
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            We are always scouting world-class 3D animators, Unreal Engine developers, Nuke compositors, and creative interns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Job Listings List */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-extrabold text-sm uppercase text-slate-400 tracking-wider mb-2">
              Open Studio Positions ({JOB_POSITIONS.length})
            </h3>
            {JOB_POSITIONS.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  selectedJob?.id === job.id
                    ? 'bg-slate-900 text-white border-cyan-500 shadow-xl'
                    : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-cyan-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {job.type}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{job.department}</span>
                </div>
                <h4 className="font-bold text-base mb-1">{job.title}</h4>
                <div className="flex items-center space-x-3 text-xs text-slate-400">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{job.location}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{job.experience}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Job Details + Application Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
            {selectedJob && (
              <>
                <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-cyan-600 dark:text-cyan-400">
                    <span>{selectedJob.department}</span>
                    <span>•</span>
                    <span>{selectedJob.type}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {selectedJob.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {selectedJob.description}
                  </p>
                </div>

                {/* Requirements */}
                <div className="space-y-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    Requirements & Skillsets
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Application Form */}
                <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
                  <h4 className="text-base font-black text-slate-900 dark:text-white">
                    Apply for {selectedJob.title}
                  </h4>

                  {appliedSuccess ? (
                    <div className="p-6 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded-2xl text-center space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                      <h4 className="font-bold text-base">Application Received!</h4>
                      <p className="text-xs">
                        Our recruiting team will review your portfolio and reach out if there is a match.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleApplicationSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={applicantName}
                            onChange={(e) => setApplicantName(e.target.value)}
                            placeholder="e.g. Alex Sterling"
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={applicantEmail}
                            onChange={(e) => setApplicantEmail(e.target.value)}
                            placeholder="alex@artstation.com"
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={applicantPhone}
                            onChange={(e) => setApplicantPhone(e.target.value)}
                            placeholder="+1 (555) 019-2834"
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Portfolio / Reel URL *
                          </label>
                          <input
                            type="url"
                            required
                            value={portfolioUrl}
                            onChange={(e) => setPortfolioUrl(e.target.value)}
                            placeholder="https://vimeo.com/your-showreel"
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      {/* Resume Upload File Box */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Upload Resume / CV (PDF or DOCX) *
                        </label>
                        <label className="flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-cyan-500 rounded-2xl cursor-pointer bg-slate-50 dark:bg-slate-800/50 transition-colors">
                          <Upload className="w-4 h-4 text-cyan-500" />
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                            {resumeFileName || 'Click to upload resume or drag file here'}
                          </span>
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            required
                            onChange={handleResumeUpload}
                            className="hidden"
                          />
                        </label>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Cover Letter / Introduction
                        </label>
                        <textarea
                          rows={3}
                          value={coverLetter}
                          onChange={(e) => setCoverLetter(e.target.value)}
                          placeholder="Tell us about your favorite software, 3D engines, and experience..."
                          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-xs outline-none focus:border-cyan-500 text-slate-900 dark:text-white"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl font-bold text-xs bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-600/30 flex items-center justify-center space-x-2 transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Job Application</span>
                      </button>
                    </form>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
