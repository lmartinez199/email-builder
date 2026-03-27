import { useNavigate, useParams } from 'react-router-dom';
import { useTemplate } from '@/hooks/useTemplate';
import { TemplateForm } from '@/components/templates/TemplateForm';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export function EditTemplatePage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { template, loading, error } = useTemplate(id ?? null);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center text-zinc-500 text-sm">
        Cargando template...
      </div>
    );
  }

  if (error ?? !template) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <p className="text-red-400 text-sm">{error ?? 'Template no encontrado'}</p>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => { void navigate('/'); }}>
            <ArrowLeft className="h-3.5 w-3.5" />
            Volver
          </Button>
          <Button variant="outline" onClick={() => window.location.reload()}>
            <RefreshCw className="h-3.5 w-3.5" />
            Reintentar
          </Button>
        </div>
      </div>
    );
  }

  return <TemplateForm template={template} />;
}
