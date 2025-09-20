// src/utils/loadGoogleMaps.js
import { Loader } from "@googlemaps/js-api-loader";

let loaderPromise = null;

export function loadGoogleMaps() {
  if (!loaderPromise) {
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    if (!key) {
      loaderPromise = Promise.reject(new Error("VITE_GOOGLE_MAPS_API_KEY is not set"));
    } else {
      const loader = new Loader({
        apiKey: key,
        version: "weekly",
        libraries: ["places"], // Places만 로드
      });
      loaderPromise = loader.load();
    }
  }
  return loaderPromise;
}
