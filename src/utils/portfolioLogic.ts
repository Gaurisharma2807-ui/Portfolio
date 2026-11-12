import type { ProjectCategory, ProjectItem, SkillDomainId, SkillGroup } from '../data/portfolioData';

export interface ContactFormInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactValidationResult {
  isValid: boolean;
  errors: ContactFormErrors;
}

export function filterProjects(
  projects: ProjectItem[],
  category: ProjectCategory,
  searchQuery: string = ''
): ProjectItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = category === 'All' || project.category === category;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    const searchableText = [
      project.title,
      project.subtitle,
      project.summary,
      ...project.stack,
      ...project.highlights,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function filterSkillGroups(
  groups: SkillGroup[],
  activeDomain: SkillDomainId
): SkillGroup[] {
  if (activeDomain === 'all') {
    return groups;
  }
  return groups.filter((group) => group.domain === activeDomain);
}

export function countTotalSkills(groups: SkillGroup[]): number {
  return groups.reduce((sum, group) => sum + group.items.length, 0);
}

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  const errors: ContactFormErrors = {};
  const trimmedName = input.name.trim();
  const trimmedEmail = input.email.trim();
  const trimmedSubject = input.subject.trim();
  const trimmedMessage = input.message.trim();

  if (trimmedName.length < 2) {
    errors.name = 'Please enter your name (at least 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please provide your email address.';
  } else if (!emailPattern.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (trimmedSubject.length < 3) {
    errors.subject = 'Please add a brief subject for your message.';
  }

  if (trimmedMessage.length < 10) {
    errors.message = 'Please write a message of at least 10 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
