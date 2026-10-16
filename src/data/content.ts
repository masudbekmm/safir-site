// ─────────────────────────────────────────────────────────────
//  SITE TEXT: every word on the site, in Uzbek / Russian / English.
//  Draft copy. Replace anything that isn't true for Safir.
// ─────────────────────────────────────────────────────────────
import type { Lang } from '../i18n';
type L = Record<Lang, string>;

export const ui = {
  skip: { uz: 'Asosiy kontentga o‘tish', ru: 'Перейти к содержанию', en: 'Skip to content' } as L,
  menu: { uz: 'Menyu', ru: 'Меню', en: 'Menu' } as L,
  language: { uz: 'Til', ru: 'Язык', en: 'Language' } as L,
  quote: { uz: 'Narx so‘rash', ru: 'Запросить цены', en: 'Request a quote' } as L,
  catalog: { uz: 'Mahsulotlar', ru: 'Наша продукция', en: 'View products' } as L,
  call: { uz: 'Qo‘ng‘iroq qilish', ru: 'Позвонить', en: 'Call us' } as L,
  rights: { uz: 'Barcha huquqlar himoyalangan.', ru: 'Все права защищены.', en: 'All rights reserved.' } as L,
  tagline: {
    uz: 'To‘qimachilik mahsulotlari ishlab chiqaruvchisi: ulgurji buyurtmalar va doimiy yetkazib berish.',
    ru: 'Производство текстильной продукции: оптовые заказы и регулярные поставки.',
    en: 'Textile products manufacturer: wholesale orders and regular supply.',
  } as L,
  pages: { uz: 'Sahifalar', ru: 'Страницы', en: 'Pages' } as L,
  contactTitle: { uz: 'Aloqa', ru: 'Контакты', en: 'Contact' } as L,
};

export const nav = [
  { key: '', label: { uz: 'Bosh sahifa', ru: 'Главная', en: 'Home' } as L },
  { key: 'products', label: { uz: 'Mahsulotlar', ru: 'Продукция', en: 'Products' } as L },
  { key: 'about', label: { uz: 'Biz haqimizda', ru: 'О нас', en: 'About' } as L },
  { key: 'sustainability', label: { uz: 'Barqarorlik', ru: 'Устойчивость', en: 'Sustainability' } as L },
  { key: 'contact', label: { uz: 'Aloqa', ru: 'Контакты', en: 'Contact' } as L },
];

export const seo = {
  home: {
    title: {
      uz: 'Safir — tikuv-trikotaj mahsulotlari ishlab chiqaruvchisi | O‘zbekiston',
      ru: 'Safir — производитель швейно-трикотажной продукции | Узбекистан',
      en: 'Safir — Garment Manufacturer in Uzbekistan | T-shirts, Shirts',
    } as L,
    description: {
      uz: 'Safir — Andijon viloyatidagi tikuv-trikotaj korxonasi. Eksport uchun futbolka, ko‘ylak va boshqa kiyimlar ishlab chiqaramiz. Namuna va narxlarni so‘rang.',
      ru: 'Safir — швейно-трикотажное производство в Андижанской области. Шьём футболки, рубашки и другую одежду на экспорт. Запросите образцы и цены.',
      en: 'Safir is a garment manufacturer in Andijan, Uzbekistan, producing T-shirts, shirts and other clothing for export buyers. Request samples and prices.',
    } as L,
  },
  products: {
    title: { uz: 'Mahsulotlar | Safir', ru: 'Продукция | Safir', en: 'Products | Safir' } as L,
    description: {
      uz: 'Safir mahsulotlari: futbolka va polo, ko‘ylaklar, xudi, bolalar kiyimi, sport kiyimi va ish kiyimi. Eksport buyurtmalari uchun namuna va narxlarni so‘rang.',
      ru: 'Продукция Safir: футболки и поло, рубашки, худи, детская, спортивная одежда и спецодежда. Образцы и цены для экспортных заказов по запросу.',
      en: 'Safir products: T-shirts and polos, shirts, hoodies, children’s wear, sportswear and workwear. Request samples and prices for export orders.',
    } as L,
  },
  about: {
    title: { uz: 'Kompaniya haqida | Safir', ru: 'О компании | Safir', en: 'About us | Safir' } as L,
    description: {
      uz: 'Safir — Andijon viloyatidagi tikuv-trikotaj korxonasi. Eksport xaridorlari uchun kiyim ishlab chiqaramiz.',
      ru: 'Safir — швейно-трикотажное производство в Андижанской области. Производим одежду для экспортных покупателей.',
      en: 'Safir is a garment manufacturer in Andijan region, Uzbekistan, making clothing for export buyers.',
    } as L,
  },
};

