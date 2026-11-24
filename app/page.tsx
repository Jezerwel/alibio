// type: place (furnished condos for short stays, every one booked on Airbnb)
// deal: hero place (printed), nav nav-cards (re-dealt to plain words: the menu repeated the condo photos),
// footer footer-columns, rhythm colour-band (the close on .ground-brand, navy #013160 from the client's kit),
// buttons arrow, mark: the client's logos from the brand board (page 4), the offer as rooms (row, four),
// the place's composition bleed (#cities), type moment address not used (four cities, no one street)
// palette: the client's own kit (start.mjs brand); type: TT Ramillas / Proxima Nova, Literata / Figtree as fallback
// moments: word-highlight in #booking
import { SiteHeader } from '@/components/SiteHeader';
import { ActionBar, Booking, Cities, Condos, Hero, Locations, SiteFooter } from '@/components/Sections';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Locations />
        <Condos />
        <Cities />
        <Booking />
      </main>
      <SiteFooter />
      <ActionBar />
    </>
  );
}
