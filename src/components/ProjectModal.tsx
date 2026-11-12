import { useEffect } from 'react';
import { X, CheckCircle2, Layers } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <p className="text-xs font-medium text-[#2563EB]">
              {project.category}
              <span className="mx-2 text-slate-300" aria-hidden="true">
                ·
              </span>
              <span className="text-slate-500">{project.stack.join(' · ')}</span>
            </p>
            <h3
              id="project-modal-title"
              className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-950"
            >
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Close details for ${project.title}`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-500">
              System Overview
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{project.summary}</p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wide text-slate-500">
              Key Engineering Deliverables
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-5">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-slate-500">
              <Layers className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              <span>Architecture Modules</span>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {project.architectureModules.map((moduleName, idx) => (
                <div
                  key={moduleName}
                  className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-[#FAFAFB] px-3.5 py-2.5"
                >
                  <span className="font-mono text-xs tabular-nums text-[#2563EB]">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-medium text-slate-900">{moduleName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-7 flex justify-end border-t border-slate-100 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[40px] rounded-lg bg-slate-900 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
}
