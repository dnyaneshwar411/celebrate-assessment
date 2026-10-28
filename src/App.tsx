import PhotoGallery from "./components/PhotoGallery";
import GlobalStore from "./state/GlobalStore";

function App() {
  return (
    <GlobalStore>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {/* Sticky frosted-glass header */}
        <header
          className="sticky top-0 z-10 border-b border-[var(--border)]"
          style={{
            background: "rgba(249,250,251,0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
                Photo Gallery
              </h1>
              <p className="text-xs text-[var(--muted-foreground)]">
                A curated collection of photography
              </p>
            </div>
            <span
              className="rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[var(--muted-foreground)]"
            >
              Picsum
            </span>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-6 py-10">
          <PhotoGallery />
        </main>

        <footer className="border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-[var(--muted-foreground)]">
            © {new Date().getFullYear()} Photo Gallery · Built with React
          </div>
        </footer>
      </div>
    </GlobalStore>
  );
}

export default App;
