export const formatSpentTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  return `${hours} h ${remaining.toString().padStart(2, '0')}`;
};