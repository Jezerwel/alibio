import { site } from '@/lib/site';

const links = [
  { href: '#homes', label: 'Condos' },
  { href: '#visit', label: 'Locations' },
  { href: '#booking', label: 'Booking' },
];

export function SiteHeader() {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <a className="nav__logo" href="#top">
          <img className="logo-lockup" src="/assets/brand/alibio-lockup.svg" alt={site.name} width={91} height={32} />
        </a>
        <nav className="nav__links" aria-label="Main">
          {links.map((l) => (
            <div className="nav__item" key={l.href}>
              <a className="nav__link" href={l.href}>{l.label}</a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href="#homes">{site.mainAction}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
