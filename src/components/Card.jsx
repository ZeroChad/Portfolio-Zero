export default function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-stone-800 bg-stone-900/60 p-6 shadow-lg shadow-black/40 ${className}`}
    >
      {children}
    </div>
  );
}
