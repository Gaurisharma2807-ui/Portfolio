import { EDUCATION, EXPERIENCES, PROFILE } from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section id="experience" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Section Intro + Education */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wide text-[#2563EB]">
              Background & Training
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Internships & Education
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Practical industry exposure across cloud architecture, Core Java systems, and Python
              machine learning workflows, anchored by a Computer Science degree.
            </p>

            {/* Education Block */}
            <div className="mt-10 border-t border-slate-200 pt-8">
              <h3 className="text-xs font-semibold tracking-wide text-slate-500">Education</h3>
              <div className="mt-5 space-y-7">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="border-b border-slate-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="font-mono text-xs tabular-nums text-slate-500">
                      {edu.period}
                    </div>
                    <h4 className="font-display mt-1.5 text-base font-semibold text-slate-950">
                      {edu.degree}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">{edu.institution}</p>
                    {edu.note && (
                      <p className="mt-2 text-xs font-medium text-[#2563EB]">
                        Achievement: {edu.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition Callout (unboxed hairline layout) */}
            <div className="mt-8 border-t border-slate-200 pt-6">
              <div className="text-xs font-semibold tracking-wide text-slate-500">
                Academic Distinction
              </div>
              <div className="mt-2 font-display text-lg font-semibold text-slate-950">
                {PROFILE.achievement}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Awarded merit scholarship recognition during Bachelor of Technology studies in
                Computer Science & Engineering.
              </p>
            </div>
          </div>

          {/* Right Column: Internship Experience Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-semibold tracking-wide text-slate-500">
              Internship Experience
            </h3>

            <div className="mt-5 divide-y divide-slate-200 border-t border-slate-200">
              {EXPERIENCES.map((exp, idx) => (
                <article key={exp.id} className="py-7 first:pt-6 last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs tabular-nums text-[#2563EB]">
                        0{idx + 1}
                      </span>
                      <h4 className="font-display text-xl font-bold tracking-tight text-slate-950">
                        {exp.role}
                      </h4>
                    </div>
                    <span className="font-mono text-xs tabular-nums text-slate-500">
                      {exp.duration}
                    </span>
                  </div>

                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-sm font-medium text-slate-800">
                    <span>{exp.company}</span>
                    <span className="text-slate-300" aria-hidden="true">
                      ·
                    </span>
                    <span className="font-mono text-xs font-normal text-slate-500">
                      {exp.focus}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-sm leading-relaxed text-slate-600"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
