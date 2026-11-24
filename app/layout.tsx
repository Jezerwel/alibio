import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { KitScripts } from '@/components/KitScripts';

const title = 'Alibio: furnished condos for short stays in the Philippines';
const description =
  'Alibio rents furnished condos in Makati, Cebu City, Davao and Iloilo by the night. See each condo here and book it on Airbnb.';

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
  openGraph: { type: 'website', title, description: 'Furnished condos in four Philippine cities, booked on Airbnb.' },
  twitter: { card: 'summary_large_image' },
  // canonical: add alternates.canonical once the domain is known
  other: { 'site-kind': 'other', 'page-type': 'place', 'page-kind': 'place' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f3e9df',
};

// the hero's entrance and the moments' guard, set before the first paint (the kit's head lines)
const headScript =
  "document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700);" +
  "document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500);";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-type="place" data-radius="soft" data-buttons="arrow" data-motion="" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400..600&family=Figtree:wght@400..600&display=swap"
        />
        {/* the kit's stylesheets as plain files from public/assets, in the kit's order, then the page's own */}
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/ui/cards.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/icons/icon.css" />
        <link rel="stylesheet" href="/assets/site.css" />
        {/* the share picture: a relative path until the domain is known (then set metadataBase and openGraph.images) */}
        <meta property="og:image" content="/share.jpg" />
        <script dangerouslySetInnerHTML={{ __html: headScript }} />
        <link rel="modulepreload" href="/assets/moments/moments.js" />
        <link rel="modulepreload" href="/assets/moments/lib.js" />
        <link rel="modulepreload" href="/assets/moments/word-highlight/moment.js" />
      </head>
      <body>
        {children}
        <KitScripts />
      </body>
    </html>
  );
}
