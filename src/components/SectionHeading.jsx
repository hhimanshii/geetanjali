import React from 'react';
export default function SectionHeading({ eyebrow, title, intro, light = false, className = '' }) {
  return <div className={className}>
    <p className={`eyebrow ${light ? 'text-white/65' : 'text-[#a06f50]'}`}>{eyebrow}</p>
    <h2 className={`font-display text-[clamp(2.6rem,5vw,5rem)] leading-[1.05] tracking-[-0.045em] ${light ? 'text-[#f7f1e9]' : 'text-[#241b18]'}`}>{title}</h2>
    {intro && <p className={`mt-5 max-w-xl text-base leading-7 md:text-lg ${light ? 'text-white/65' : 'text-[#645b54]'}`}>{intro}</p>}
  </div>;
}
