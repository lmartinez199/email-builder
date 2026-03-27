import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTemplates } from '@/hooks/useTemplates';
import { db } from '@/lib/api';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { StatCard } from '@/components/ui/StatCard';
import { VariableTag } from '@/components/ui/VariableTag';
import { cn } from '@/lib/utils';
import {
  Plus, Search, RefreshCw, LayoutTemplate,
  CheckCircle2, Tag, Pencil, Trash2,
} from 'lucide-react';
import { CATEGORY_COLORS } from '@/lib/constants';

export function TemplateList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { templates, loading, refetch } = useTemplates();

  const filtered = templates.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.subject.toLowerCase().includes(search.toLowerCase()),
  );

  async function handleDelete(id: string) {
    if (!confirm('¿Eliminar este template? Esta acción no se puede deshacer.')) return;
    setDeletingId(id);
    try {
      await db.remove(id);
      void refetch();
    } catch (err) {
      alert(`Error al eliminar: ${err instanceof Error ? err.message : 'Error desconocido'}`);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total', value: templates.length, icon: LayoutTemplate, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
          { label: 'Activos', value: templates.filter((t) => t.isActive).length, icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          { label: 'Categorías', value: new Set(templates.map((t) => t.category)).size, icon: Tag, color: 'text-amber-400', bg: 'bg-amber-500/10' },
        ].map((stat) => (
          <StatCard key={stat.label} {...stat} loading={loading} />
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-zinc-500" />
          <Input
            placeholder="Buscar por nombre o subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <Button variant="ghost" size="icon" onClick={() => { void refetch(); }}>
          <RefreshCw className="h-3.5 w-3.5" />
        </Button>
        <Button onClick={() => { void navigate('/new'); }}>
          <Plus className="h-3.5 w-3.5" />
          Nuevo template
        </Button>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-zinc-800/60 overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-800/60 bg-zinc-900">
              {['Nombre', 'Subject', 'Categoría', 'Variables', 'Estado', ''].map((h) => (
                <th key={h} className="text-left px-5 py-3 text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/40 bg-zinc-900/30">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <tr key={i}>
                  {Array.from({ length: 6 }).map((_, j) => (
                    <td key={j} className="px-5 py-4">
                      <div className="h-3 bg-zinc-800/80 animate-pulse rounded-md" />
                    </td>
                  ))}
                </tr>
              ))
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-5 py-14 text-center text-zinc-600 text-sm">
                  {search ? 'Sin resultados' : 'No hay templates — crea el primero'}
                </td>
              </tr>
            ) : (
              filtered.map((t) => (
                <tr key={t.id} className="hover:bg-zinc-800/40 transition-colors group">
                  <td className="px-5 py-3.5">
                    <span className="font-medium text-zinc-100">{t.name}</span>
                  </td>
                  <td className="px-5 py-3.5 text-zinc-400 max-w-xs truncate">{t.subject}</td>
                  <td className="px-5 py-3.5">
                    <span className={cn('inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ring-1', CATEGORY_COLORS[t.category] ?? CATEGORY_COLORS.general)}>
                      {t.category}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex flex-wrap gap-1">
                      {t.variables.slice(0, 3).map((v) => (
                        <VariableTag key={v} name={v} />
                      ))}
                      {t.variables.length > 3 && (
                        <span className="text-[11px] text-zinc-600">+{t.variables.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    {t.isActive ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Activo
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />Inactivo
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" onClick={() => { void navigate(`/edit/${t.id}`); }}>
                        <Pencil className="h-3.5 w-3.5" />
                      </Button>
                      <Button
                        variant="danger"
                        size="icon"
                        disabled={deletingId === t.id}
                        onClick={() => { void handleDelete(t.id); }}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
