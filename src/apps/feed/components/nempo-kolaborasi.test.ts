import { describe, expect, it } from 'vitest';
import { NEMPO_KOLABORASI_CARA_SLIDE, NEMPO_KOLABORASI_SLIDE, NKO_EXPORT, nempoKolaborasi } from './nempo-kolaborasi';

describe('NEMPO collaboration call for cafes & tourist spots', () => {
  it('is NEMPO Feed slide 55, continued on slide 56', () => {
    expect(NEMPO_KOLABORASI_SLIDE).toBe(55);
    expect(NEMPO_KOLABORASI_CARA_SLIDE).toBe(56);
  });
  it('calls both cafes and tourist spots', () => {
    expect(nempoKolaborasi.call.venues.map((v) => v.label)).toEqual(['Cafe & Resto', 'Tempat Wisata']);
  });
  it('uses the NEMPO admin WhatsApp 0857 2498 1356', () => {
    expect(nempoKolaborasi.whatsapp.number).toBe('0857 2498 1356');
    expect(nempoKolaborasi.whatsapp.href).toBe('https://wa.me/6285724981356');
  });
  it('downloads each slide as a 3:4 feed PNG at 3× (3240×4320)', () => {
    expect(NKO_EXPORT).toEqual({ width: 3240, height: 4320 });
  });
});
