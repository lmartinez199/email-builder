import type { Template, CreateTemplateInput, UpdateTemplateInput } from '@/types/template';

const API = (import.meta.env.VITE_API_URL as string | undefined) ?? 'http://localhost:3001/api';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    const res = await fetch(`${API}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...options,
      signal: controller.signal,
    });
    if (res.status === 204) return undefined as T;
    const raw: unknown = await res.json();
    const body = raw as Record<string, unknown>;
    if (!res.ok) {
      const msg = typeof body['error'] === 'string' ? body['error'] : `HTTP ${res.status}`;
      throw new Error(msg);
    }
    return body as T;
  } finally {
    clearTimeout(timeout);
  }
}

export const db = {
  async findAll(category?: string): Promise<Template[]> {
    const qs = category ? `?category=${encodeURIComponent(category)}` : '';
    return request<Template[]>(`/templates${qs}`);
  },

  async findById(id: string): Promise<Template | undefined> {
    try {
      return await request<Template>(`/templates/${id}`);
    } catch (err) {
      console.error(`[db] findById(${id}) failed:`, err);
      return undefined;
    }
  },

  async create(input: CreateTemplateInput): Promise<Template> {
    return request<Template>('/templates', {
      method: 'POST',
      body: JSON.stringify(input),
    });
  },

  async update(id: string, input: UpdateTemplateInput): Promise<Template> {
    return request<Template>(`/templates/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(input),
    });
  },

  async remove(id: string): Promise<void> {
    await request<void>(`/templates/${id}`, { method: 'DELETE' });
  },
};
