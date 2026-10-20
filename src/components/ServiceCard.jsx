import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { URLS } from '../data/site';

export default function ServiceCard({ service, featured = false }) {
  return <a href={URLS.services} target="_blank" rel="noreferrer" className={`group relative flex min-h-[420px] overflow-hidden bg-[#3c302c] ${featured ? 'md:col-span-2 md:min-h-[480px]' : ''}`}>
    <img src={service.image} alt={`${service.title} service at Geetanjali Salon`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
    <div className="relative mt-auto flex w-full items-end justify-between gap-3 p-7 text-white sm:p-9">
      <div>
        <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/75">{service.number} / {service.detail}</span>
        <h3 className="mt-2 font-display text-[clamp(2.4rem,4vw,4.3rem)] leading-none tracking-[-0.05em]">{service.title}</h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">{service.description}</p>
      </div>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/60 transition group-hover:bg-white group-hover:text-[#241b18]"><ArrowUpRight size={19}/></span>
    </div>
  </a>;
}
