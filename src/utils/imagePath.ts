type ImageSize =
  "w45" |
  "w92" |
  "w154" |
  "w185" |
  "w342" |
  "w500" |
  "w632" |
  "w780" |
  "w1280" |
  "original"
export const imagePath = (path: string | null, size: ImageSize) => `https://image.tmdb.org/t/p/${size}/${path}`
