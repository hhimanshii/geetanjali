# Geetanjali Salon — React revamp

A responsive, editorial website for Geetanjali Salon, built with React, Vite, and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

Build the static site with `npm run build`. The output is in `dist/`.

## Deploy on Vercel

Import this repository as a new Vercel project. `vercel.json` sets the Vite preset, runs the production build, and publishes `dist/`. Every page has a generated HTML entry point so direct visits to its URL work.

## Pages

- `/` — home
- `/about/` — story and philosophy
- `/services/` — service categories and details
- `/gallery/` — filterable editorial gallery
- `/locations/` — searchable salon directory
- `/book/` — appointment request builder

All primary navigation and calls to action stay within this project. The booking form prepares a WhatsApp message to the salon's official number; the visitor chooses whether to send it.

## Structure

- `src/App.jsx` — homepage and route selection
- `src/pages/` — dedicated pages
- `src/components/` — shared page sections and navigation
- `src/data/` — service, gallery, and location content
- `src/styles.css` — Tailwind entry and small design helpers
- `public/images/` — existing Geetanjali photography from the original website
