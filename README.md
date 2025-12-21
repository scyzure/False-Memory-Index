
# False Memory Index

An immersive, 3D spherical photography portfolio.

## Deployment Guide (GitHub / Vercel / Netlify)

Because this project uses **React (TSX)** and **Environment Variables**, you cannot simply open `index.html` in a browser. You must "build" it first.

### 1. Local Development
1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev` (or `vite`)

### 2. Building for Production
To generate the static files for GitHub Pages:
1. Run `npm run build`.
2. This will create a `dist/` folder.
3. Upload the *contents* of the `dist/` folder to your host.

### 3. Handling the API Key (Gemini)
The app is designed to be **robust**. 
- If you provide a `GEMINI_API_KEY` in your environment, it will generate AI poetic insights for your photos.
- If you **don't** provide one, the app detects the missing key and automatically switches to **Offline Mode**, using beautiful pre-written fallback insights. The site will not crash.

## Tech Stack
- **React 19**
- **Framer Motion** (3D Transitions)
- **Tailwind CSS**
- **Vite** (Build Tool)
- **Google Gemini API** (Optional AI insights)
