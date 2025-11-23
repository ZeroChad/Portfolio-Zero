export default function Badge({ children, icon: Icon, variant = 'default' }) {
  const variants = {
    default: 'bg-stong-800/50 text-stone-300',
    purple: 'bg-blue-500/20 text-blue-300',
    blue: 'bg-cyan-500/20 text-cyan-300',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm ${variants[variant]}`}
    >
      {Icon && <Icon size={14} />}
      {children}
    </span>
  );
}
