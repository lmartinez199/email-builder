import { cn } from '@/lib/utils';
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'w-full h-8 px-3 rounded-md text-sm bg-zinc-800 border text-zinc-100',
        'placeholder:text-zinc-600 focus:outline-none focus:ring-1 transition-colors',
        error
          ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
          : 'border-zinc-700 focus:border-indigo-500 focus:ring-indigo-500',
        className,
      )}
      {...props}
    />
  );
}
