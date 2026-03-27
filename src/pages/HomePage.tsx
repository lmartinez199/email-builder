import { TemplateList } from '@/components/templates/TemplateList';

export function HomePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b border-zinc-800 px-8 py-6">
        <h1 className="text-lg font-semibold text-zinc-100">Email Builder</h1>
        <p className="text-sm text-zinc-500 mt-0.5">Crea y edita templates de email con editor visual</p>
      </div>
      <div className="flex-1 px-8 py-6 overflow-auto">
        <TemplateList />
      </div>
    </div>
  );
}
