interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      <nav className="w-16 border-r border-zinc-800/60 bg-zinc-900/80 flex flex-col items-center py-5 gap-6 shrink-0">
        {/* Logo mark */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/25 text-white text-sm font-bold select-none">
          E
        </div>
        {/* Divider */}
        <div className="w-6 h-px bg-zinc-800" />
      </nav>
      <main className="flex-1 overflow-hidden flex flex-col">
        {children}
      </main>
    </div>
  );
}
