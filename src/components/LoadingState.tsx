export default function LoadingState() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading photos"
      className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-4"
    >
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="shimmer h-64 overflow-hidden rounded-2xl"
          style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}
        />
      ))}
      <span className="sr-only">Loading…</span>
    </div>
  );
}
