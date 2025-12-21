
import { Collection, Photo } from './types';

/**
 * MANUAL PORTFOLIO CONFIGURATION
 * Edit this file to add your own photos and text.
 */

export const COLLECTIONS: Collection[] = [
  {
    id: 'urban-isolation',
    title: 'Urban Isolation',
    coverUrl: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1200',
    description: 'A study of the quiet corners in the world’s loudest cities.',
    photos: [
      {
        id: 'ui-01',
        url: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1200',
        title: 'Shinjuku Blue',
        category: 'Street',
        location: 'Tokyo, JP',
        year: '2024',
        description: 'Captured during the blue hour in a forgotten alleyway. The light caught the steam from a local ramen shop perfectly.',
        technicalDetails: '35mm, f/1.4, 1/60s, ISO 800'
      },
      {
        id: 'ui-02',
        url: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200',
        title: 'Rain Echo',
        category: 'Street',
        location: 'Osaka, JP',
        year: '2024',
        description: 'Reflection of neon signs on a wet pavement after a summer storm.',
        technicalDetails: '50mm, f/2.0, 1/125s, ISO 400'
      }
    ]
  },
  {
    id: 'monoliths',
    title: 'Monoliths',
    coverUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200',
    description: 'Exploring the permanence of natural structures.',
    photos: [
      {
        id: 'm-01',
        url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200',
        title: 'Basalt Pillars',
        category: 'Landscape',
        location: 'Iceland',
        year: '2023',
        description: 'The geometric perfection of volcanic basalt against the crashing North Atlantic.',
        technicalDetails: '24mm, f/8, 1s, ISO 100'
      }
    ]
  }
];

export const PHOTOS: Photo[] = COLLECTIONS.flatMap(c => c.photos);
export const CATEGORIES = ['All', ...new Set(PHOTOS.map(p => p.category))];
