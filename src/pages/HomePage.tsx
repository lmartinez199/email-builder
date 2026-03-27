import { TemplateList } from '@/components/templates/TemplateList';

export function HomePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-zinc-800/60 px-8 py-5 bg-zinc-900/40 shrink-0">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-base font-semibold bg-linear-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Email Builder
            </h1>
            <p className="text-xs text-zinc-600 mt-0.5">Crea y edita templates de email con editor visual</p>
          </div>
        </div>
      </div>
      <div className="flex-1 px-8 py-6 overflow-auto">
        <TemplateList />
      </div>
    </div>
  );
}
