'use client';

import { useEffect, useState, type ComponentType, type ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Drawer } from 'vaul';
import {
  IconAirConditioning, IconBeach, IconBed, IconDesk, IconParking, IconPool, IconRulerMeasure, IconToolsKitchen2,
  IconUsers, IconWashMachine, IconWifi, IconX,
} from '@tabler/icons-react';
import { amenityLabel, peso, site, srcSet, type Amenity, type Condo } from '@/lib/site';

type IconProps = { size?: number; stroke?: number; 'aria-hidden'?: boolean };
const amenityIcon: Record<Amenity, ComponentType<IconProps>> = {
  wifi: IconWifi, aircon: IconAirConditioning, kitchen: IconToolsKitchen2, pool: IconPool,
  parking: IconParking, workspace: IconDesk, washer: IconWashMachine, beach: IconBeach,
};

/** a phone gets the bottom drawer (Vaul), a wider screen the dialog (Radix) */
function usePhone() {
  const [phone, setPhone] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 639px)');
    const set = () => setPhone(mq.matches);
    set();
    mq.addEventListener('change', set);
    return () => mq.removeEventListener('change', set);
  }, []);
  return phone;
}

function Body({ condo, title, close }: { condo: Condo; title: ReactNode; close: ReactNode }) {
  const facts = [
    { Icon: IconBed, text: condo.layout },
    { Icon: IconRulerMeasure, text: `${condo.areaM2} m²` },
    { Icon: IconUsers, text: `Up to ${condo.guests} guests` },
  ];
  return (
    <div className="details__body">
      <div className="details__media">
        <img src={`/assets/img/photo-${condo.photo.id}-960.webp`} srcSet={srcSet(condo.photo)}
          sizes="(max-width: 639px) 100vw, 560px" width={condo.photo.width} height={condo.photo.height}
          alt={condo.photo.alt} data-source="stand-in" data-subject={condo.name} />
      </div>
      <div className="details__text">
        <div className="details__head">
          {title}
          {close}
        </div>
        <p className="details__where">{condo.district}, {condo.city}</p>
        <p className="details__price"><span data-assumed="">{peso(condo.pricePerNight)}</span> a night</p>
        <p className="details__summary" data-assumed="">{condo.summary}</p>
        <ul className="details__facts" data-assumed="">
          {facts.map(({ Icon, text }) => (
            <li key={text}><Icon size={20} stroke={1.5} aria-hidden />{text}</li>
          ))}
        </ul>
        <p className="t-label details__label">In the condo</p>
        <ul className="details__amenities" data-assumed="">
          {condo.amenities.map((a) => {
            const Icon = amenityIcon[a];
            return <li key={a}><Icon size={20} stroke={1.5} aria-hidden />{amenityLabel[a]}</li>;
          })}
        </ul>
        <ul className="visit__rows details__rows" data-assumed="">
          <li><span>Check-in</span><span>{site.checkIn}</span></li>
          <li><span>Check-out</span><span>{site.checkOut}</span></li>
        </ul>
        <a className="btn btn--primary details__book" href={condo.airbnbUrl} target="_blank" rel="noopener">
          <img className="ic" src="/assets/icons/airbnb.svg" alt="" width={20} height={20} />
          Book on Airbnb
        </a>
      </div>
    </div>
  );
}

/** "See details" on a condo card: the condo's facts, amenities and its Airbnb button, in a dialog or a drawer */
export function CondoDetails({ condo, children }: { condo: Condo; children: ReactNode }) {
  const phone = usePhone();
  const label = `See details of the ${condo.name.replace(/^Condo/, 'condo')}`;
  const Trigger = (
    <button type="button" className="link tile__details" aria-label={label}>{children}</button>
  );

  if (phone) {
    return (
      <Drawer.Root>
        <Drawer.Trigger asChild>{Trigger}</Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="details__overlay" />
          <Drawer.Content className="details details--drawer" aria-describedby={undefined}>
            <div className="details__grip" aria-hidden="true" />
            <Body
              condo={condo}
              title={<Drawer.Title className="details__title">{condo.name}</Drawer.Title>}
              close={<Drawer.Close className="details__close" aria-label="Close"><IconX size={20} stroke={1.5} aria-hidden /></Drawer.Close>}
            />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{Trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="details__overlay" />
        <Dialog.Content className="details details--dialog" aria-describedby={undefined}>
          <Body
            condo={condo}
            title={<Dialog.Title className="details__title">{condo.name}</Dialog.Title>}
            close={<Dialog.Close className="details__close" aria-label="Close"><IconX size={20} stroke={1.5} aria-hidden /></Dialog.Close>}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
