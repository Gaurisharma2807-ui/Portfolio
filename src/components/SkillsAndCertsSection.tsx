import { useState } from 'react';
import { Award } from 'lucide-react';
import {
  CERTIFICATIONS,
  SKILL_GROUPS,
  type SkillDomainId,
} from '../data/portfolioData';
import { countTotalSkills, filterSkillGroups } from '../utils/portfolioLogic';

const DOMAIN_TABS: { id: SkillDomainId; label: string }[] = [
  { id: 'all', label: 'All Domains' },
  { id: 'backend', label: 'Java & Backend' },
  { id: 'data-science', label: 'Data Science & ML' },
  { id: 'frontend-ai', label: 'Frontend & AI Tools' },
];

export function SkillsAndCertsSection() {
  const [activeDomain, setActiveDomain] = useState<SkillDomainId>('all');

  const visibleGroups = filterSkillGroups(SKILL_GROUPS, activeDomain);
  const activeSkillCount = countTotalSkills(visibleGroups);

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      {/* Header & Interactive Domain Filter */}
      <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold tracking-wide text-[#2563EB]">
            Technical Capabilities
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Skills & Certifications
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Core competencies spanning Java backend engineering, relational and NoSQL databases,
            Python data analysis, and modern Generative AI tooling.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filter technical skills by domain"
          className="inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1"
        >
          {DOMAIN_TABS.map((tab) => {
            const isSelected = activeDomain === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveDomain(tab.id)}
                className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#2563EB] ${
                  isSelected
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span className="tabular-nums">
          {visibleGroups.length} skill {visibleGroups.length === 1 ? 'category' : 'categories'} ·{' '}
          {activeSkillCount} technologies listed
        </span>
      </div>

      {/* Skills Grid (Clean hairline boxes, unboxed typographic list items) */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleGroups.map((group) => (
          <div
            key={group.id}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6"
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-display text-base font-semibold text-slate-950">
                  {group.category}
                </h3>
                <span className="font-mono text-xs tabular-nums text-slate-400">
                  {group.items.length}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-700">
                {group.items.map((skill, idx) => (
                  <span key={skill}>
                    <span className="font-medium text-slate-900">{skill}</span>
                    {idx < group.items.length - 1 && (
                      <span className="mx-2 text-slate-300" aria-hidden="true">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Institutional Index */}
      <div className="mt-16 border-t border-slate-200 pt-12">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
            <h3 className="font-display text-xl font-bold tracking-tight text-slate-950">
              Verified Certifications & Workshops
            </h3>
          </div>
          <span className="font-mono text-xs tabular-nums text-slate-500">
            {CERTIFICATIONS.length} credentials
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-10 divide-y divide-slate-200 border-y border-slate-200 md:grid-cols-2">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={cert.id}
              className="flex items-baseline justify-between gap-4 py-4 md:odd:pr-4 md:even:pl-4"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs tabular-nums text-slate-400">
                  0{index + 1}
                </span>
                <span className="text-sm font-medium text-slate-900">{cert.title}</span>
              </div>
              <span className="shrink-0 text-right text-xs text-slate-500">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
