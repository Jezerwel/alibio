import type { CSSProperties } from 'react';
import { Arrow } from './Arrow';
import { CondoDetails } from './CondoDetails';
import { condos, lowestPrice, mapSearch, peso, site, srcSet, type Condo } from '@/lib/site';

const cssVars = (v: Record<string, string>) => v as CSSProperties;

export function Hero() {
  return (
    <section className="hero hero--place" data-enter="" aria-labelledby="hero-h">
      <picture className="hero__bg" data-phone-fill="">
        <source media="(max-width: 639px)" srcSet="/assets/img/photo-f194508631-780x975.webp 780w" sizes="100vw" />
        <img
          src="/assets/img/photo-f194508631.webp"
          srcSet="/assets/img/photo-f194508631-500.webp 500w, /assets/img/photo-f194508631-960.webp 960w, /assets/img/photo-f194508631-1280.webp 1280w, /assets/img/photo-f194508631.webp 1920w"
          sizes="100vw" width={1920} height={1444}
          alt="A condo bedroom with a made double bed and a glass wall open to the sea"
          style={cssVars({ '--ly-pos': '50% 55%' })}
          fetchPriority="high" decoding="async" data-source="stand-in" data-subject="a condo bedroom with a sea view"
        />
      </picture>
      <div className="wrap"><div className="hero-text">
        <div className="hero__text">
          <h1 id="hero-h">Furnished condos across the Philippines</h1>
          <p className="hero__lead">
            <span data-assumed="">Six condos in city districts and by the beach</span>, booked by the night on Airbnb.
          </p>
          <div className="btn-row"><a className="btn btn--primary" href="#homes">{site.mainAction}<Arrow /></a></div>
        </div>
      </div></div>
    </section>
  );
}

export function Locations() {
  return (
    <section className="section" id="visit" data-place="visit" aria-labelledby="visit-h">
      <div className="wrap">
        <div className="section-head"><h2 id="visit-h">Where the condos are</h2></div>
        <div className="grid grid--top">
          <div className="visit visit--card span-6">
            <p className="t-label">Districts</p>
            <ul className="visit__rows visit__districts" data-assumed="">
              {condos.map((c) => (
                <li key={c.district}>
                  <span><span className="visit__district">{c.district}</span>, {c.city}</span>
                  <a className="link" href={mapSearch(c.district, c.city)} target="_blank" rel="noopener"
                    aria-label={`See the area around ${c.district}, ${c.city}`}>See the area</a>
                </li>
              ))}
            </ul>
          </div>
          <figure className="pl-photo pl-photo--end span-6 start-7" style={cssVars({ '--pl-r': '1.333' })}>
            <img src="/assets/img/photo-f160639492-960.webp"
              srcSet="/assets/img/photo-f160639492-500.webp 500w, /assets/img/photo-f160639492-960.webp 960w"
              sizes="(max-width: 1023px) 100vw, 588px" width={960} height={720}
              alt="Condo towers with balconies along a palm-lined avenue in Iloilo City"
              loading="lazy" decoding="async" data-source="stand-in" data-subject="condo towers" />
          </figure>
        </div>
      </div>
    </section>
  );
}

function CondoTile({ c }: { c: Condo }) {
  return (
    <article className="tile condo">
      <div className="tile__media">
        <img src={`/assets/img/photo-${c.photo.id}-960.webp`} srcSet={srcSet(c.photo)}
          sizes="(max-width: 639px) 200px, (max-width: 1023px) 33vw, 384px"
          width={c.photo.width} height={c.photo.height} alt={c.photo.alt}
          loading="lazy" decoding="async" data-source="stand-in" data-subject={c.name} />
      </div>
      <h3 className="tile__name">{c.name}</h3>
      <p className="tile__price"><span data-assumed="">{peso(c.pricePerNight)}</span> a night</p>
      <p className="tile__facts">{c.city}<br /><span data-assumed="">{c.layout}, {c.areaM2} m², {c.guests} guests</span></p>
      <div className="tile__actions">
        <CondoDetails condo={c}>See details</CondoDetails>
        <a className="tile__book link" href={c.airbnbUrl} target="_blank" rel="noopener">
          <img className="ic" data-icon="airbnb" src="/assets/icons/airbnb.svg" alt="" width={20} height={20} loading="lazy" />
          Book on Airbnb
        </a>
      </div>
    </article>
  );
}

