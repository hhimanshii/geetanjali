import React from 'react';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { URLS } from '../data/site';

const links = [
  { label: 'The story', href: '#story' },
  { label: 'Services', href: '#services' },
  { label: 'The edit', href: '#the-edit' },
  { label: 'Locations', href: '#locations' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-50">
    <div className="mx-auto flex h-[84px] max-w-[1500px] items-center justify-between px-5 sm:px-9 lg:px-14">
      <a href="#top" aria-label="Geetanjali Salon home" className="relative z-50 text-[#211915]">
        <span className="block text-[22px] font-bold leading-none tracking-[-0.075em] sm:text-[25px]">GEETANJALI</span>
        <span className="mt-[3px] block text-center text-[10px] font-medium leading-none tracking-[0.65em]">SALON</span>
      </a>
      <nav className="hidden items-center gap-8 lg:flex xl:gap-11" aria-label="Main navigation">
        {links.map(link => <a key={link.label} href={link.href} className="nav-link">{link.label}</a>)}
      </nav>
      <a href={URLS.booking} target="_blank" rel="noreferrer" className="group hidden items-center gap-5 rounded-full border border-[#28211d] bg-[#28211d] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#8c634c] hover:border-[#8c634c] sm:inline-flex">Book an appointment <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
      <button className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={27} /> : <Menu size={27} />}</button>
    </div>
    {open && <nav className="absolute inset-x-0 top-0 flex min-h-[100dvh] flex-col justify-center gap-5 bg-[#f4eee6] px-8 pt-16 lg:hidden" aria-label="Mobile navigation">
      {links.map(link => <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="border-b border-[#cfc3b7] pb-5 font-display text-4xl">{link.label}</a>)}
      <a href={URLS.booking} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mt-5 flex items-center justify-between rounded-full bg-[#28211d] px-6 py-4 text-sm uppercase tracking-widest text-white">Book an appointment <ArrowUpRight size={18}/></a>
    </nav>}
  </header>;
}
