export default function ErrorState({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center border-y border-border py-28 text-center">
      <p className="font-serif text-3xl leading-tight">Something broke</p>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground text-pretty">{error.message}</p>
      <button
        onClick={() => location.reload()}
        className="mt-8 border border-foreground bg-foreground px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}