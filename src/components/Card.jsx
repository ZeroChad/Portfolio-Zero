export default function Card({ children, className = '' }) {
  return (
    <div
      className={`w-full max-w-full rounded-xl border border-stone-800 bg-stone-900/60 p-4 sm:p-6 shadow-lg shadow-black/40 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
