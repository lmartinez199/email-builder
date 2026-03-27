import { useEffect, useRef } from 'react';
import type { Editor as GrapeEditor } from 'grapesjs';
import { EMAIL_BLOCKS } from './email-blocks';
import { useEditorStore } from '@/store/editorStore';
import { Monitor, Smartphone, Layers, LayoutGrid } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VisualEditorProps {
  content: string;
  onChange: (html: string) => void;
}

export function VisualEditor({ content, onChange }: VisualEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<GrapeEditor | null>(null);
  const { device, activePanel, setDevice, setActivePanel } = useEditorStore();

  useEffect(() => {
    if (!containerRef.current) return;
    let destroyed = false;

    void import('grapesjs').then((mod) => {
      if (destroyed || !containerRef.current) return;

      const grapesjs = mod.default;

      const editor: GrapeEditor = grapesjs.init({
        container: containerRef.current,
        fromElement: false,
        storageManager: false,
        noticeOnUnload: false,
        height: '100%',
        width: '100%',
        components: content || '',

        // Bloques de email
        blockManager: {
          appendTo: '#blocks-container',
          blocks: EMAIL_BLOCKS.flatMap((cat) =>
            cat.blocks.map((b) => ({
              id: b.id,
              label: b.label,
              media: b.media,
              content: b.content,
              category: cat.category,
            })),
          ),
        },

        // Panel de capas
        layerManager: { appendTo: '#layers-container' },

        // Panel de estilos
        styleManager: {
          appendTo: '#styles-container',
          sectors: [
            {
              name: 'Texto',
              open: true,
              properties: [
                'font-family', 'font-size', 'font-weight', 'color',
                'text-align', 'line-height', 'text-decoration',
              ],
            },
            {
              name: 'Fondo',
              open: false,
              properties: ['background-color'],
            },
            {
              name: 'Espaciado',
              open: false,
              properties: ['padding', 'margin'],
            },
            {
              name: 'Borde',
              open: false,
              properties: ['border-radius', 'border'],
            },
            {
              name: 'Dimensiones',
              open: false,
              properties: ['width', 'max-width', 'height'],
            },
          ],
        },

        // Canvas email-safe
        canvas: {
          styles: ['body { margin: 0; padding: 0; background: #e4e4e7; font-family: Arial, sans-serif; }'],
        },

        // Sin paneles propios de GrapesJS — los construimos nosotros
        panels: { defaults: [] },

        assetManager: { assets: [], upload: false },
      });

      editorRef.current = editor;

      // Sincronizar cambios al padre con debounce
      let debounce: ReturnType<typeof setTimeout>;
      editor.on('component:update', () => {
        clearTimeout(debounce);
        debounce = setTimeout(() => {
          onChange(editor.getHtml());
        }, 400);
      });
    });

    return () => {
      destroyed = true;
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
    // Solo se inicializa una vez
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sincronizar device con GrapesJS
  useEffect(() => {
    if (!editorRef.current) return;
    editorRef.current.setDevice(device === 'mobile' ? 'Mobile portrait' : 'Desktop');
  }, [device]);

  // Cargar contenido externo en GrapesJS (ej. al seleccionar plantilla predeterminada)
  useEffect(() => {
    if (!editorRef.current || !content) return;
    const current = editorRef.current.getHtml();
    if (current !== content) {
      editorRef.current.setComponents(content);
    }
  }, [content]);

  return (
    <div className="flex h-full overflow-hidden bg-zinc-950">
      {/* Panel izquierdo */}
      <aside className="w-56 border-r border-zinc-800 bg-zinc-900 flex flex-col overflow-hidden shrink-0">
        {/* Tabs */}
        <div className="flex border-b border-zinc-800">
          {([
            ['blocks', 'Bloques', <LayoutGrid key="b" className="h-3.5 w-3.5" />],
            ['layers', 'Capas', <Layers key="l" className="h-3.5 w-3.5" />],
          ] as const).map(([key, label, icon]) => (
            <button
              key={key}
              onClick={() => setActivePanel(key)}
              className={cn(
                'flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs transition-colors',
                activePanel === key
                  ? 'text-zinc-100 border-b-2 border-indigo-500'
                  : 'text-zinc-500 hover:text-zinc-300',
              )}
            >
              {icon}{label}
            </button>
          ))}
        </div>

        {/* Bloques */}
        <div
          id="blocks-container"
          className={cn('flex-1 overflow-auto', activePanel !== 'blocks' && 'hidden')}
        />

        {/* Capas */}
        <div
          id="layers-container"
          className={cn('flex-1 overflow-auto', activePanel !== 'layers' && 'hidden')}
        />
      </aside>

      {/* Canvas */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Barra de herramientas del canvas */}
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-2 shrink-0">
          {/* Device toggle */}
          <div className="flex items-center gap-1 bg-zinc-800 rounded-lg p-1">
            <button
              onClick={() => setDevice('desktop')}
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors',
                device === 'desktop' ? 'bg-zinc-700 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300',
              )}
            >
              <Monitor className="h-3.5 w-3.5" />
              Desktop
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors',
                device === 'mobile' ? 'bg-zinc-700 text-zinc-100' : 'text-zinc-500 hover:text-zinc-300',
              )}
            >
              <Smartphone className="h-3.5 w-3.5" />
              Mobile
            </button>
          </div>

          <span className="text-xs text-zinc-600">
            Arrastra bloques al canvas — doble clic para editar texto
          </span>
        </div>

        {/* GrapesJS canvas */}
        <div ref={containerRef} className="flex-1 min-h-0" />
      </div>

      {/* Panel derecho — estilos */}
      <aside className="w-56 border-l border-zinc-800 bg-zinc-900 flex flex-col overflow-hidden shrink-0">
        <div className="px-3 py-2.5 border-b border-zinc-800">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">Propiedades</p>
        </div>
        <div id="styles-container" className="flex-1 overflow-auto" />
      </aside>
    </div>
  );
}
