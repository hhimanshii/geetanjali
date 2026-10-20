import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ROUTES } from '../data/site';

export default function PageCta({ eyebrow = 'Your next chapter', title = 'The best version of you starts here.', text = 'Find the experience that feels right for you, and let us take care of the details.' }) {
  return <section className="bg-[#d7c5b4] px-5 py-20 sm:px-9 lg:px-14 lg:py-28"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="eyebrow text-[#845d46]">{eyebrow}</p><h2 className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,5vw,5.8rem)] leading-[1.04] tracking-[-.055em] text-[#241b18]">{title}</h2><p className="mt-5 max-w-xl text-base leading-7 text-[#64564c]">{text}</p></div><a href={ROUTES.book} className="inline-flex shrink-0 items-center gap-7 self-start rounded-full bg-[#241b18] px-7 py-4 text-xs font-semibold uppercase tracking-[.16em] text-white transition hover:bg-[#8c634c]">Book an appointment <ArrowUpRight size={18}/></a></div></section>;
}
