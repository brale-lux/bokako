# Bokako storefront

Next.js (App Router) + TypeScript + Tailwind CSS v4. No backend, no database, no paid services. Checkout is external (Payhip, Gumroad or Stripe Payment Links).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build && npm start
```

## Edit products

Everything lives in one file: [`src/data/products.ts`](src/data/products.ts). To launch a product set `status: "available"`, a `priceEUR`, and an https `checkoutUrl`. The **Buy Now** button only appears when both status and a valid link are set; otherwise the product shows **Coming soon**. Add images to `public/products/` and reference them in `coverImage` / `screenshots`.

## Design tokens

Colours, radii, shadows and float animations are in [`src/app/globals.css`](src/app/globals.css) (`@theme`).

## Structure

- `src/components/hero-art.tsx` — abstract 3D hero composition (layered SVG, floating shapes)
- `public/icons/*-3d.svg` — the three category card icons (sun, rising bars, heart/ECG)
- `src/components/header.tsx` — curved inset navigation tab, working search, favourites
- `src/components/{categories,catalog,product-card}.tsx` — pills, cards, filtering
- `src/app/products/[slug]` — product detail pages; `privacy`, `terms`, `refunds` — **draft** policy pages

## Deploy to Vercel

1. Push the `site` folder to a GitHub repository.
2. In Vercel: **Add New → Project**, import the repo (framework preset: Next.js; no build settings to change).
3. Optional env var: `NEXT_PUBLIC_SITE_URL=https://bokako.com` (see `.env.example`).
4. Deploy, then **Settings → Domains → Add `bokako.com`** and set the DNS records Vercel shows (A record for the apex, CNAME for `www`).

## Before accepting payments

- [ ] Replace the temporary wordmark (`src/components/logo.tsx`) with the official logo
- [ ] Confirm real products, copy, prices and checkout links
- [ ] Add product cover images and screenshots
- [ ] Complete and legally review Privacy, Terms and Refund pages (currently marked DRAFT)
- [ ] Add a real support/contact email in the footer
- [ ] Set up your checkout provider account, tax/VAT settings and file delivery
