# Mospace website

Static marketing, privacy policy, and support site for Mospace, exported for GitHub Pages at `https://aryapras22.github.io/mospace-website/`.

## Development

Install dependencies and run the local server:

```bash
npm ci
npm run dev
```

Build the static export into `out/` and run ESLint and TypeScript checks:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, builds the static export into `./out`, and deploys it to GitHub Pages.
