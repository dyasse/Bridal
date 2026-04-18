# Bridal

## Vercel Deployment Check

I reviewed the project for production deployment on Vercel and validated the build locally.

### Verified

- `npm ci` installs dependencies correctly.
- `npm run build` completes successfully with Next.js 15.
- App routes are generated as static output where expected.
- Node.js engine is set in `package.json` (`>=18.18.0`), compatible with Vercel.

### Added Deployment Config

A `vercel.json` file is included to make deployment behavior explicit:

- Uses Next.js framework detection.
- Uses clean install via `npm ci`.
- Uses `npm run build` for production build.
- Leaves output directory to Vercel defaults for Next.js (prevents runtime 404 routing issues).

### Recommended Vercel Project Settings

In Vercel dashboard:

1. **Framework Preset**: Next.js
2. **Build Command**: `npm run build`
3. **Install Command**: `npm ci`
4. **Node.js Version**: 18.x or 20.x

If deployment still fails, share the exact Vercel build log and I can pinpoint the failing step.