export const home = {
  // Big line over the hero video
  slogan: {
    uz: 'Safir: mahorat, sifat, ishonch…',
    ru: 'Safir: мастерство, качество, надёжность…',
    en: 'Safir: craftsmanship, quality, reliability…',
  } as L,
  scroll: { uz: 'Pastga', ru: 'Вниз', en: 'Scroll down' } as L,
  pauseVideo: { uz: 'Videoni to‘xtatish', ru: 'Остановить видео', en: 'Pause video' } as L,
  playVideo: { uz: 'Videoni qo‘yish', ru: 'Включить видео', en: 'Play video' } as L,
  // Intro: first part dark, second part grey (like a two-tone headline)
  introA: {
    uz: 'Safir — eksport uchun',
    ru: 'Safir — швейно-трикотажное производство,',
    en: 'Safir is a garment manufacturer',
  } as L,
  introB: {
    uz: 'kiyim tikadigan tikuv-trikotaj korxonasi.',
    ru: 'которое шьёт одежду на экспорт.',
    en: 'making clothing for export.',
  } as L,
  floorCaption: {
    uz: 'Andijon viloyatidagi tikuv sexi',
    ru: 'Наш швейный цех в Андижанской области',
    en: 'Our sewing floor in Andijan region',
  } as L,
  floorAlt: {
    uz: 'Safir tikuv sexi: tikuvchilar ishlab chiqarish liniyasida',
    ru: 'Швейный цех Safir: швеи на производственной линии',
    en: 'Safir sewing floor: workers on the production line',
  } as L,
  lineAlt: {
    uz: 'Safir ishlab chiqarish liniyasi va monitoring ekrani',
    ru: 'Производственная линия Safir и экран мониторинга',
    en: 'Safir production line with the monitoring screen',
  } as L,
  title: {
    uz: 'O‘zbekistonda tikilgan kiyimlar — dunyo bo‘ylab xaridorlar uchun',
    ru: 'Одежда, сшитая в Узбекистане, для покупателей по всему миру',
    en: 'Clothing made in Uzbekistan for buyers worldwide',
  } as L,
  lead: {
    uz: 'Safir — Andijon viloyatidagi tikuv-trikotaj korxonasi. Futbolka, ko‘ylak va boshqa kiyimlarni sizning talablaringiz bo‘yicha tikamiz, har bir buyurtmani tekshiramiz va kelishilgan muddatda jo‘natamiz.',
    ru: 'Safir — швейно-трикотажное производство в Андижанской области. Шьём футболки, рубашки и другую одежду по вашим требованиям, проверяем каждый заказ и отгружаем в согласованные сроки.',
    en: 'Safir is a garment manufacturer in Andijan, Uzbekistan. We make T-shirts, shirts and other clothing to your specifications, inspect every order and ship on the agreed date.',
  } as L,
  fabricsTitle: { uz: 'Mahsulotlarimiz', ru: 'Наша продукция', en: 'What we make' } as L,
  fabricsLead: {
    uz: 'Har bir mahsulot bo‘yicha namuna va narxlarni so‘rang.',
    ru: 'Образцы и цены по каждому изделию — по запросу.',
    en: 'Samples and prices for every product are available on request.',
  } as L,
  all: { uz: 'Barcha mahsulotlar', ru: 'Вся продукция', en: 'All products' } as L,
  // TODO: confirm every point below is true for Safir before launch
  eco: {
    label: { uz: 'Barqarorlik', ru: 'Устойчивость', en: 'Sustainability' } as L,
    title: {
      uz: 'Tabiiy materiallar, mas’uliyatli ishlab chiqarish',
      ru: 'Натуральные материалы, ответственное производство',
      en: 'Natural materials, responsible production',
    } as L,
    lead: {
      uz: 'Biz tabiiy tolalardan foydalanamiz va ishlab chiqarishni tabiatga va odamlarga hurmat bilan tashkil qilamiz.',
      ru: 'Мы работаем с натуральными волокнами и строим производство с уважением к природе и людям.',
      en: 'We work with natural fibres and run our production with respect for nature and people.',
    } as L,
    photoAlt: {
      uz: 'Ko‘k paxta matosi ustidagi paxta chanog‘i',
      ru: 'Коробочка хлопка на синей хлопковой ткани',
      en: 'A cotton boll resting on blue cotton fabric',
    } as L,
    items: [
      {
        icon: 'leaf',
        t: { uz: 'Tabiiy materiallar', ru: 'Натуральные материалы', en: 'Natural materials' } as L,
        d: {
          uz: 'Asosan paxta va boshqa tabiiy tolalar: yumshoq, havo o‘tkazadigan va teriga yoqimli.',
          ru: 'В основе — хлопок и другие натуральные волокна: мягкие, дышащие и приятные для кожи.',
          en: 'Mostly cotton and other natural fibres: soft, breathable and kind to skin.',
        } as L,
      },
      {
        icon: 'cotton',
        t: { uz: 'O‘zbek paxtasi', ru: 'Узбекский хлопок', en: 'Uzbek cotton' } as L,
        d: {
          uz: 'Paxta yetishtiriladigan mamlakatda ishlaymiz, shuning uchun xomashyo bizga yaqin.',
          ru: 'Мы работаем в стране, где выращивают хлопок, поэтому сырьё находится рядом.',
          en: 'We work in a cotton-growing country, so our raw material is close to home.',
        } as L,
      },
      {
        icon: 'cut',
        t: { uz: 'Kamroq chiqindi', ru: 'Меньше отходов', en: 'Less waste' } as L,
        d: {
          uz: 'Bichishni puxta rejalashtiramiz, har bir metr matodan unumli foydalanamiz.',
          ru: 'Тщательно планируем раскрой, чтобы использовать каждый метр ткани.',
          en: 'We plan every cut carefully to make the most of each metre of fabric.',
        } as L,
      },
      {
        icon: 'people',
        t: { uz: 'Jamoamizga g‘amxo‘rlik', ru: 'Забота о команде', en: 'Care for our team' } as L,
        d: {
          uz: 'Xavfsiz, yorug‘ ish joylari va jamoamiz uchun adolatli sharoitlar.',
          ru: 'Безопасные, светлые рабочие места и честные условия для нашей команды.',
          en: 'Safe, well-lit workplaces and fair conditions for our team.',
        } as L,
      },
    ],
  },
  whyTitle: { uz: 'Nega Safir', ru: 'Почему Safir', en: 'Why Safir' } as L,
  why: [
    {
      t: { uz: 'Sifat nazorati', ru: 'Контроль качества', en: 'Quality control' } as L,
      d: {
        uz: 'Har bir buyurtma jo‘natishdan oldin tekshiriladi.',
        ru: 'Каждый заказ проверяется перед отгрузкой.',
        en: 'Every order is inspected before it ships.',
      } as L,
    },
    {
      t: { uz: 'Sizning talablaringiz bo‘yicha', ru: 'По вашим требованиям', en: 'Made to your specification' } as L,
      d: {
        uz: 'Mato, rang, o‘lchamlar va qadoqlash siz bilan kelishiladi.',
        ru: 'Ткань, цвета, размерный ряд и упаковку согласуем с вами.',
        en: 'Fabric, colours, sizes and packaging are agreed with you.',
      } as L,
    },
    {
      t: { uz: 'Ulgurji narxlar', ru: 'Оптовые цены', en: 'Wholesale pricing' } as L,
      d: {
        uz: 'Buyurtma hajmiga qarab narx va to‘lov shartlari.',
        ru: 'Цены и условия оплаты в зависимости от объёма заказа.',
        en: 'Prices and payment terms that scale with your order volume.',
      } as L,
    },
    {
      t: { uz: 'Eksportga jo‘natish', ru: 'Отгрузка на экспорт', en: 'Export shipping' } as L,
      d: {
        uz: 'Buyurtmani kelishilgan muddatda jo‘natamiz va ishlab chiqarish jarayonidan xabardor qilib turamiz.',
        ru: 'Отгружаем заказ в согласованный срок и держим вас в курсе на всех этапах производства.',
        en: 'We ship on the agreed date and keep you updated throughout production.',
      } as L,
    },
  ],
  stepsTitle: { uz: 'Buyurtma qanday beriladi', ru: 'Как сделать заказ', en: 'How ordering works' } as L,
  steps: [
    {
      t: { uz: 'So‘rov yuboring', ru: 'Отправьте запрос', en: 'Send an inquiry' } as L,
      d: {
        uz: 'Mahsulot, miqdor, o‘lchamlar va muddatni email, WhatsApp yoki Telegram orqali yozing.',
        ru: 'Напишите изделие, объём, размеры и сроки по email, в WhatsApp или Telegram.',
        en: 'Tell us the product, quantity, sizes and timing by email, WhatsApp or Telegram.',
      } as L,
    },
    {
      t: { uz: 'Namunani tasdiqlang', ru: 'Утвердите образец', en: 'Approve a sample' } as L,
      d: {
        uz: 'Tasdiqlashingiz uchun namuna tikamiz.',
        ru: 'Шьём образец на ваше утверждение.',
        en: 'We sew a sample for your approval.',
      } as L,
    },
    {
      t: { uz: 'Shartlarni kelishing', ru: 'Согласуйте условия', en: 'Agree terms' } as L,
      d: {
        uz: 'Narx, hajm, to‘lov va yetkazib berish shartlarini kelishib olamiz.',
        ru: 'Фиксируем цену, объём, условия оплаты и доставки.',
        en: 'We confirm price, volume, payment and delivery terms.',
      } as L,
    },
    {
      t: { uz: 'Ishlab chiqarish va jo‘natish', ru: 'Производство и отгрузка', en: 'Production and shipping' } as L,
      d: {
        uz: 'Buyurtmani tikamiz, tekshiramiz va jo‘natamiz.',
        ru: 'Шьём, проверяем и отгружаем ваш заказ.',
        en: 'We produce, inspect and ship your order.',
      } as L,
    },
  ],
  ctaTitle: {
    uz: 'Buyurtma bermoqchimisiz? Bizga yozing.',
    ru: 'Хотите разместить заказ? Напишите нам.',
    en: 'Planning an order? Message us.',
  } as L,
  ctaText: {
    uz: 'Mahsulot, miqdor va talablaringizni yozing, narx va namunalar haqida javob beramiz.',
    ru: 'Напишите, какая продукция нужна, объём и требования, мы ответим по ценам и образцам.',
    en: 'Tell us the product, quantity and requirements, and we will reply with prices and samples.',
  } as L,
};

