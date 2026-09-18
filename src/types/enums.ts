export const SectionId = {
  Home: 'home',
  About: 'about',
  Experience: 'experience',
  Skills: 'skills',
  Education: 'education',
  Projects: 'projects',
  Contact: 'contact',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

export const ThemeColors = {
  Primary: 'var(--primary-color)',
  Secondary: 'var(--secondary-color)',
  Background: 'var(--bg-color)',
  Text: 'var(--text-color)',
  TextMuted: 'var(--text-muted)',
} as const;
