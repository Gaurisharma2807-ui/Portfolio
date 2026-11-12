import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PROFILE, RESUME_PDF_URL } from '../data/portfolioData';
import { validateContactForm, type ContactFormErrors } from '../utils/portfolioLogic';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(PROFILE.email);
      }
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateContactForm({ name, email, subject, message });

    if (!validation.isValid) {
      setErrors(validation.errors);
      setSubmittedData(null);
      return;
    }

    setErrors({});
    setSubmittedData({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const buildMailtoHref = () => {
    if (!submittedData) return `mailto:${PROFILE.email}`;
    const body = `${submittedData.message}\n\nFrom: ${submittedData.name} (${submittedData.email})`;
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(submittedData.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Details & Links */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-wide text-[#2563EB]">Get in Touch</p>
              <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Let’s connect on internships, Java roles, or data projects.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Currently pursuing B.Tech in Computer Science (Class of 2027) and open to software
                engineering, backend Java/Spring Boot, and data science opportunities.
              </p>

              <div className="mt-8 space-y-4 border-t border-slate-200 pt-6 text-sm">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <Mail className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="font-medium text-slate-900 hover:text-[#2563EB]"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy Gauri Sharma email to clipboard"
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-slate-200 bg-[#FAFAFB] px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  <a
                    href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-sm tabular-nums text-slate-900 hover:text-[#2563EB]"
                  >
                    {PROFILE.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  <span>{PROFILE.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6">
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-[#2563EB]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <span className="text-slate-300" aria-hidden="true">
                ·
              </span>
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-[#2563EB]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <span className="text-slate-300" aria-hidden="true">
                ·
              </span>
              <a
                href={RESUME_PDF_URL}
                download="Gauri_Sharma_Resume.pdf"
                className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:underline"
              >
                <span>Download Resume</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Validated Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-[#FAFAFB] p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-slate-950">Send a Message</h3>
              <p className="mt-1 text-xs text-slate-500">
                Compose a direct inquiry below or launch your default mail client.
              </p>

              {submittedData && (
                <div
                  role="status"
                  className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950"
                >
                  <p className="font-semibold">Message prepared for {PROFILE.name}</p>
                  <p className="mt-1 text-xs text-emerald-800">
                    Thank you, {submittedData.name}. Your note regarding &ldquo;
                    {submittedData.subject}&rdquo; is ready.
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg bg-emerald-700 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-800"
                    >
                      <span>Open in Email App</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="text-xs font-medium text-emerald-900 underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Riya Kapoor"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-600" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="riya@company.com"
                      aria-invalid={Boolean(errors.email)}
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Software Engineering Internship / Collaboration"
                    aria-invalid={Boolean(errors.subject)}
                    className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-600" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share role details, project context, or preferred interview times..."
                    aria-invalid={Boolean(errors.message)}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-600" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Prepare Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
