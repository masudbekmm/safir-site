# Safir website (safir.uz)

Fast static website: Uzbek (default, `/`), Russian (`/ru`), English (`/en`).
Built with [Astro](https://astro.build). No database, no backend, almost no JavaScript.

## 1. Run it on your computer

Needs Node.js 22.12+ (https://nodejs.org). With nvm: `nvm install 22 && nvm alias default 22`.

```bash
npm install
npm run dev        # opens http://localhost:4321 with live reload
npm run build      # creates the final site in the dist/ folder
```

## 2. Where to change things

| What | File |
|---|---|
| Phone, email, Telegram, address, map link, stats | `src/data/company.ts` |
| All text (Uzbek / Russian / English), product lines | `src/data/content.ts` |
| Colours, fonts, spacing | `src/styles/global.css` (top of file: `:root`, brand colours from the guidelines) |
| Brand guidelines | `brand/Safir guidelines v.1.0.pdf` |
| Page layouts | `src/pages/[...lang]/*.astro` |
| Logo | `src/assets/logo.png` (header, blue) and `src/assets/logo-white.png` (footer) |
| Emblem used in the colour panels | `public/emblem.png` (white shape, coloured by CSS) |
| Browser-tab icon | `public/favicon.png`, `public/apple-touch-icon.png` |
| Photos | put files into `src/assets/photos/` (see below) |
| Home page video | `public/video/hero.mp4` + `public/video/hero-poster.jpg`. **Currently a TEST clip** from Pexels ("A Video Footage of Sewing Factory", Arsel Ozgurdal, Pexels license): replace with Safir's own footage before launch |
| Link-preview image (Telegram etc.) | `public/og.jpg` (1200×630), made by `node scripts/make-og.mjs` |

### Photos
Just drop your original photos in `src/assets/photos/` with these names (`.jpg`, `.png` or `.webp`).
You do NOT need to resize them: the build creates small WebP versions automatically.

| File name | Where it appears |
|---|---|
| `hero.jpg` | top of the home page (portrait works best, ~4:5) |
| `about.jpg` | About page (optional) |
| `product-tshirts.jpg`, `product-shirts.jpg`, `product-hoodies.jpg`, `product-kids.jpg`, `product-sport.jpg`, `product-workwear.jpg` | Products page (landscape, ~4:3) |

Until a photo exists, a brand-colour panel with the emblem is shown.

**Temporary product photos** (free Pexels stock, replace with your own products when ready):
`product-tshirts` pexels.com/photo/8346226 · `product-shirts` pexels.com/photo/102129 · `product-hoodies` pexels.com/photo/17076381 ·
`product-kids` pexels.com/photo/7282428 · `product-sport` pexels.com/photo/31961168 · `product-workwear` pexels.com/photo/9222627
To add/rename a product line, edit `products` in `src/data/content.ts`; the photo name is `product-<id>`.

## 3. Before you go live: checklist

- [ ] Real phone / email / Telegram / WhatsApp / Instagram in `company.ts`
- [ ] Street address (3 languages); map location is set
- [ ] Replace draft wording in `content.ts` (About page, "Why Safir", fabric descriptions) with what is true for Safir
- [ ] Add real numbers to `stats` and set `showStats: true` (hidden until then)
- [ ] Add photos
- [ ] Have a native Uzbek and Russian speaker proofread the text

## 4. Deploy (free) with Cloudflare Pages

1. Create a GitHub account, make a new **private** repository, upload this project
   (`git init`, `git add .`, `git commit`, `git push`; node_modules/dist are ignored automatically).
2. Create a free Cloudflare account → **Workers & Pages → Create → Pages → Connect to Git**, choose the repo.
3. Settings: Framework preset **Astro**, build command `npm run build`, output directory `dist`.
4. Deploy. You get a temporary `something.pages.dev` address; check the site there first.
5. In the Pages project: **Custom domains → Set up → safir.uz**.
6. Point the domain to Cloudflare in the Eskiz domain panel: change the domain's **nameservers**
   to the two Cloudflare gives you. (Wait from minutes up to a few hours.)
7. HTTPS is automatic. Every `git push` redeploys the site.

Plan B (if you'd rather use Eskiz hosting): run `npm run build` and upload the *contents* of `dist/`
to the hosting's `public_html` folder. Pretty URLs (`/about`) need a rewrite rule there; ask Eskiz support.

## 5. SEO setup after launch

1. Google Search Console: add `https://safir.uz`, then submit `https://safir.uz/sitemap-index.xml`.
2. Yandex Webmaster: same (Yandex is big in Uzbekistan).
3. Create a Google Business Profile and a Yandex Business / Yandex Maps listing: this is what makes
   the brand name "safir" show up with address, phone, and map.
4. Link the website from Instagram, Telegram, LinkedIn and any business directories.
5. Test speed: https://pagespeed.web.dev (aim for 90+ on mobile).
