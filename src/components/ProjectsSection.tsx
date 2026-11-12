import { useState } from 'react';
import { ArrowUpRight, Search } from 'lucide-react';
import { PROJECTS, type ProjectCategory, type ProjectItem } from '../data/portfolioData';
import { filterProjects } from '../utils/portfolioLogic';
import { ProjectModal } from './ProjectModal';

const CATEGORIES: ProjectCategory[] = ['All', 'Full-Stack & AI', 'Data Science'];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const visibleProjects = filterProjects(PROJECTS, selectedCategory, searchQuery);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-8 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold tracking-wide text-[#2563EB]">Selected Work</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Projects & System Architecture
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Full-stack Java Spring Boot applications, LLM-integrated web dashboards, and Python
            machine learning pipelines built for real-world utility.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="inline-flex items-center gap-1 rounded-lg bg-slate-100 p-1"
          >
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={isSelected}
                  className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#2563EB] ${
                    isSelected
                      ? 'bg-white text-slate-950 shadow-sm'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative">
            <label htmlFor="project-search" className="sr-only">
              Search projects by technology or keyword
            </label>
            <Search
              className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              id="project-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter stack (e.g. Gemini)"
              className="min-h-[40px] w-full rounded-lg border border-slate-200 bg-white py-2 pr-3 pl-8 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#2563EB] focus:outline-none sm:w-52"
            />
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
        <span className="tabular-nums">
          Showing {visibleProjects.length} of {PROJECTS.length} projects
        </span>
        {(selectedCategory !== 'All' || searchQuery.trim() !== '') && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="font-medium text-[#2563EB] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Empty State */}
      {visibleProjects.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <p className="font-display text-lg font-semibold text-slate-900">
            No matching projects found
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Try clearing your search keyword or switching back to all project categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="mt-5 inline-flex min-h-[40px] items-center rounded-lg bg-[#2563EB] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1D4ED8]"
          >
            Show All Projects
          </button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 transition-colors duration-150 hover:border-slate-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-slate-500">
                  <span>{project.category}</span>
                  <span className="font-mono tabular-nums text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{project.subtitle}</p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.summary}</p>

                {/* Unboxed typographic stack list (Zero-Pill Rule) */}
                <p className="mt-5 font-mono text-xs leading-relaxed text-slate-500">
                  {project.stack.join(' · ')}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-xs text-slate-500 tabular-nums">
                  {project.architectureModules.length} core modules
                </span>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  aria-label={`Inspect architecture for ${project.title}`}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-200 bg-[#FAFAFB] px-4 py-2 text-xs font-semibold text-slate-900 transition-colors duration-150 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                >
                  <span>Inspect Architecture</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
