import { mkdir, readFile, writeFile } from 'node:fs/promises';

const pages = {
  about: ['Our Story', 'Discover Geetanjali Salon, from one salon in Green Park in 1989 to a nationwide destination for beauty and style.'],
  services: ['Services', 'Explore personalised hair, skin, makeup, barbershop, and bridal services at Geetanjali Salon.'],
  gallery: ['The Edit', 'Explore Geetanjali Salon editorial looks, hair artistry, bridal beauty, and grooming inspiration.'],
  locations: ['Find a Salon', 'Search Geetanjali Salon locations and choose a salon near you.'],
  book: ['Book an Appointment', 'Plan your Geetanjali Salon visit and send an appointment request to the team.'],
};

const home = await readFile('dist/index.html', 'utf8');
for (const [route, [title, description]] of Object.entries(pages)) {
  await mkdir(`dist/${route}`, { recursive: true });
  const html = home
    .replace('<title>Geetanjali Salon — The Art of Being You</title>', `<title>${title} | Geetanjali Salon</title>`)
    .replace('Discover Geetanjali Salon: expert hair, beauty, skin, makeup and grooming experiences across India since 1989.', description);
  await writeFile(`dist/${route}/index.html`, html);
}