// id → photo name: src/assets/photos/product-<id>.jpg
// tone → brand colour of the panel shown until a photo exists: blue, orange, black, cream, yellow (see global.css)
export const products = [
  {
    id: 'tshirts',
    tone: 'blue',
    name: { uz: 'Futbolka va polo', ru: 'Футболки и поло', en: 'T-shirts and polos' } as L,
    desc: {
      uz: 'Paxta va aralash trikotajdan: oddiy yoki bosma bilan.',
      ru: 'Из хлопкового и смесового трикотажа: однотонные или с принтом.',
      en: 'In cotton and blended jersey, plain or printed.',
    } as L,
  },
  {
    id: 'shirts',
    tone: 'cream',
    name: { uz: 'Ko‘ylaklar', ru: 'Рубашки', en: 'Shirts' } as L,
    desc: {
      uz: 'Erkaklar, ayollar va bolalar uchun klassik va kundalik ko‘ylaklar.',
      ru: 'Классические и повседневные рубашки для мужчин, женщин и детей.',
      en: 'Classic and casual shirts for men, women and children.',
    } as L,
  },
  {
    id: 'hoodies',
    tone: 'orange',
    name: { uz: 'Xudi va svitshotlar', ru: 'Худи и свитшоты', en: 'Hoodies and sweatshirts' } as L,
    desc: {
      uz: 'Futer va flis trikotajdan issiq kiyimlar.',
      ru: 'Тёплая одежда из футера и флиса.',
      en: 'Warm garments in fleece and French terry.',
    } as L,
  },
  {
    id: 'kids',
    tone: 'yellow',
    name: { uz: 'Bolalar kiyimi', ru: 'Детская одежда', en: 'Children’s wear' } as L,
    desc: {
      uz: 'Yumshoq paxta matolardan bolalar uchun kiyimlar.',
      ru: 'Одежда для детей из мягкого хлопка.',
      en: 'Clothing for children in soft cotton.',
    } as L,
  },
  {
    id: 'sport',
    tone: 'black',
    name: { uz: 'Sport va uy kiyimi', ru: 'Спортивная и домашняя одежда', en: 'Sportswear and loungewear' } as L,
    desc: {
      uz: 'Shim, shortik va to‘plamlar: elastik va qulay.',
      ru: 'Брюки, шорты и комплекты: эластичные и удобные.',
      en: 'Joggers, shorts and sets: stretchy and comfortable.',
    } as L,
  },
  {
    id: 'workwear',
    tone: 'blue',
    name: { uz: 'Ish kiyimi va forma', ru: 'Спецодежда и униформа', en: 'Workwear and uniforms' } as L,
    desc: {
      uz: 'Chidamli matolardan korporativ forma va ish kiyimlari.',
      ru: 'Корпоративная униформа и рабочая одежда из прочных тканей.',
      en: 'Corporate uniforms and work clothing in hard-wearing fabrics.',
    } as L,
  },
];

