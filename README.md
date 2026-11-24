# Alibio

Website for Alibio: furnished condos for short stays in the Philippines. Each condo links to its Airbnb listing.

Built with Next.js 16 as a static export: `next build` writes the whole site to `out/`, ready for any static host.

## Run it

```
npm install
npm run dev      # http://localhost:3000
npm run build    # writes out/
```

## Where things are

- `lib/site.ts`: the content. The six condos (name, district, city, price, layout, size, guests, amenities, photo and Airbnb link), the check-in times and the contact address. Edit this file to change a listing.
- `app/`: the page (`page.tsx`) and the document head (`layout.tsx`).
- `components/`: the page sections (`Sections.tsx`), the header, and the condo details (`CondoDetails.tsx`: a Radix dialog on desktop, a Vaul drawer on phones, Tabler icons for the amenities).
- `public/assets/`: the design kit's stylesheets and scripts, the photographs, the logos (`brand/`), the fonts folder and `site.css`, the page's own styles.
- `public/credits.html`: photo credits (Wikimedia Commons).
- `design-system/`: brand tokens, brand guide and component styles.

## Still to supply

- The real condos. The locations of four are real (Saint Dominique in Iloilo City, Davao City, Boracay Newcoast, Subic). Makati and Cebu City, and every price, size, amenity and photograph, are stand-ins.
- Each condo's own Airbnb listing URL. The links open an Airbnb search for the city until then.
- The licensed TT Ramillas and Proxima Nova web fonts in `public/assets/fonts/` (see the README there).
- A contact address in place of `hello@alibio.example`, and the site's domain (then set `metadataBase` and the canonical link in `app/layout.tsx`).
