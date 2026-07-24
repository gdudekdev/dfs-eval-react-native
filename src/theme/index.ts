export const palette = {
  green: {tint: '#EEF9F3', accent: '#119B4A'},
  orange: {tint: '#FEEDE0', accent: '#FD660B'},
  blue: {tint: '#E9EEFC', accent: '#166CFD'},
};

export type AccentColor = (typeof palette)[keyof typeof palette];

export const colors = {
  screen: '#FFFFFF',
  card: '#FFFFFF',
  textPrimary: '#1B1B2F',
  textSecondary: '#8E8EA9',
  textMuted: '#A6A6BF',
  border: '#EEF0F4',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const radius = {
  sm: 12,
  md: 16,
  lg: 20,
};

export const layout = {
  maxContentWidth: 560,
};