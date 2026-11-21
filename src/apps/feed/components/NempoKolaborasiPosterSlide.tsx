import type { RefObject } from 'react';
import stagePhoto from '@/assets/nempo-feed-56/nempo-feed-56-panggung-film.jpg.asset.json';
import { NempoFooter, NempoHeader } from './KalaMudaRecruitSlide';
import { nempoKolaborasiPoster as P } from './nempo-kolaborasi';
import './NempoKolaborasiPosterSlide.css';

/**
 * NEMPO Feed slide 56 (3:4): the "cara kolaborasi" content as a movie one-sheet — the same Nempo Feed header
 * every other slide uses, a big metallic title on the night sky, italic tagline and release line, then a
 * billing block of the benefits, the three steps and the WhatsApp CTA, over a lit stage at a cafe / tourist
 * spot with a silhouetted audience.
 */
export function NempoKolaborasiPosterSlide({ exportRef }: { exportRef?: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={exportRef as RefObject<HTMLElement>}
      className="nkp-root kmt-root"
      aria-label={`${P.title.join(' ')} ${P.tagline} ${P.credits.join(', ')}. ${P.stepsLabel}: ${P.steps.join(', ')}. ${P.cta}`}
    >
      <img
        className="nkp-photo"
        src={stagePhoto.url}
        alt="Panggung live musik di cafe perbukitan pada malam hari: penyanyi, gitaris dan penabuh kendang di sorot lampu, penonton jadi siluet di depan panggung."
        draggable={false}
      />
      <span className="nkp-photo-fade" aria-hidden="true" />
      <span className="nkp-vignette" aria-hidden="true" />

      <NempoHeader badge={P.badge} />

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

      </div>

      <NempoFooter />

      <span className="nkp-grain" aria-hidden="true" />
    </section>
  );
}
