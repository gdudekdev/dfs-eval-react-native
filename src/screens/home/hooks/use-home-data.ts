import {useCallback, useEffect, useState} from 'react';
import {Dashboard, fetchDashboard} from '../../../api';

export type RequestStatus = 'loading' | 'success' | 'error';

export const useHomeData = () => {
  const [status, setStatus] = useState<RequestStatus>('loading');
  const [data, setData] = useState<Dashboard | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async () => {
    setStatus('loading');
    try {
      const dashboard = await fetchDashboard();
      setData(dashboard);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }, []);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const dashboard = await fetchDashboard();
      setData(dashboard);
      setStatus('success');
    } catch {
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return {status, data, refreshing, reload: load, refresh};
};