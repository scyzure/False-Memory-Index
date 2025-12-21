
import { Collection, Photo } from './types';

const generatePhotos = (count: number, baseId: string): Photo[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${baseId}-${i}`,
    url: `https://picsum.photos/seed/${baseId}-${i}/800/600`,
    title: `Fragment ${i + 1}`,
    category: 'Archive',
    location: 'Unknown',
    year: '2024',
    description: ''
  }));
};

export const COLLECTIONS: Collection[] = [
  {
    id: 'tokyo',
    title: 'Tokyo Nocturne',
    coverUrl: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1200',
    photos: generatePhotos(30, 'tokyo')
  },
  {
    id: 'iceland',
    title: 'Stark Horizon',
    coverUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200',
    photos: generatePhotos(30, 'iceland')
  },
  {
    id: 'echoes',
    title: 'Silent Echo',
    coverUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200',
    photos: generatePhotos(30, 'echoes')
  },
  {
    id: 'canopy',
    title: 'Canopy Trace',
    coverUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200',
    photos: generatePhotos(30, 'canopy')
  }
];

export const PHOTOS: Photo[] = COLLECTIONS.flatMap(c => c.photos);
export const CATEGORIES = ['All'];
