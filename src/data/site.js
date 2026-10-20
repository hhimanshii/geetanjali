export const ROUTES = {
  home: '/', about: '/about/', services: '/services/', gallery: '/gallery/', locations: '/locations/', book: '/book/',
};

// The only off-site links are the salon's social channel and its official WhatsApp booking number.
export const SOCIAL = {
  instagram: 'https://www.instagram.com/geetanjalisalon/',
  whatsappNumber: '917428918292',
};

export const IMAGES = {
  hero: '/images/hero.jpg',
  hair: '/images/hair.png',
  skin: '/images/skin.png',
  makeup: '/images/makeup.png',
  barber: '/images/barber.png',
  bridal: '/images/bridal.png',
  lookOne: '/images/look-tara.jpg',
  lookTwo: '/images/look-ruya.jpg',
  lookThree: '/images/look-men.jpg',
  salon: '/images/salon-interior.png',
  interiorChairs: '/images/salon-chairs.png',
  interiorArchitecture: '/images/salon-architecture.png',
};

export const services = [
  {
    slug: 'hair', number: '01', title: 'Hair', image: IMAGES.hair, detail: 'Cut · Colour · Care',
    description: 'Hair that feels like you, only more so.',
    intro: 'From a fresh shape to a complete colour story, our stylists balance precision, movement and your personal style.',
    offerings: [
      { title: 'Cutting & styling', text: 'Personalised consultations and precision cuts shaped around your face, hair type and routine.' },
      { title: 'Colour', text: 'Global colour, highlights, lowlights and ombré, with a shade chosen for your complexion and style.' },
      { title: 'Hair rituals', text: 'Nourishing treatments and scalp analysis designed to care for hair from root to tip.' },
      { title: 'Occasion hair', text: 'Waves, curls, braids, polished buns and modern updos for the moments that matter.' },
    ],
  },
  {
    slug: 'skin', number: '02', title: 'Skin', image: IMAGES.skin, detail: 'Radiance · Rituals · Rest',
    description: 'A considered approach to feeling good in your skin.',
    intro: 'Discover expert face, body, hand and foot rituals tailored to your skin and your moment.',
    offerings: [
      { title: 'Face rituals', text: 'Facials tailored to hydration, radiance, purification, firmness and individual skin needs.' },
      { title: 'Body spa', text: 'Essential oil therapies, wraps, exfoliation and massage for restorative time out.' },
      { title: 'Hands & feet', text: 'Manicures and pedicures with exfoliation, massage and deep nourishment.' },
      { title: 'Nail bar', text: 'Gel nails, nail art, lasting polish and creative finishing touches.' },
    ],
  },
  {
    slug: 'makeup', number: '03', title: 'Makeup', image: IMAGES.makeup, detail: 'Beauty · Expression · Occasion',
    description: 'Your features, your mood, your moment.',
    intro: 'Our artists create beautifully personal looks, from effortless polish to occasion-ready glamour.',
    offerings: [
      { title: 'Party makeup', text: 'A look shaped around your outfit, features and the feeling you want to bring.' },
      { title: 'Special occasions', text: 'Thoughtful makeup for celebrations, portraits and unforgettable evenings.' },
      { title: 'Bridal makeup', text: 'A considered look for every wedding event, created around you.' },
    ],
  },
  {
    slug: 'barbershop', number: '04', title: 'Barbershop', image: IMAGES.barber, detail: 'Cut · Beard · Groom',
    description: 'Sharp detail. Easy confidence.',
    intro: 'Classic craft meets a contemporary point of view in grooming designed for your everyday.',
    offerings: [
      { title: 'Professional haircuts', text: 'Clean shape and precision finishing for your hair, style and routine.' },
      { title: 'Beard styling', text: 'Expert shaping and grooming for a polished look.' },
      { title: 'Grooming rituals', text: 'Hair, skin and hand care designed for men.' },
    ],
  },
  {
    slug: 'bridal', number: '05', title: 'Bride & Groom', image: IMAGES.bridal, detail: 'Celebrate · Prepare · Shine',
    description: 'For every moment leading up to the big one.',
    intro: 'From engagement and sangeet to wedding and reception, we create a cohesive beauty story for your celebrations.',
    offerings: [
      { title: 'Wedding hair & makeup', text: 'Looks thoughtfully matched to your features, outfit, jewellery and occasion.' },
      { title: 'Bridal preparation', text: 'Hair, skin and body rituals to help you feel your best before the celebration.' },
      { title: 'Groom services', text: 'Considered cuts, styling and grooming for the groom and his moments.' },
    ],
  },
];

export const gallery = [
  { image: IMAGES.lookOne, title: 'The modern muse', category: 'Hair', position: '72% center' },
  { image: IMAGES.lookTwo, title: 'The wedding edit', category: 'Bridal', position: 'center' },
  { image: IMAGES.hair, title: 'A little movement', category: 'Hair', position: 'center' },
  { image: IMAGES.makeup, title: 'In your element', category: 'Beauty', position: 'center' },
  { image: IMAGES.lookThree, title: 'New perspective', category: 'Grooming', position: '30% center' },
  { image: IMAGES.bridal, title: 'Made for the moment', category: 'Bridal', position: 'center' },
  { image: IMAGES.skin, title: 'The glow ritual', category: 'Beauty', position: 'center' },
  { image: IMAGES.salon, title: 'Our world of style', category: 'Bridal', position: '30% center' },
];

export const featuredCities = ['Delhi NCR', 'Mumbai', 'Jaipur', 'Ahmedabad', 'Lucknow', 'Pune'];
