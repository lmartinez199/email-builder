import { STARTER_TEMPLATES, type StarterTemplate } from '@/lib/starter-templates';
import { CATEGORY_COLORS } from '@/lib/constants';
import { X } from 'lucide-react';

interface StarterPickerProps {
  open: boolean;
  onSelect: (tpl: StarterTemplate) => void;
  onClose: () => void;
}

export function StarterPicker({ open, onSelect, onClose }: StarterPickerProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
          <div>
            <h2 className="text-sm font-semibold text-zinc-100">Elegir plantilla base</h2>
            <p className="text-xs text-zinc-500 mt-0.5">Selecciona una plantilla para empezar</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-md text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 p-6">
          {STARTER_TEMPLATES.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => onSelect(tpl)}
              className="text-left rounded-xl border border-zinc-800 bg-zinc-800/40 hover:border-indigo-500/50 hover:bg-zinc-800 p-4 transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-sm font-medium text-zinc-100 group-hover:text-white">{tpl.label}</span>
                <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-medium ring-1 ${CATEGORY_COLORS[tpl.category] ?? CATEGORY_COLORS.general}`}>
                  {tpl.category}
                </span>
              </div>
              <p className="text-xs text-zinc-500 mb-2">{tpl.description}</p>
              {tpl.variables.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {tpl.variables.slice(0, 3).map((v) => (
                    <span key={v} className="inline-flex rounded bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-mono text-indigo-400 ring-1 ring-indigo-500/20">
                      {`{{${v}}}`}
                    </span>
                  ))}
                  {tpl.variables.length > 3 && (
                    <span className="text-[10px] text-zinc-600">+{tpl.variables.length - 3}</span>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