export function Condos() {
  const first = condos.slice(0, 3), second = condos.slice(3);
  return (
    <section className="section g2 g2m" id="homes" aria-labelledby="homes-h">
      <div className="wrap">
        <div className="group">
          <div className="section-head"><h2 id="homes-h">Condos and prices</h2></div>
          <div className="grid homes__trio">{first.map((c) => <CondoTile key={c.slug} c={c} />)}</div>
        </div>
        <div className="grid homes__trio">{second.map((c) => <CondoTile key={c.slug} c={c} />)}</div>
      </div>
    </section>
  );
}

export function Cities() {
  return (
    <section className="section" id="cities" aria-labelledby="cities-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="cities-h">City condos and beach condos</h2>
          <p data-assumed="">Four in city business districts, two near the beach in Boracay and Subic.</p>
        </div>
        <div className="grid cities__pair">
          <figure className="cities__photo span-6">
            <img src="/assets/img/photo-f89561115.webp"
              srcSet="/assets/img/photo-f89561115-500.webp 500w, /assets/img/photo-f89561115-960.webp 960w, /assets/img/photo-f89561115.webp 1280w"
              sizes="(max-width: 639px) 100vw, 588px" width={1280} height={731}
              alt="The towers of Bonifacio Global City and Makati lit at dusk under a cloudy orange sky"
              loading="lazy" decoding="async" data-source="stand-in" data-subject="Makati and Bonifacio Global City" />
          </figure>
          <figure className="cities__photo span-6">
            <img src="/assets/img/photo-f64558458.webp"
              srcSet="/assets/img/photo-f64558458-500.webp 500w, /assets/img/photo-f64558458-960.webp 960w, /assets/img/photo-f64558458.webp 1280w"
              sizes="(max-width: 639px) 100vw, 588px" width={1280} height={960}
              alt="White sand and clear shallow water along White Beach in Boracay"
              loading="lazy" decoding="async" data-source="stand-in" data-subject="Boracay" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export function Booking() {
  return (
    <section className="section statement" id="booking" data-moment="word-highlight" aria-label="Booking">
      <div className="wrap">
        <p className="t-label">Booking</p>
        <p className="mo-wh__text">
          Every condo on this page is listed on Airbnb. You book, pay and message the host there, and Airbnb pays the
          host only after <strong>check-in</strong>.
        </p>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer closing ground-brand" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--photo">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">Book a condo for your next trip</h2>
              <p className="t-lead">Six condos, from <span data-assumed="">{peso(lowestPrice)}</span> a night on Airbnb.</p>
            </div>
            <a className="btn btn--primary" href="#homes">{site.mainAction}<Arrow /></a>
          </div>
          <div className="close__media">
            <img src="/assets/img/photo-f148634125.webp"
              srcSet="/assets/img/photo-f148634125-500.webp 500w, /assets/img/photo-f148634125-960.webp 960w, /assets/img/photo-f148634125.webp 1280w"
              sizes="(max-width: 639px) 160vw, 1200px" width={1280} height={960}
              alt="High-rise towers of Davao City against green hills under a clear sky"
              loading="lazy" decoding="async" data-source="stand-in" data-subject="Davao City, where one of the condos is"
              style={cssVars({ '--pos': '50% 55%' })} />
          </div>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo footer__logo" href="#top">
                <img className="logo-primary" src="/assets/brand/alibio-primary-ivory.svg" alt={site.name} width={151} height={88} />
              </a>
              <p className="footer__lede">{site.tagline}</p>
            </div>
            <div className="span-2 footer__col"><h3>Condos</h3><ul><li><a href="#homes">Condos and prices</a></li></ul></div>
            <div className="span-2 footer__col"><h3>Locations</h3><ul><li><a href="#visit">Districts and check-in</a></li></ul></div>
            <div className="span-2 footer__col"><h3>Booking</h3><ul>
              <li><a href="#booking">How booking works</a></li>
              <li><a href="https://www.airbnb.com/help" target="_blank" rel="noopener">Airbnb help</a></li>
            </ul></div>
            <div className="span-2 footer__col"><h3>Contact</h3><ul><li><a href={`mailto:${site.email}`}>Email us</a></li></ul></div>
          </div>
          <div className="footer__legal">
            <span>&copy; 2026 {site.name}</span>
            <div className="socials"></div>
            <a className="credits" href="/credits.html">Photographs via Wikimedia Commons</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ActionBar() {
  return (
    <nav className="actionbar" aria-label="Quick actions">
      <a className="btn btn--primary" href="#homes">{site.mainAction}</a>
    </nav>
  );
}
