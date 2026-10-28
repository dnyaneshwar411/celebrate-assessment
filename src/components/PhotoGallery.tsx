import { useMemo, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import { buildFuzzyRegex } from "../utils/fuzzy";
import PhotoCard from "./PhotoCard";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";
import EmptyState from "./EmptyState";
import SearchBar from "./SearchBar";

export default function PhotoGallery() {
  const { loading, error, photos } = useFetchPhotos();
  const [query, setQuery] = useState("");

  const regex = useMemo(() => buildFuzzyRegex(query), [query]);

  const filtered = useMemo(() => {
    if (!regex) return photos;
    return photos.filter((photo) => regex.test(photo.author));
  }, [photos, regex]);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div className="w-full max-w-xs">
          <SearchBar value={query} onChange={setQuery} />
        </div>
        {!loading && (
          <p className="shrink-0 text-xs text-[var(--muted-foreground)]">
            {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No matching photos"
          message={`No authors match "${query}". Try a different search.`}
        />
      ) : (
        <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filtered.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} onOpen={() => {}} />
          ))}
        </div>
      )}
    </div>
  );
}
