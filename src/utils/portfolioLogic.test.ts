import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS, SKILL_GROUPS } from '../data/portfolioData';
import {
  countTotalSkills,
  filterProjects,
  filterSkillGroups,
  validateContactForm,
} from './portfolioLogic';

test('filterProjects filters accurately by category and keyword', () => {
  const allProjects = filterProjects(PROJECTS, 'All', '');
  assert.equal(allProjects.length, 4);

  const dataScienceOnly = filterProjects(PROJECTS, 'Data Science', '');
  assert.equal(dataScienceOnly.length, 1);
  assert.equal(dataScienceOnly[0]?.id, 'data-science-project');

  const geminiSearch = filterProjects(PROJECTS, 'All', 'Gemini');
  assert.equal(geminiSearch.length, 2);

  const emptySearch = filterProjects(PROJECTS, 'Data Science', 'Spring Boot');
  assert.equal(emptySearch.length, 0);
});

test('filterSkillGroups and countTotalSkills return accurate domain subsets', () => {
  const allGroups = filterSkillGroups(SKILL_GROUPS, 'all');
  assert.equal(allGroups.length, 6);
  assert.ok(countTotalSkills(allGroups) > 25);

  const backendGroups = filterSkillGroups(SKILL_GROUPS, 'backend');
  assert.equal(backendGroups.length, 3);
  assert.ok(backendGroups.every((group) => group.domain === 'backend'));

  const dsGroups = filterSkillGroups(SKILL_GROUPS, 'data-science');
  assert.equal(dsGroups.length, 1);
  assert.equal(dsGroups[0]?.id, 'data-ml');
});

test('validateContactForm rejects empty or malformed fields and accepts valid input', () => {
  const invalid = validateContactForm({
    name: '',
    email: 'invalid-email',
    subject: 'Hi',
    message: 'Too short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    name: 'Ananya Verma',
    email: 'ananya@example.com',
    subject: 'Java Intern Opportunity',
    message: 'We would love to schedule a technical conversation about our backend team.',
  });
  assert.equal(valid.isValid, true);
  assert.deepEqual(valid.errors, {});
});
