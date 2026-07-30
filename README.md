# Green

A mobile-first social feed prototype built with Ionic React and Capacitor. It explores a four-tab app shell with content discovery, search, messages, profiles, and camera-assisted barcode scanning.

## Highlights

- Feed with pull-to-refresh interactions
- Search and trending-topic views
- Message and profile layouts
- Barcode scanning through a native Capacitor plugin
- Shared Ionic UI that can target the web, iOS, and Android

## Stack

- React 18 and TypeScript
- Ionic React 8
- Capacitor 6
- Vite 5
- Vitest and Cypress

## Run locally

```bash
npm install
npm run dev
```

Create a production web build with:

```bash
npm run build
```

To sync and open the iOS project after installing the native toolchain:

```bash
npm run build-sync-open-ios
```

## Project status

This repository is an experimental prototype. The current barcode-scanner dependency targets Capacitor 5 while the app uses Capacitor 6, so the native dependency should be upgraded or replaced before treating native builds as production-ready.

## License

[MIT](LICENSE)
