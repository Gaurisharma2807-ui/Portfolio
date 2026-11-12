import { PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#FAFAFB]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-slate-500 sm:flex-row sm:items-center">
        <div>
          <span className="font-semibold text-slate-900">{PROFILE.name}</span>
          <span className="mx-2 text-slate-300" aria-hidden="true">
            ·
          </span>
          <span>{PROFILE.location}</span>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a href="#projects" className="hover:text-slate-900">
            Projects
          </a>
          <a href="#experience" className="hover:text-slate-900">
            Experience
          </a>
          <a href="#skills" className="hover:text-slate-900">
            Skills
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
          <span className="text-slate-400">© {new Date().getFullYear()} {PROFILE.name}</span>
        </div>
      </div>
    </footer>
  );
}
