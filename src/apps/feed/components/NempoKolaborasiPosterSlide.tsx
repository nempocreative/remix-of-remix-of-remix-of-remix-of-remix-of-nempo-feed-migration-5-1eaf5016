import type { RefObject } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import stagePhoto from '@/assets/nempo-feed-56/nempo-feed-56-panggung-film.jpg.asset.json';
import { nempoKolaborasi as K, nempoKolaborasiPoster as P } from './nempo-kolaborasi';
import './NempoKolaborasiPosterSlide.css';

/**
 * NEMPO Feed slide 56 (3:4): the "cara kolaborasi" content as a movie one-sheet — studio lockup and a big
 * metallic title on the night sky, italic tagline and release line, then a billing block of the benefits, the
 * three steps and the WhatsApp CTA, over a lit stage at a cafe / tourist spot with a silhouetted audience.
 */
export function NempoKolaborasiPosterSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  const { whatsapp, channels } = K;
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nkp-root"
      aria-label={`${P.title.join(' ')} ${P.tagline} ${P.credits.join(', ')}. ${P.stepsLabel}: ${P.steps.join(', ')}. WhatsApp ${whatsapp.number}`}
    >
      <img
        className="nkp-photo"
        src={stagePhoto.url}
        alt="Panggung live musik di cafe perbukitan pada malam hari: penyanyi, gitaris dan penabuh kendang di sorot lampu, penonton jadi siluet di depan panggung."
        draggable={false}
      />
      <span className="nkp-photo-fade" aria-hidden="true" />
      <span className="nkp-vignette" aria-hidden="true" />

      <p className="nkp-presents">
        <img src="/nempo-feed/assets/nempo-new.webp" alt="" draggable={false} />
        {P.presents}
      </p>
      <p className="nkp-badge">{P.badge}</p>

      <h2 className="nkp-title">
        <span className="nkp-title-a">{P.title[0]}</span>
        <span className="nkp-title-b">{P.title[1]}</span>
      </h2>

      <p className="nkp-tagline">
        <span aria-hidden="true" />
        {P.tagline}
        <span aria-hidden="true" />
      </p>
      <p className="nkp-release">{P.release}</p>

      <div className="nkp-billing">
        <p className="nkp-credits">
          <strong>{P.creditsLabel}</strong>
          {P.credits.map((c, i) => (
            <span key={c}>
              {i > 0 ? <em aria-hidden="true">·</em> : null}
              {c}
            </span>
          ))}
        </p>

        <p className="nkp-steps-label">{P.stepsLabel}</p>
        <ol className="nkp-steps">
          {P.steps.map((s, i) => (
            <li key={s}><span>{i + 1}</span>{s}</li>
          ))}
        </ol>

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
