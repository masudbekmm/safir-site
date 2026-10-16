// Generates public/og.jpg (the preview image shown when the link is shared in Telegram, etc.)
// Brand colours and logo from the Safir guidelines v1.0.
// Run: node scripts/make-og.mjs     (replace public/og.jpg with your own 1200x630 image anytime)
import sharp from 'sharp';

const W = 1200, H = 630;
const emblem = (color, size) =>
  sharp('public/emblem.png').resize(size, size).composite([{ input: { create: { width: size, height: size, channels: 4, background: color } }, blend: 'in' }]).png().toBuffer();

const logo = await sharp('src/assets/logo.png').resize({ height: 150 }).toBuffer();
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="780" width="420" height="${H}" fill="#0237b9"/>
  <rect x="780" y="0" width="420" height="210" fill="#f3643b"/>
  <rect x="70" y="330" width="90" height="5" fill="#f3643b"/>
  <text x="70" y="410" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="700" fill="#011627">Textile fabrics · Matolar · Ткани</text>
  <text x="70" y="465" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#3f4f63">safir.uz</text>
</svg>`;
await sharp(Buffer.from(svg))
  .composite([
    { input: await emblem('#011627', 460), left: 860, top: 330 },
    { input: await emblem('#f4d35e', 240), left: 1020, top: -80 },
    { input: logo, left: 70, top: 140 },
  ])
  .flatten({ background: '#ffffff' })
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/og.jpg');
console.log('og.jpg written');
