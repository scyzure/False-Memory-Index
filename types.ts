
export interface Photo {
  id: string;
  url: string;
  title: string;
  category: string;
  location: string;
  description: string;
  year: string;
}

export interface Collection {
  id: string;
  title: string;
  coverUrl: string;
  photos: Photo[];
}

export interface AIInsight {
  mood: string;
  poeticCaption: string;
  technicalAnalysis: string;
}
