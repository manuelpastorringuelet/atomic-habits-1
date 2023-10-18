# How to make Next.js app a PWA (Progressive Web App)

## What is a PWA?

A PWA is a web application that can be installed on a user's device

## How to make a PWA?

1. Generate manifest.json and PWA icon using [SimiCart](https://www.simicart.com/manifest-generator.html/), do not use  "display": "browser", use "display": "standalone",
2. Extract manifest.webmanifest and PWA icon to public folder
3. Change manifest.webmanifest to manifest.json
4. Import manifest.json to app/layout.ts <head><link rel="manifest" href="/manifest.json" /></head>
5. Install next-pwa npm package
6. Update next.config.js to include PWA icon

```typescript
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
};

module.exports = withPWA(nextConfig);
```
