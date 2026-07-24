export interface Profile {
  name: string;
  description: string;
  mainGoal: string;
  targetWeight: number;
  favoriteActivity: string;
  level: string;
}

export const PROFILE: Profile = {
  name: 'Léo Martin',
  description: 'Sportif amateur',
  mainGoal: 'Courir 3 fois par semaine',
  targetWeight: 75,
  favoriteActivity: 'Running',
  level: 'Débutant',
};