# Mospace website

Static marketing, privacy policy, and support site for Mospace, exported as static files and hosted on Vercel at `https://mospace.caffeine-junkie.xyz/`.

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

Vercel builds and deploys every push to `main`.
