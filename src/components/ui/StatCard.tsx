import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: number | string;
  icon: LucideIcon;
  color: string;
  bg: string;
  loading?: boolean;
}

export function StatCard({ label, value, icon: Icon, color, bg, loading }: StatCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 flex items-center gap-4">
      <div className={cn('flex h-9 w-9 items-center justify-center rounded-lg', bg)}>
        <Icon className={cn('h-4 w-4', color)} />
      </div>
      <div>
        <p className="text-2xl font-bold text-zinc-100">{loading ? '—' : value}</p>
        <p className="text-xs text-zinc-500">{label}</p>
      </div>
    </div>
  );
}
