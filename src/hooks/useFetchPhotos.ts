import { useEffect, useState } from "react";
import type { Photo } from "../types";
import { CONSTANTS } from "../config";

export default function useFetchPhotos() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(function () {
    (async () => {
      fetch(`${CONSTANTS.API}?limit=30`)
        .then(data => data.json())
        .then(data => setPhotos(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false))
    })();
  }, [])

  return {
    loading,
    error,
    photos
  }
}