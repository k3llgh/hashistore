# HashiStore — Hashirama Traders Ltd

A static Astro + TypeScript stationery/bookshop showcase for wholesale and retail customers.

## Features

- Static, database-free Astro site
- Product catalogue with school/office filters; each category expands to list its products
- Per-product "Ask about stock" enquiry (WhatsApp/email message names the product)
- WhatsApp enquiry/order links
- Email contact fallback
- Cookie consent banner using localStorage
- Responsive design
- User-provided imagery used as requested
- Updates page and footer social/contact links

## Run locally

```bash
npm install
npm run dev
```

For WhatsApp, copy `.env.example` to `.env` and replace the placeholder with the business WhatsApp number.

```bash
PUBLIC_WHATSAPP_NUMBER=2547XXXXXXXX
```

If no number is configured, WhatsApp buttons gracefully point users to the contact email instead.

## Build

```bash
npm run build
npm run preview
```

## Editing products and images

- Categories and products live in `src/data/products.ts`.
- Category photos are in `public/images/categories/`.
- Product photos: put the file in `public/images/products/` and add `image: '/images/products/your-file.jpeg'` to that product. Products without an `image` show a placeholder.
