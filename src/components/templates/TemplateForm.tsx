import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { VisualEditor } from '@/components/editor/VisualEditor';
import { StarterPicker } from './StarterPicker';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { VariableTag } from '@/components/ui/VariableTag';
import { db } from '@/lib/api';
import type { Template } from '@/types/template';
import type { StarterTemplate } from '@/lib/starter-templates';
import { cn } from '@/lib/utils';
import {
  ArrowLeft, Save, Eye, Code2, Paintbrush,
  LayoutTemplate, Plus,
} from 'lucide-react';

interface TemplateFormProps {
  template?: Template;
}

type ViewMode = 'visual' | 'code' | 'preview';

export function TemplateForm({ template }: TemplateFormProps) {
  const navigate = useNavigate();
  const isEdit = !!template;

  const [name, setName] = useState(template?.name ?? '');
  const [subject, setSubject] = useState(template?.subject ?? '');
  const [category, setCategory] = useState(template?.category ?? '');
  const [content, setContent] = useState(template?.htmlContent ?? '');
  const [variables, setVariables] = useState<string[]>(template?.variables ?? []);
  const [isActive, setIsActive] = useState(template?.isActive ?? true);
  const [newVar, setNewVar] = useState('');
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [view, setView] = useState<ViewMode>('visual');
  const [showPicker, setShowPicker] = useState(!isEdit);

  function applyStarter(tpl: StarterTemplate) {
    setName(tpl.label);
    setSubject(tpl.subject);
    setCategory(tpl.category);
    setContent(tpl.htmlContent);
    setVariables(tpl.variables);
    setShowPicker(false);
  }

  const detectVariables = useCallback((src: string) => {
    const matches = [...src.matchAll(/\{\{([^#/>{}\s][^{}\s]*)\}\}/g)];
    return [...new Set(matches.map((m) => m[1]))];
  }, []);

  function handleContentChange(value: string) {
    setContent(value);
    const detected = detectVariables(value);
    setVariables((prev) => [...new Set([...prev, ...detected])]);
  }

  function addVariable() {
    const v = newVar.trim();
    if (!v || variables.includes(v)) return;
    setVariables((prev) => [...prev, v]);
    setNewVar('');
  }

  async function handleSave() {
    if (!name || !subject || !category || !content) {
      setFormError('Completa los campos obligatorios: nombre, subject, categoría y contenido');
      return;
    }
    setFormError(null);
    setSaving(true);
    try {
      const payload = { name, subject, category, htmlContent: content, variables, isActive };
      if (isEdit) {
        await db.update(template.id, payload);
      } else {
        await db.create(payload);
      }
      void navigate('/');
    } catch (e) {
      setFormError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  const VIEW_BUTTONS: [ViewMode, string, React.ReactNode][] = [
    ['visual', 'Visual', <Paintbrush key="v" className="h-3.5 w-3.5" />],
    ['code', 'Código', <Code2 key="c" className="h-3.5 w-3.5" />],
    ['preview', 'Preview', <Eye key="p" className="h-3.5 w-3.5" />],
  ];

  return (
    <div className="flex flex-col h-screen bg-zinc-950">
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-3 border-b border-zinc-800 bg-zinc-900 shrink-0">
        <Button variant="ghost" size="icon" onClick={() => { void navigate('/'); }}>
          <ArrowLeft className="h-4 w-4" />
        </Button>

        <div className="flex-1 min-w-0 flex items-center gap-2">
          <h1 className="text-sm font-semibold text-zinc-100 truncate">
            {isEdit ? template.name : 'Nuevo template'}
          </h1>
        </div>

        {!isEdit && (
          <Button variant="outline" size="sm" onClick={() => setShowPicker(true)}>
            <LayoutTemplate className="h-3.5 w-3.5" />
            Plantillas base
          </Button>
        )}

        {/* View toggles */}
        <div className="flex items-center gap-1 bg-zinc-800/60 rounded-lg p-1">
          {VIEW_BUTTONS.map(([v, label, icon]) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md transition-colors',
                view === v ? 'bg-zinc-700 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800',
              )}
            >
              {icon}{label}
            </button>
          ))}
        </div>

        {formError && (
          <p className="text-xs text-red-400 max-w-xs truncate" title={formError}>{formError}</p>
        )}
        <Button onClick={() => { void handleSave(); }} disabled={saving}>
          <Save className="h-3.5 w-3.5" />
          {saving ? 'Guardando...' : 'Guardar'}
        </Button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-60 border-r border-zinc-800 bg-zinc-900 flex flex-col overflow-y-auto shrink-0">
          <div className="p-4 space-y-4">
            {/* Campos */}
            {([
              ['Nombre *', name, setName, 'Mi template'],
              ['Subject *', subject, setSubject, '¡Hola {{name}}!'],
              ['Categoría *', category, setCategory, 'transactional'],
            ] as [string, string, (v: string) => void, string][]).map(([label, value, setter, placeholder]) => (
              <div key={label} className="space-y-1.5">
                <label className="text-xs text-zinc-400">{label}</label>
                <Input value={value} onChange={(e) => setter(e.target.value)} placeholder={placeholder} />
              </div>
            ))}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isActive"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="h-3.5 w-3.5 accent-indigo-500 rounded"
              />
              <label htmlFor="isActive" className="text-xs text-zinc-400 cursor-pointer">Activo</label>
            </div>

            <div className="border-t border-zinc-800 pt-4 space-y-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">Variables detectadas</p>
              <div className="flex flex-wrap gap-1.5">
                {variables.length === 0 && (
                  <p className="text-xs text-zinc-600 italic">Auto-detectadas del contenido</p>
                )}
                {variables.map((v) => (
                  <VariableTag key={v} name={v} onRemove={() => setVariables((p) => p.filter((x) => x !== v))} />
                ))}
              </div>
              <div className="flex gap-1.5">
                <Input
                  value={newVar}
                  onChange={(e) => setNewVar(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addVariable()}
                  placeholder="nueva_variable"
                  className="h-7 text-xs font-mono"
                />
                <Button variant="outline" size="icon" onClick={addVariable}>
                  <Plus className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Editor área */}
        <div className="flex-1 overflow-hidden">
          {view === 'visual' && (
            <VisualEditor content={content} onChange={handleContentChange} />
          )}

          {view === 'code' && (
            <div className="h-full flex flex-col bg-zinc-950">
              <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900 shrink-0">
                <span className="text-xs text-zinc-500">HTML directo — edita el código del email</span>
              </div>
              <textarea
                value={content}
                onChange={(e) => handleContentChange(e.target.value)}
                className="flex-1 w-full p-4 bg-zinc-950 text-zinc-300 font-mono text-xs resize-none outline-none border-none"
                spellCheck={false}
              />
            </div>
          )}

          {view === 'preview' && (
            <div className="h-full flex flex-col">
              <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900 shrink-0">
                <span className="text-xs text-zinc-500">Vista previa del email renderizado</span>
              </div>
              <div className="flex-1 bg-white overflow-auto">
                <iframe
                  srcDoc={content}
                  className="w-full h-full border-none"
                  sandbox="allow-same-origin"
                  title="Preview"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <StarterPicker open={showPicker} onSelect={applyStarter} onClose={() => setShowPicker(false)} />
    </div>
  );
}
