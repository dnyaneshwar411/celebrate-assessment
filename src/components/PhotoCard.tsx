import { useState } from "react";
import type { Photo } from "../types";
import { useGlobalStore } from "../state/GlobalStore";

export default function PhotoCard({
  photo,
}: {
  photo: Photo;
  index?: number;
  onOpen?: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const { liked, dispatch } = useGlobalStore();
  const isLiked = liked.has(photo.id);

  return (
    <div
      className="group relative h-64 overflow-hidden rounded-2xl"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.28s ease, transform 0.28s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.18), 0 4px 12px rgba(0,0,0,0.10)";
        el.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)";
        el.style.transform = "translateY(0)";
      }}
    >
      {!loaded && <div className="absolute inset-0 shimmer" />}
      <img
        src={photo.download_url}
        alt={`Photo by ${photo.author}`}
        loading="lazy"
        width={photo.width}
        height={photo.height}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 ease-out group-hover:scale-[1.05] ${
          loaded ? "animate-img-in opacity-100" : "opacity-0"
        }`}
      />

      <div
        className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 pb-4 pt-16"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.28) 50%, transparent 100%)",
        }}
      >
        <p className="truncate text-[13px] font-medium leading-none text-white/95 drop-shadow-sm">
          {photo.author}
        </p>

        <button
          type="button"
          onClick={() => dispatch({ type: "TOGGLE_LIKE", payload: photo.id })}
          aria-pressed={isLiked}
          aria-label={isLiked ? "Unlike" : "Like"}
          className={`flex h-8 w-8 shrink-0 items-center cursor-pointer justify-center rounded-lg backdrop-blur-sm transition-all duration-200 ${
            isLiked
              ? "bg-white/20 text-rose-400"
              : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-rose-300"
          }`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={isLiked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.75"
            style={{ transition: "transform 0.15s ease" }}
            className={isLiked ? "scale-110" : ""}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
