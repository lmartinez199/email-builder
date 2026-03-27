import { useState, useEffect } from 'react';
import { db } from '@/lib/api';
import type { Template } from '@/types/template';

export function useTemplate(id: string | null) {
  const [template, setTemplate] = useState<Template | null>(null);
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    db.findById(id)
      .then((t) => {
        if (!cancelled) {
          setTemplate(t ?? null);
          setLoading(false);
        }
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setError((e as Error).message);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, [id]);

  return { template, loading, error };
}
