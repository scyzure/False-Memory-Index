
# False Memory Index

A minimalist, high-fidelity photography portfolio featuring a horizontal gallery and a 3D spherical archive.

## Key Features
- **Zero AI Dependency**: All text and metadata is managed manually.
- **Offline Capable**: Runs entirely client-side.
- **Minimal Aesthetic**: Dark theme with film grain and smooth transitions.
- **Immersive Navigation**: Cursor-driven horizontal scrolling and 3D index view.

## Customization
To add your own photos and text:
1. Open `constants.ts`.
2. Follow the template in the `COLLECTIONS` array.
3. Replace `url` and `coverUrl` with links to your hosted images.

## Deployment
1. Run `npm run build` to generate the production bundle.
2. Upload the `dist/` folder to GitHub Pages, Netlify, Vercel, or any static host.
3. No environment variables are required.
