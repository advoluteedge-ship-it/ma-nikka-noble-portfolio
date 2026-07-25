# Ma. Nikka Noble Portfolio

A responsive personal portfolio built with React and Vite. It presents Ma. Nikka Noble's digital marketing, WordPress development, SEO, analytics, and paid-media experience.

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the local address displayed in the terminal.

## Create a production build

```bash
npm run build
```

The finished static website will be created in the `dist` folder.

## Upload to GitHub

1. Create a new empty GitHub repository.
2. Open a terminal inside this project folder.
3. Run:

```bash
git init
git add .
git commit -m "Add React portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub details.

## Deploy

- **Vercel:** Import the GitHub repository. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
- **Netlify:** Import the repository. Build command: `npm run build`. Publish directory: `dist`.
- **GitHub Pages:** Use a GitHub Pages workflow that publishes the `dist` directory.

## Important files

- `src/App.jsx` - portfolio content and React components
- `src/styles.css` - responsive design and visual styling
- `public/assets/ma-nikka-noble.jpg` - profile image
- `public/assets/ma-nikka-noble-resume.pdf` - downloadable resume
