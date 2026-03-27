import { X } from 'lucide-react';

interface VariableTagProps {
  name: string;
  onRemove?: () => void;
}

export function VariableTag({ name, onRemove }: VariableTagProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded bg-indigo-500/10 pl-2 pr-1 py-0.5 text-[11px] font-mono text-indigo-300 ring-1 ring-indigo-500/20">
      {`{{${name}}}`}
      {onRemove && (
        <button onClick={onRemove} className="hover:text-red-400 transition-colors">
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
}
