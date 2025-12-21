
export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  location: string;
  description: string;
  year: string;
  technicalDetails?: string;
}

export interface Collection {
  id: string;
  title: string;
  coverUrl: string;
  description?: string;
  photos: Photo[];
}
