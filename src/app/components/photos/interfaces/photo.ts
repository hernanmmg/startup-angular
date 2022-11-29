export interface ApiPixabayResponse {
  total: number;
  totalhits: number;
  hits: Photo[];
}

export interface Photo {
  id: number;
  pageURL: string;
  type: ImageType;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number
  webformatHeight: number;
  largeImageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  collections: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
}

export type ImageType = "all" | "photo" | "illustration" | "vector";

export type PhotosSync = Photo[] | null | undefined;
export type PhotoSync = Photo | null | undefined;
