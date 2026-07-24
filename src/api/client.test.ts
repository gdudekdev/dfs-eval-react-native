import {fetchDashboard} from './client';

describe('fetchDashboard', () => {
  const dashboard = {
    stats: {sessions: 34, spentTime: 210, kcal: 753},
    goals: [{title: 'Courir plus souvent', target: '3 séances/semaine'}],
  };

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renvoie les données quand la réponse est OK', async () => {
    jest.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => dashboard,
    } as Response);

    await expect(fetchDashboard()).resolves.toEqual(dashboard);
  });

  it('lève une erreur quand la réponse est en échec', async () => {
    jest.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({}),
    } as Response);

    await expect(fetchDashboard()).rejects.toThrow('500');
  });
});
