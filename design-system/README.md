# Alibio

Alibio rents furnished condos for short stays in Philippine cities. Every condo is booked on Airbnb, so the website shows each condo and sends the guest to its Airbnb page. Tagline: "Comfort that puts you at ease".

This system comes from two sources: the Alibio brand kit (the sea palette: Blue Green, Avocado, Warm Ivory, Charcoal, Navy Blue) and the homepage built from it. Values are copied from those sources; nothing is approximated.

## Content fundamentals

- **Say what it is, plainly.** The h1 names the thing and the place: "Furnished condos across the Philippines". No slogans in headings; the tagline lives in the footer only.
- **Facts over adjectives.** A condo card says the type, city, guests and floor area: "Studio · Makati · 2 guests · 26 m²". The price says "from" and the night.
- **Buttons are a verb and an object.** The main action is "Book a stay" everywhere it appears (nav, hero, close, phone bar). Each condo card ends with "Book on Airbnb".
- **Pesos with the sign and thousands comma:** ₱2,950. Times in 24-hour form: "From 14:00".
- **Sentence case** for every heading, label and button. No exclamation marks, no all-caps labels.
- **Never invent proof.** No ratings, review counts or guest quotes unless they are real and the guest agreed.

## Visual foundations

- **Ground and ink.** The page is `warm-ivory` with `charcoal` text. `ivory-shade` is the one raised surface (the stay panel). The interface stays about 95% neutral; colour comes from the photographs.
- **One action colour.** `blue-green` marks the primary button, links and the focus ring, nothing else. Exactly one filled button per view.
- **One brand band.** `navy-blue` fills the closing section, with ivory text and an ivory button. Do not use navy for buttons on the ivory ground.
- **Avocado is reserved** for print and social. It has no web role.
- **Type.** Headings use the display serif at 400 with -0.02em tracking (`h1` 48/53, `h2` 32/40); everything else uses the text sans (`body` 16/26, `title` 20/28 at 500, `label` 13/16 at 500). The brand kit names TT Ramillas and Proxima Nova. Both need paid web licences, so the site uses Literata and Figtree from Google Fonts as stand-ins. Swap the two `type.families` values when the licences are in place.
- **Square corners.** Photographs, cards and panels use `radius-none`. Buttons and fields use `radius-control` (2px).
- **Layout.** A 12-column grid, 24px gutter, content 1200px wide at 1440. The hero fills the first screen; every section is one screen tall at 1440x900. Text on the left, picture on the right, never mirrored.
- **Photographs.** Real condo rooms in daylight, the whole room, straight on. No text, filter, rounded corner or shadow on a photograph. A linked photograph zooms to 1.03 inside its frame on hover; its card lifts 2px.
- **Motion.** The hero enters once on load. The booking statement turns from half ink to full ink word by word as it scrolls past the middle of the screen. Buttons step on hover and press on click. Nothing else moves.

## Iconography

The site uses one third-party mark: the Airbnb icon, in its own colours, beside "Book on Airbnb". It is Airbnb's trademark: never recolour it, never use it as Alibio's mark. The Alibio logo (an arch with a star over the ALIBIO wordmark, and a house with a leaf as the brand mark) exists only as a picture in the brand kit. **No SVG of it is in this system yet.** Until one is supplied, the site shows the name in the display face beside a plain arch mark (`Logos/alibio-arch.svg`), and that mark is a placeholder.

## Usage rules

- Body text: `charcoal` on `warm-ivory` or `ivory-shade`. Never `ink-muted` for running text.
- Primary button: `blue-green` fill, `warm-ivory` label, `button-height`, `radius-control`.
- Secondary button: transparent with a 1px `charcoal` border.
- On the `navy-blue` band, every word is `warm-ivory`; the button turns ivory with a charcoal label.
- Condo card: photograph 4:3, then the title row (name left, price right), the facts in `ink-muted` at 16px, then "Book on Airbnb" with the Airbnb mark.
