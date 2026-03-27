import { useState, useEffect, useCallback } from 'react';
import { db } from '@/lib/api';
import type { Template } from '@/types/template';

export function useTemplates(category?: string) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await db.findAll(category);
      setTemplates(data);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => { void fetch(); }, [fetch]);

  return { templates, loading, error, refetch: fetch };
}
