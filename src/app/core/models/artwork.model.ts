export interface Artwork {
  name: string;
  year: number;
  description: string;
  source: string;
  artist: { image: string; name: string };
  images: { thumbnail: string; hero: { small: string; large: string }; gallery: string };
}