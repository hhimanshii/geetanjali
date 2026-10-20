import React from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin, MoveUpRight, Sparkles } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionHeading from './components/SectionHeading';
import ServiceCard from './components/ServiceCard';
import { featuredCities, IMAGES, services, URLS } from './data/site';

function Hero() {
  return <section id="top" className="relative min-h-[760px] overflow-hidden bg-[#f5f0e9] lg:min-h-[780px]">
    <Header />
    <div className="mx-auto grid max-w-[1600px] pt-[84px] lg:min-h-[780px] lg:grid-cols-[46%_54%]">
      <div className="relative z-10 flex flex-col justify-center px-5 pb-11 pt-20 sm:px-9 lg:px-14 lg:pb-32 lg:pt-10">
        <div className="flex items-center gap-3"><span className="h-px w-7 bg-[#9e735b]"/><span className="eyebrow text-[#9e735b]">An icon since 1989</span></div>
        <h1 className="mt-7 max-w-[700px] font-display text-[clamp(3.6rem,7.1vw,8.2rem)] leading-[.94] tracking-[-.07em] text-[#241b18]">The art of<br/><em className="font-normal text-[#a7795f]">being you.</em></h1>
        <p className="mt-8 max-w-[470px] text-[15px] leading-7 text-[#5b514b] sm:text-lg">More than a salon. A space to feel seen, beautifully understood, and entirely yourself.</p>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a href={URLS.booking} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-7 rounded-full bg-[#2a201c] px-7 py-4 text-xs font-semibold uppercase tracking-[.16em] text-white transition hover:bg-[#9b6f54]">Book an appointment <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"/></a>
          <a href="#services" className="inline-flex items-center gap-3 border-b border-[#9d7d68] pb-1 text-xs font-semibold uppercase tracking-[.15em] text-[#4a3830] transition hover:text-[#9b6f54]">Explore services <ArrowRight size={17}/></a>
        </div>
        <div className="mt-16 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.22em] text-[#9b8b7f] lg:absolute lg:bottom-9"><ArrowDown size={16} strokeWidth={1.5}/> Scroll to discover</div>
      </div>
      <div className="relative min-h-[470px] overflow-hidden lg:min-h-full">
        <img src={IMAGES.hero} alt="Geetanjali Salon hair editorial featuring Tara Sutaria" className="absolute inset-0 h-full w-full object-cover object-[74%_center]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"/>
        <div className="absolute bottom-5 right-6 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[.22em] text-white/85 sm:bottom-8 sm:right-10"><span className="h-px w-8 bg-white/70"/>In frame / Geetanjali 2026</div>
      </div>
    </div>
  </section>;
}

function Stats() {
  return <div className="bg-[#261d19] px-5 py-9 text-[#f9f0e7] sm:px-9 lg:px-14"><div className="mx-auto grid max-w-[1400px] gap-7 sm:grid-cols-3 sm:gap-0">
    {[['1989','The story begins'],['200+','Salons across India'],['50+','Cities & counting']].map(([number,label],index)=><div key={label} className={`flex items-baseline gap-4 ${index > 0 ? 'sm:border-l sm:border-white/25 sm:pl-10 lg:pl-20' : ''}`}><span className="font-display text-4xl leading-none tracking-[-.06em] text-[#e2bea2] lg:text-5xl">{number}</span><span className="text-[10px] uppercase tracking-[.19em] text-white/65 lg:text-xs">{label}</span></div>)}
  </div></div>;
}

function Intro() {
  return <section id="story" className="section-pad bg-[#f9f6f1]"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
    <div className="flex items-start justify-between lg:block"><p className="eyebrow text-[#a06f50]">01 / The Geetanjali story</p><span className="font-display text-5xl italic text-[#d6c3b4] lg:mt-12 lg:block lg:text-[7rem]">G.</span></div>
    <div><h2 className="max-w-[950px] font-display text-[clamp(2.7rem,5.5vw,5.9rem)] leading-[1.08] tracking-[-.055em] text-[#241b18]">Beauty is personal.<br/><em className="font-normal text-[#a7795f]">So are we.</em></h2><div className="mt-8 grid gap-6 border-t border-[#d9cdc2] pt-8 text-[#645950] md:grid-cols-2 md:gap-12"><p className="text-base leading-7">From a single salon in Green Park, New Delhi, Geetanjali has grown into one of India’s leading beauty and lifestyle destinations.</p><div><p className="text-base leading-7">For over three decades, our artists have combined creative instinct, skilled technique, and a personal touch to make every visit feel like yours.</p><a href={URLS.booking} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-4 border-b border-[#9f775f] pb-2 text-xs font-semibold uppercase tracking-[.16em] text-[#33251e]">Discover Geetanjali <ArrowUpRight size={17}/></a></div></div></div>
  </div></section>;
}

function Services() {
  return <section id="services" className="section-pad bg-[#ece4db]"><div className="mx-auto max-w-[1400px]">
    <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="02 / Crafted for you" title={<>Expertise in every <em className="font-normal text-[#a7795f]">detail.</em></>} intro="From the everyday to the extraordinary, discover care made personal."/><a href={URLS.services} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 self-start border-b border-[#9f775f] pb-2 text-xs font-semibold uppercase tracking-[.15em] whitespace-nowrap md:self-end">View all services <ArrowUpRight size={17}/></a></div>
    <div className="grid gap-3 md:grid-cols-3">{services.map((service,index)=><ServiceCard key={service.title} service={service} featured={index===0 || index===4}/>)}</div>
  </div></section>;
}

function Ritual() {
  return <section className="grid bg-[#2d231e] text-white lg:grid-cols-2">
    <div className="relative min-h-[510px] overflow-hidden lg:min-h-[690px]"><img src={IMAGES.salon} alt="Geetanjali Salon editorial" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-[24%_center]"/><div className="absolute inset-0 bg-black/10"/><div className="absolute bottom-8 left-8 text-xs uppercase tracking-[.2em] text-white">The Geetanjali experience</div></div>
    <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-[10%]"><p className="eyebrow text-[#d2aa8f]">03 / Our philosophy</p><h2 className="mt-5 font-display text-[clamp(3rem,5vw,5.8rem)] leading-[1.03] tracking-[-.055em]">It begins with <em className="font-normal text-[#d2aa8f]">listening.</em></h2><p className="mt-8 max-w-[530px] text-base leading-8 text-white/65">Your style is a reflection of you. We take time to understand your hair, your routine, your occasion, and how you want to feel. Then our artists bring it all together with care and craft.</p><div className="mt-12 grid gap-8 border-t border-white/20 pt-9 sm:grid-cols-2"><div><Sparkles size={24} className="text-[#d2aa8f]"/><h3 className="mt-4 font-display text-2xl">Personal by nature</h3><p className="mt-2 text-sm leading-6 text-white/55">Every service begins with you in mind.</p></div><div><MoveUpRight size={24} className="text-[#d2aa8f]"/><h3 className="mt-4 font-display text-2xl">Artistry with intent</h3><p className="mt-2 text-sm leading-6 text-white/55">Technique, creativity, and detail in balance.</p></div></div></div>
  </section>;
}

function Editorial() {
  const looks = [
    {image:IMAGES.lookOne,label:'Hair / In frame'},
    {image:IMAGES.lookTwo,label:'Bridal / The wedding edit'},
    {image:IMAGES.lookThree,label:'Style / The modern muse'},
  ];
  return <section id="the-edit" className="section-pad bg-[#f9f6f1]"><div className="mx-auto max-w-[1400px]"><div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="04 / From our world" title={<>The <em className="font-normal text-[#a7795f]">edit.</em></>} intro="A glimpse into the looks, ideas, and people inspiring us right now."/><a href={URLS.gallery} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 self-start border-b border-[#9f775f] pb-2 text-xs font-semibold uppercase tracking-[.15em] md:self-end">View gallery <ArrowUpRight size={17}/></a></div>
    <div className="grid gap-4 md:grid-cols-3">{looks.map((look,index)=><a key={look.label} href={URLS.gallery} target="_blank" rel="noreferrer" className="group"><div className="relative aspect-[.82] overflow-hidden bg-[#d4c4b7]"><img src={look.image} alt={look.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" style={{objectPosition:index===2?'left center':'center'}}/><span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#241b18] transition group-hover:bg-[#241b18] group-hover:text-white"><ArrowUpRight size={19}/></span></div><div className="mt-4 flex items-center justify-between border-b border-[#d9cdc2] pb-4"><p className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#6e5d51]">{look.label}</p><span className="text-xs text-[#9d8b7e]">0{index+1}</span></div></a>)}</div>
  </div></section>;
}

function Locations() {
  return <section id="locations" className="relative overflow-hidden bg-[#ddd0c3] px-5 py-24 sm:px-9 lg:px-14 lg:py-32"><div className="pointer-events-none absolute -right-16 -top-24 font-display text-[22rem] leading-none tracking-[-.1em] text-white/20">G</div><div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
    <div><p className="eyebrow text-[#8c5f47]">05 / Find your place</p><h2 className="mt-5 max-w-[760px] font-display text-[clamp(3rem,6vw,6.4rem)] leading-[1.02] tracking-[-.06em] text-[#241b18]">A salon near you.<br/><em className="font-normal">A moment for you.</em></h2><p className="mt-7 max-w-[550px] text-base leading-7 text-[#65554b]">With over 200 salons in more than 50 cities, your next Geetanjali moment is never far away.</p><a href={URLS.locations} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-6 rounded-full bg-[#28201b] px-7 py-4 text-xs font-semibold uppercase tracking-[.15em] text-white transition hover:bg-[#8c634c]"><MapPin size={16}/> Find a salon <ArrowUpRight size={16}/></a></div>
    <div className="border-t border-[#ad9888] pt-5 lg:ml-auto lg:w-[80%]"><p className="mb-4 text-[11px] font-semibold uppercase tracking-[.2em] text-[#8b6450]">Find us in</p><div className="grid grid-cols-2 gap-y-3 text-base text-[#42332b]">{featuredCities.map(city=><span key={city}>{city}</span>)}</div><p className="mt-7 text-xs text-[#816c5c]">And many more across India</p></div>
  </div></section>;
}

export default function App() {
  return <><Hero/><Stats/><Intro/><Services/><Ritual/><Editorial/><Locations/><Footer/></>;
}
