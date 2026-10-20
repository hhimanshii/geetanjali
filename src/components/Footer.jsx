import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ROUTES, SOCIAL } from '../data/site';

export default function Footer() {
  return <footer className="bg-[#211a17] px-5 pb-8 pt-20 text-[#f5efe7] sm:px-9 lg:px-14 lg:pt-28">
    <div className="mx-auto max-w-[1400px]">
      <div className="grid gap-16 border-b border-white/20 pb-20 lg:grid-cols-[1.5fr_1fr]">
        <div><p className="eyebrow text-[#d2aa8f]">The next chapter begins here</p><h2 className="mt-4 max-w-[720px] font-display text-[clamp(3.2rem,7vw,7rem)] leading-[.98] tracking-[-.06em]">Ready for a little <em className="font-normal">you time?</em></h2><a href={ROUTES.book} className="mt-9 inline-flex items-center gap-6 rounded-full bg-[#efe5d9] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#231a17] transition hover:bg-white">Book your appointment <ArrowUpRight size={17}/></a></div>
        <div className="grid content-end gap-12 sm:grid-cols-2 lg:gap-8">
          <div><p className="footer-label">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/65"><a href={ROUTES.about}>Our story</a><a href={ROUTES.services}>Services</a><a href={ROUTES.gallery}>The edit</a><a href={ROUTES.locations}>Find a salon</a></div></div>
          <div><p className="footer-label">Connect</p><div className="mt-5 flex flex-col gap-3 text-sm text-white/65"><a href={ROUTES.book}>Contact us</a><a href={SOCIAL.instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={ROUTES.gallery}>Gallery</a><a href={ROUTES.book}>Appointments</a></div></div>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-end sm:justify-between"><div><span className="text-2xl font-bold tracking-[-.08em]">GEETANJALI</span><span className="ml-3 text-[10px] uppercase tracking-[.5em]">Salon</span></div><div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/50"><span>© {new Date().getFullYear()} Geetanjali Salon Pvt. Ltd.</span><span>Made for the art of being you.</span></div></div>
    </div>
  </footer>;
}
