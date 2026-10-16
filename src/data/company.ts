// ─────────────────────────────────────────────────────────────
//  COMPANY DETAILS: edit everything marked TODO before launch.
// ─────────────────────────────────────────────────────────────
export const company = {
  name: 'Safir',
  url: 'https://safir.uz',

  // TODO: real contact details
  phone: '+998 90 757 00 24',
  phoneHref: '+998907570024', // digits only, with country code
  phone2: '+998 91 161 05 05',
  phone2Href: '+998911610505',
  email: 'info@safir.uz',
  legalName: 'Boqiy Ravon Tekstil LLC', // from the company profile
  founded: 2018,
  contactPerson: { name: 'Pozilov Abdullajon', phone: '+998 91 161 05 05', phoneHref: '+998911610505' },
  telegram: 'https://t.me/safir_uz',
  whatsapp: 'https://wa.me/998000000000',
  instagram: 'https://instagram.com/safir_uz',

  // TODO: add street and building once confirmed
  address: {
    uz: 'Jalaquduq tumani, Andijon viloyati, O‘zbekiston',
    ru: 'Джалакудукский район, Андижанская область, Узбекистан',
    en: 'Jalaquduq district, Andijan region, Uzbekistan',
  },
  // Factory location (from the Yandex Maps link)
  lat: 40.704036,
  lng: 72.624777,
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=40.704036,72.624777',
  yandexUrl: 'https://yandex.uz/maps/?pt=72.624777,40.704036&z=17&l=map',

  // TODO: fill in REAL numbers and set showStats to true.
  // The section stays hidden until you do, so no made-up figures go live.
  showStats: false,
  stats: [
    { value: '0', label: { uz: 'yillik tajriba', ru: 'лет опыта', en: 'years of experience' } },
    { value: '0', label: { uz: 'turdagi mahsulot', ru: 'видов изделий', en: 'product types' } },
    { value: '0', label: { uz: 'doimiy mijoz', ru: 'постоянных клиентов', en: 'regular clients' } },
  ],
};