export const productsPage = {
  title: { uz: 'Mahsulotlar', ru: 'Продукция', en: 'Products' } as L,
  lead: {
    uz: 'Quyida asosiy yo‘nalishlar. Boshqa tikuv mahsulotlari, matolar, o‘lchamlar va narxlar bo‘yicha bizga yozing.',
    ru: 'Ниже — основные направления. По другим изделиям, тканям, размерам и ценам пишите нам.',
    en: 'These are our main product lines. Ask us about other garments, fabrics, sizes and prices.',
  } as L,
};

export const about = {
  title: { uz: 'Safir haqida', ru: 'О компании Safir', en: 'About Safir' } as L,
  lead: {
    uz: 'Safir — Andijon viloyatidagi tikuv-trikotaj korxonasi. Eksport xaridorlari uchun futbolka, ko‘ylak va boshqa kiyimlar ishlab chiqaramiz.',
    ru: 'Safir — швейно-трикотажное производство в Андижанской области Узбекистана. Мы шьём футболки, рубашки и другую одежду для экспортных покупателей.',
    en: 'Safir is a garment manufacturer in Andijan region, Uzbekistan. We make T-shirts, shirts and other clothing for export buyers.',
  } as L,
  body: {
    uz: 'Ishimiz oddiy: tafsilotlarni siz bilan kelishamiz, namuna tikamiz, buyurtmani sifat nazorati bilan ishlab chiqaramiz va kelishilgan muddatda jo‘natamiz.',
    ru: 'Наша работа проста: согласуем с вами детали, шьём образец, производим заказ с контролем качества и отгружаем в согласованный срок.',
    en: 'Our work is simple: we agree the details with you, sew a sample, produce the order with quality control and ship it on the agreed date.',
  } as L,
  photoAlt: {
    uz: 'Safir ishlab chiqarish sexi',
    ru: 'Производственный цех Safir',
    en: 'Safir production floor',
  } as L,
  // Figures from the Safir company presentation (employees updated to ~600)
  capacity: {
    label: { uz: 'Masshtab', ru: 'Масштаб', en: 'Scale' } as L,
    title: { uz: 'Ishlab chiqarish quvvati', ru: 'Производственные мощности', en: 'Production capacity' } as L,
    items: [
      { v: { uz: '20', ru: '20', en: '20' } as L, l: { uz: 'tikuv konveyeri', ru: 'швейных конвейеров', en: 'sewing conveyors' } as L },
      { v: { uz: '2', ru: '2', en: '2' } as L, l: { uz: 'osma tashish tizimi (Hanger System)', ru: 'подвесные системы (Hanger System)', en: 'overhead hanger systems' } as L },
      { v: { uz: '~600', ru: '~600', en: '~600' } as L, l: { uz: 'xodim', ru: 'сотрудников', en: 'employees' } as L },
      { v: { uz: '600 000', ru: '600 000', en: '600,000' } as L, l: { uz: 'dona mahsulot oyiga', ru: 'изделий в месяц', en: 'items per month' } as L },
      { v: { uz: '7 tonna', ru: '7 тонн', en: '7 tons' } as L, l: { uz: 'kuniga bichish', ru: 'раскроя в сутки', en: 'cutting per day' } as L },
    ],
    note: {
      uz: 'Ishlab chiqarish tuzilmasi yirik buyurtmalarda barqaror ishlashni va bichishdan qadoqlashgacha har bir bosqichni ketma-ket nazorat qilishni ta’minlaydi.',
      ru: 'Структура производства обеспечивает стабильную работу с крупными заказами и последовательный контроль каждого этапа — от раскроя до упаковки.',
      en: 'Our production structure keeps large orders running steadily, with step-by-step control of every stage from cutting to packaging.',
    } as L,
  },
  // Photos: src/assets/photos/cycle-1.jpg … cycle-6.jpg
  cycle: {
    label: { uz: 'Materialdan tayyor mahsulotgacha', ru: 'От материала до готового изделия', en: 'From material to finished product' } as L,
    title: { uz: 'Ketma-ket ishlab chiqarish sikli', ru: 'Последовательный производственный цикл', en: 'Sequential production cycle' } as L,
    steps: [
      { uz: 'Buyurtmachi matosini qabul qilish', ru: 'Приём ткани заказчика', en: 'Receiving the customer’s fabric' } as L,
      { uz: 'Belgilash va bichish', ru: 'Разметка и раскрой', en: 'Marking and cutting' } as L,
      { uz: 'Tikish va yig‘ish', ru: 'Пошив и сборка', en: 'Sewing and assembly' } as L,
      { uz: 'Sifat nazorati', ru: 'Контроль качества', en: 'Quality control' } as L,
      { uz: 'Dazmollash va pardozlash', ru: 'Глажка и финишная обработка', en: 'Ironing and finishing' } as L,
      { uz: 'Taxlash va qadoqlash', ru: 'Складывание и упаковка', en: 'Folding and packaging' } as L,
    ],
  },
  // Company profile, page 7. Photo: src/assets/photos/equipment.jpg
  equipment: {
    label: { uz: 'Texnologik infratuzilma', ru: 'Технологическая инфраструктура', en: 'Technological infrastructure' } as L,
    title: { uz: 'Uskunalar, ERP va tajriba', ru: 'Оборудование, ERP и экспертиза', en: 'Equipment, ERP and expertise' } as L,
    photoAlt: { uz: 'Bichish stoli: tayyor pijama va bichilgan detallar', ru: 'Раскройный стол: готовая пижама и крой', en: 'Cutting table with a finished pyjama set and cut pieces' } as L,
    items: [
      { t: 'JACK', d: { uz: 'Ishlab chiqarish liniyalarining barqaror ishlashi uchun sanoat tikuv uskunalari.', ru: 'Промышленное швейное оборудование для стабильной работы производственных линий.', en: 'Industrial sewing equipment for stable operation of production lines.' } as L },
      { t: 'BULMER', d: { uz: 'Avtomatlashtirilgan tayyorlash va aniq bichish uchun uskunalar.', ru: 'Оборудование для автоматизированной подготовки и точного раскроя.', en: 'Equipment for automated preparation and precise cutting.' } as L },
      { t: '2 Hanger System', d: { uz: 'Ishlab chiqarishda mahsulot harakatini tashkil etuvchi ikkita osma konveyer tizimi.', ru: 'Две подвесные конвейерные системы для организации движения изделий в производстве.', en: 'Two overhead conveyor systems that move products through production.' } as L },
      { t: 'ERP', d: { uz: 'Korxonaning barcha asosiy jarayonlari yagona ERP tizimida boshqariladi va kuzatiladi.', ru: 'Все ключевые операции предприятия управляются и отслеживаются в единой ERP-системе.', en: 'All key operations are managed and tracked in a single ERP system.' } as L },
      { t: { uz: 'Turk mutaxassislari', ru: 'Турецкие специалисты', en: 'Turkish specialists' } as L, d: { uz: 'Ishlab chiqarishni tashkil etish va texnologik intizomni nazorat qilishda turk mutaxassislarining amaliy tajribasidan foydalanamiz.', ru: 'Практический опыт турецких специалистов используется для организации производства и контроля технологической дисциплины.', en: 'The practical experience of Turkish specialists guides how we organise production and keep technological discipline.' } as L },
    ],
    note: {
      uz: 'Ishlab chiqarish jarayonlari sanoat uskunalari va raqamli boshqaruv tizimi bilan qo‘llab-quvvatlanadi. ERP buyurtmalar shaffofligi, yuklamani rejalashtirish, bosqichlar nazorati va tayyor mahsulot harakatini ta’minlaydi.',
      ru: 'Производственные процессы поддерживаются промышленным оборудованием и цифровой системой управления предприятием. ERP обеспечивает прозрачность заказов, планирование загрузки, контроль этапов производства и движение готовой продукции.',
      en: 'Production is supported by industrial equipment and a digital management system. ERP keeps orders transparent and covers load planning, control of each production stage and the movement of finished goods.',
    } as L,
  },
  // Company profile, page 8. Photos: quality-1.jpg, quality-2.jpg
  quality: {
    label: { uz: 'Nazorat va mas’uliyat', ru: 'Контроль и ответственность', en: 'Control and responsibility' } as L,
    title: { uz: 'Har bir bosqichda sifat', ru: 'Качество на каждом этапе', en: 'Quality at every stage' } as L,
    items: [
      { t: 'ISO', photo: 'quality-1', alt: { uz: 'Tayyor kiyimni tekshirish', ru: 'Проверка готового изделия', en: 'Inspecting a finished garment' } as L, d: { uz: 'Kompaniyaning sifat tizimi ISO sertifikatlash talablariga tayanadi.', ru: 'Система качества компании опирается на требования сертификации ISO.', en: 'Our quality system is supported by ISO certification requirements.' } as L },
      { t: 'SEDEX', photo: 'quality-2', alt: { uz: 'Dazmollangan pijama yoqasi', ru: 'Отглаженный воротник пижамы', en: 'A freshly pressed pyjama collar' } as L, d: { uz: 'Sedex tamoyillariga muvofiq ishlash mas’uliyatli va shaffof hamkorlikka e’tiborimizni aks ettiradi.', ru: 'Работа в соответствии с принципами Sedex отражает внимание к ответственным и прозрачным условиям сотрудничества.', en: 'Working in line with Sedex principles reflects our focus on responsible, transparent cooperation.' } as L },
    ],
    termsTitle: { uz: 'Tijorat shartlari', ru: 'Коммерческие условия', en: 'Commercial terms' } as L,
    terms: [
      { uz: '100% oldindan to‘lov.', ru: '100% предоплата.', en: '100% prepayment.' } as L,
      { uz: 'Yetkazib berish, bojxona rasmiylashtiruvi, boj, QQS va tegishli xarajatlar import qiluvchi tomonidan to‘lanadi.', ru: 'Доставку, таможенное оформление, пошлины, НДС и сопутствующие расходы оплачивает импортёр.', en: 'Delivery, customs clearance, duties, VAT and related costs are paid by the importer.' } as L,
      { uz: 'Modellar, materiallar, muddatlar va qadoqlash ishlab chiqarish boshlanishidan oldin kelishiladi.', ru: 'Модели, материалы, сроки и упаковка согласовываются до начала производства.', en: 'Models, materials, deadlines and packaging are agreed before production starts.' } as L,
    ],
    strip: {
      uz: 'Sifat nazorati ishlab chiqarish davomida va tayyor mahsulotni qadoqlashdan oldin amalga oshiriladi.',
      ru: 'Контроль качества проводится в процессе производства и перед упаковкой готовой продукции.',
      en: 'Quality control is carried out during production and before finished products are packed.',
    } as L,
  },
  // Company profile, page 9
  sales: {
    title: { uz: 'Sotuv geografiyasi', ru: 'География продаж', en: 'Sales geography' } as L,
    countries: [
      { uz: 'Rossiya', ru: 'Россия', en: 'Russia' } as L,
      { uz: 'Ukraina', ru: 'Украина', en: 'Ukraine' } as L,
      { uz: 'Qozog‘iston', ru: 'Казахстан', en: 'Kazakhstan' } as L,
    ],
    contactsTitle: { uz: 'Kontaktlar', ru: 'Контакты', en: 'Contacts' } as L,
    personTitle: { uz: 'Mas’ul shaxs', ru: 'Контактное лицо', en: 'Contact person' } as L,
    since: { uz: 'Andijon · O‘zbekiston · 2018-yildan', ru: 'Андижан · Узбекистан · с 2018 года', en: 'Andijan · Uzbekistan · since 2018' } as L,
  },
  valuesTitle: { uz: 'Biz nimaga tayanamiz', ru: 'На чём мы строим работу', en: 'What we stand on' } as L,
  values: [
    {
      t: { uz: 'Ishonchlilik', ru: 'Надёжность', en: 'Reliability' } as L,
      d: {
        uz: 'Va’da qilingan muddat va hajmga rioya qilamiz.',
        ru: 'Соблюдаем обещанные сроки и объёмы.',
        en: 'We keep the dates and volumes we promise.',
      } as L,
    },
    {
      t: { uz: 'Ochiqlik', ru: 'Открытость', en: 'Transparency' } as L,
      d: {
        uz: 'Narx va shartlar oldindan aniq.',
        ru: 'Цены и условия понятны заранее.',
        en: 'Prices and terms are clear upfront.',
      } as L,
    },
    {
      t: { uz: 'Sifat', ru: 'Качество', en: 'Quality' } as L,
      d: {
        uz: 'Har bir buyurtma jo‘natishdan oldin tekshiriladi.',
        ru: 'Каждый заказ проверяется перед отгрузкой.',
        en: 'Every order is checked before it ships.',
      } as L,
    },
  ],
};

export const contact = {
  title: { uz: 'Aloqa', ru: 'Контакты', en: 'Contact' } as L,
  lead: {
    uz: 'Buyurtma, namuna yoki hamkorlik bo‘yicha yozing yoki qo‘ng‘iroq qiling.',
    ru: 'Пишите или звоните по заказам, образцам и сотрудничеству.',
    en: 'Write or call us about orders, samples or cooperation.',
  } as L,
  phone: { uz: 'Telefon', ru: 'Телефон', en: 'Phone' } as L,
  email: { uz: 'Email', ru: 'Эл. почта', en: 'Email' } as L,
  address: { uz: 'Manzil', ru: 'Адрес', en: 'Address' } as L,
  messengers: { uz: 'Messenjerlar', ru: 'Мессенджеры', en: 'Messengers' } as L,
  openMap: { uz: 'Xaritada ochish', ru: 'Открыть на карте', en: 'Open in maps' } as L,
};
