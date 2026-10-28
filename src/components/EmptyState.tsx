export default function EmptyState({
  title = "Nothing here",
  message,
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center border-y border-border py-28 text-center">
      <span className="flex h-12 w-12 items-center justify-center border border-border text-muted-foreground">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.16-5.16a2.25 2.25 0 0 1 3.18 0l5.16 5.16m-1.5-1.5 1.41-1.41a2.25 2.25 0 0 1 3.18 0l2.91 2.91M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
        </svg>
      </span>
      <p className="mt-6 font-serif text-3xl leading-tight">{title}</p>
      {message && <p className="mt-2 max-w-sm text-sm text-muted-foreground text-pretty">{message}</p>}
    </div>
  );
}