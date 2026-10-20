import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ROUTES } from '../data/site';

export default function ServiceCard({ service }) {
  return <a href={`${ROUTES.services}#${service.slug}`} className="group relative block h-[370px] min-w-[250px] snap-start overflow-hidden bg-[#3c302c] md:min-w-0 lg:h-[380px]">
    <img src={service.image} alt={`${service.title} at Geetanjali Salon`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/10" />
    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5"><span className="text-[10px] font-semibold tracking-[.24em] text-white/90">{service.number} / 05</span><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white transition group-hover:bg-white group-hover:text-[#241b18]"><ArrowUpRight size={16}/></span></div>
    <div className="absolute inset-x-0 bottom-0 p-5 text-white"><p className="mb-2 text-[9px] font-semibold uppercase tracking-[.14em] text-white/80">{service.detail}</p><h3 className="font-display text-[clamp(1.9rem,2.4vw,2.8rem)] leading-[.95] tracking-[-.055em]">{service.title}</h3></div>
  </a>;
}
