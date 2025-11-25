export default function Badge({ children, icon: Icon, variant = 'default' }) {
  const variants = {
    default: 'bg-stong-800/50 text-stone-300',
    purple: 'bg-blue-500/20 text-blue-300',
    blue: 'bg-cyan-500/20 text-cyan-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-lg border border-slate-700/50 ${variants[variant]}`}
    >
      {Icon && <Icon size={14} />}
      {children}
    </span>
  );
}
