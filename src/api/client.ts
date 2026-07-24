import {Dashboard} from './types';

const API_URL = 'https://labs.nicolas.sh/reactnative/evmod/api/';

export const fetchDashboard = async (): Promise<Dashboard> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json() as Promise<Dashboard>;
};
