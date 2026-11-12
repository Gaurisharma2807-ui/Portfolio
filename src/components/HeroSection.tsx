import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight, FileText, Layers, Cpu, BarChart3 } from 'lucide-react';
import {
  ENGINEERING_PILLARS,
  PROFILE,
  PROOF_METRICS,
  RESUME_PDF_URL,
} from '../data/portfolioData';

export function HeroSection() {
  const [activePillarId, setActivePillarId] = useState<string>(ENGINEERING_PILLARS[0].id);
  const activePillar =
    ENGINEERING_PILLARS.find((pillar) => pillar.id === activePillarId) ?? ENGINEERING_PILLARS[0];

  const getPillarIcon = (id: string) => {
    if (id === 'backend') return <Layers className="h-4 w-4" aria-hidden="true" />;
    if (id === 'ai-apps') return <Cpu className="h-4 w-4" aria-hidden="true" />;
    return <BarChart3 className="h-4 w-4" aria-hidden="true" />;
  };

  return (
    <section id="top" className="border-b border-slate-200 bg-[#FAFAFB]">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Typographic Hierarchy & Primary CTAs */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium tracking-wide text-slate-600">
                <span className="whitespace-nowrap text-slate-900 font-semibold">{PROFILE.name}</span>
                <span className="text-slate-300" aria-hidden="true">
                  ·
                </span>
                <span className="whitespace-nowrap">B.Tech CSE ({PROFILE.graduation})</span>
                <span className="text-slate-300" aria-hidden="true">
                  ·
                </span>
                <span className="whitespace-nowrap">{PROFILE.location}</span>
              </p>

              <h1
                className="font-display mt-4 font-bold tracking-tight text-slate-950"
                style={{
                  fontSize: 'clamp(2.25rem, 4.1vw, 3.65rem)',
                  lineHeight: 1.08,
                  textWrap: 'balance',
                }}
              >
                Building Java backends, AI web systems, and data workflows.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
                {PROFILE.summary}
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={RESUME_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors duration-150 hover:border-slate-400 hover:bg-slate-50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
              >
                <FileText className="h-4 w-4 text-slate-600" aria-hidden="true" />
                <span>View Resume PDF</span>
              </a>

              <div className="flex items-center gap-5 pl-1 text-sm font-medium text-slate-600">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-[#2563EB] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-[#2563EB] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB]"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Engineering Focus Showcase (matching height) */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="text-xs font-semibold tracking-wide text-slate-500">
                    Core Engineering Pillars
                  </span>
                  <span className="font-mono text-xs tabular-nums text-slate-400">
                    01 — 03
                  </span>
                </div>

                {/* Interactive Pillar Selector */}
                <div
                  role="tablist"
                  aria-label="Engineering focus areas"
                  className="mt-4 grid grid-cols-3 gap-1 rounded-lg bg-slate-100 p-1"
                >
                  {ENGINEERING_PILLARS.map((pillar) => {
                    const isActive = pillar.id === activePillar.id;
                    return (
                      <button
                        key={pillar.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActivePillarId(pillar.id)}
                        className={`flex min-h-[38px] items-center justify-center gap-1.5 rounded-md px-2 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#2563EB] ${
                          isActive
                            ? 'bg-white text-slate-950 shadow-sm'
                            : 'text-slate-600 hover:text-slate-950'
                        }`}
                      >
                        {getPillarIcon(pillar.id)}
                        <span>{pillar.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Pillar Architecture Details */}
                <div className="mt-6">
                  <h2 className="font-display text-lg font-semibold text-slate-950">
                    {activePillar.headline}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {activePillar.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                {activePillar.modules.map((mod, idx) => (
                  <div
                    key={mod.name}
                    className="flex flex-col gap-0.5 border-b border-slate-100 pb-2.5 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <div className="flex items-baseline gap-2.5 shrink-0">
                      <span className="font-mono text-xs tabular-nums text-[#2563EB]">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-medium text-slate-900 whitespace-nowrap">
                        {mod.name}
                      </span>
                    </div>
                    <span className="pl-6 text-xs text-slate-500 sm:pl-0 sm:text-right">
                      {mod.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width 4-column Proof Strip below Hero Split */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-slate-200 px-6 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {PROOF_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`py-6 ${idx > 0 ? 'sm:pl-8' : ''} ${idx < 3 ? 'sm:pr-6' : ''}`}
            >
              <div className="font-display font-mono text-2xl font-bold tabular-nums text-slate-950">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-900">{metric.label}</div>
              <div className="mt-0.5 text-xs text-slate-500">{metric.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
