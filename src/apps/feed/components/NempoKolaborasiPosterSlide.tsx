import type { RefObject } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import stagePhoto from '@/assets/nempo-feed-56/nempo-feed-56-panggung-kartun.jpg.asset.json';
import { nempoKolaborasi as K, nempoKolaborasiPoster as P } from './nempo-kolaborasi';
import './NempoKolaborasiPosterSlide.css';

/**
 * NEMPO Feed slide 56 (3:4): the "cara kolaborasi" content as a playful festival poster — a flat cartoon of a
 * hillside cafe / tourist-spot stage with performers and a cheering audience, chunky 3D title and pink
 * ribbon on the sky, a paper venue tag, a purple band with the benefits and a shield of the three steps,
 * and a grass strip with the WhatsApp CTA.
 */
export function NempoKolaborasiPosterSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { whatsapp, channels } = K;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nkp-root"
      aria-label={`${P.title.join(' ')} ${P.ribbon} ${K.cara.benefits.map((b) => b.label).join(', ')}. ${P.stepsLabel}: ${P.steps.join(', ')}. WhatsApp ${whatsapp.number}`}
    >
      <img
        className="nkp-photo"
        src={stagePhoto.url}
        alt="Ilustrasi kartun panggung live musik di cafe perbukitan: penyanyi, gitaris dan penabuh kendang tampil di depan penonton yang bersorak."
        draggable={false}
      />
      <span className="nkp-photo-fade" aria-hidden="true" />

      <p className="nkp-presents">
        <img src="/nempo-feed/assets/nempo-new.webp" alt="" draggable={false} />
        {P.presents}
      </p>

      <h2 className="nkp-title">
        <span className="nkp-title-a">{P.title[0]}</span>
        <span className="nkp-title-b">{P.title[1]}</span>
      </h2>
      <p className="nkp-ribbon"><span>{P.ribbon}</span></p>

      <p className="nkp-tag">
        <span>{P.venue[0]}</span>
        <strong>{P.venue[1]}</strong>
      </p>

      <p className="nkp-featuring">
        <span>{P.featuring[0]}</span>
        <span>{P.featuring[1]}</span>
      </p>

      <div className="nkp-band">
        <p className="nkp-words nkp-words--left">
          {P.left.map((l) => <span key={l.text} className={`nkp-w nkp-w--${l.size}`}>{l.text}</span>)}
        </p>

        <div className="nkp-shield">
          <span className="nkp-shield-logo"><img src="/nempo-feed/assets/nempo-new.webp" alt="" draggable={false} /></span>
          <strong className="nkp-shield-title">{P.stepsLabel}</strong>
          <ol className="nkp-steps">
            {P.steps.map((s, i) => (
              <li key={s}><span>{i + 1}</span>{s}</li>
            ))}
          </ol>
        </div>

        <p className="nkp-words nkp-words--right">
          {P.right.map((l) => <span key={l.text} className={`nkp-w nkp-w--${l.size}`}>{l.text}</span>)}
        </p>
      </div>

      <div className="nkp-grass">
        <a className="nkp-cta" href={whatsapp.href} target="_blank" rel="noreferrer">
          <FaWhatsapp aria-hidden="true" />{P.cta}
        </a>
        <div className="nkp-channels">
          {channels.map(({ key, handle, href }) => (
            <a key={key} href={href} target="_blank" rel="noreferrer">
              {key === 'instagram' ? <FaInstagram aria-hidden="true" /> : <FaTiktok aria-hidden="true" />}
              {handle}
            </a>
          ))}
        </div>
      </div>

      <span className="nkp-grain" aria-hidden="true" />
    </section>
  );
}
