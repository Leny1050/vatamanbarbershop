/* ============================================================
 *  VATAMAN BARBERSHOP CIOCANA — единый файл контента
 *  ------------------------------------------------------------
 *  Здесь меняется ВЕСЬ текст и данные сайта.
 *  Разметку (вёрстку) трогать не нужно — всё подтягивается
 *  автоматически в нужные места.
 *
 *  Структура:
 *    1. BUSINESS   — название, город, ссылка на запись
 *    2. CONTACTS   — телефон, адрес, инстаграм, часы работы
 *    3. TEXTS      — все надписи и заголовки на странице
 *    4. CATEGORIES — категории услуг с вложенными сервисами
 *    5. META       — title и description вкладки браузера
 * ============================================================ */

/* ---------- 1. БИЗНЕС ---------- */
export const BUSINESS = {
  name: "Vataman Barbershop",
  city: "Chișinău",
  bookingUrl: "https://n1402362.alteg.io/company/1333593/personal/menu",
}

/* ---------- 2. КОНТАКТЫ ---------- */
export const CONTACTS = {
  phone: {
    display: "069 104 900",
    href: "tel:+37369104900",
  },
  address: "📍Mircea cel Bătrân 26/7, Chisinau, Ciocana",
  instagram: {
    handle: "@vataman.ciocana",
    url: "https://www.instagram.com/vataman.ciocana/",
  },
  hours: [
    { days: "Lun – Dum", time: "10:00 – 20:00" },
  ],
}

/* ---------- 3. ТЕКСТЫ НА СТРАНИЦЕ ---------- */
export const TEXTS = {
  taglineRo: "Tunsori • Barbă • Styling",
  taglineRu: "Мужская парикмахерская",
  about:
    "Tunsori precise, barbă îngrijită, styling impecabil. Vino, relaxează-te, ieși în formă.",
  bookingButton: "Programează-te online",
  bookingNote: "Programare online · non-stop",
  pricesLabel: "Servicii · Услуги",
  contactsTitle: "Contacte",
  careerCta: "Programare rapidă · fără complicații",
  currency: "L",
  copyrightTemplate: "© {year} {name} · {city}",
}

/* ---------- 3.0. NAVIGAȚIE ---------- */
export type NavItem = { href: `#${string}`; label: string }

export const NAV: NavItem[] = [
  { href: "#servicii", label: "Servicii" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contacte", label: TEXTS.contactsTitle },
]

/* ---------- 3.1. GALERIE ---------- */
export type GalleryItem = {
  file: string
  label?: string
  alt?: string
}

export const GALLERY: GalleryItem[] = [
  { file: "1.png" },
  { file: "2.png" },
  { file: "3.png" },
  { file: "4.png" },
  { file: "5.png" },
]

/* ---------- 4. КАТЕГОРИИ УСЛУГ ---------- */
export type Service = {
  ro: string
  ru: string
  price: string
  duration?: string
}

export type ServiceCategory = {
  id: string
  title: string
  subtitle?: string
  services: Service[]
}

export const CATEGORIES: ServiceCategory[] = [
  {
    id: "barber",
    title: "Barber",
    subtitle: "Servicii standard",
    services: [
      {
        ro: "Complex (tuns + aranjare barbă)",
        ru: "Комплекс (стрижка + борода)",
        price: "400",
        duration: "1 h",
      },
      {
        ro: "Tuns bărbat",
        ru: "Мужская стрижка",
        price: "250",
        duration: "45 min",
      },
      {
        ro: "Aranjare barbă",
        ru: "Уход за бородой",
        price: "150",
        duration: "30 min",
      },
      {
        ro: "Tonare păr",
        ru: "Тонирование волос",
        price: "250",
        duration: "30 min",
      },
    ],
  },
  {
    id: "top-barber",
    title: "TOP Barber",
    subtitle: "Servicii premium",
    services: [
      {
        ro: "Complex (tuns + aranjare barbă)",
        ru: "Комплекс (стрижка + борода)",
        price: "500",
        duration: "1 h",
      },
      {
        ro: "Tuns bărbat",
        ru: "Мужская стрижка",
        price: "350",
        duration: "45 min",
      },
      {
        ro: "Tuns din foarfecă",
        ru: "Стрижка ножницами",
        price: "350",
        duration: "1 h",
      },
      {
        ro: "Aranjare Barbă",
        ru: "Уход за бородой",
        price: "250",
        duration: "30 min",
      },
      {
        ro: "Tonare păr",
        ru: "Тонирование волос",
        price: "350",
        duration: "30 min",
      },
      {
        ro: "Tonare barbă",
        ru: "Тонирование бороды",
        price: "300",
        duration: "30 min",
      },
    ],
  },
  {
    id: "epilare",
    title: "Epilare cu ceară",
    subtitle: "Îngrijire & estetică",
    services: [
      {
        ro: "Epilare ceară nas",
        ru: "Эпиляция носа",
        price: "50",
        duration: "10 min",
      },
      {
        ro: "Epilare ceară urechi",
        ru: "Эпиляция ушей",
        price: "100",
        duration: "10 min",
      },
      {
        ro: "Epilare ceară nas + urechi",
        ru: "Нос + уши",
        price: "150",
        duration: "10 min",
      },
      {
        ro: "Stilizarea și pensarea sprâncenelor",
        ru: "Коррекция бровей",
        price: "150",
        duration: "15 min",
      },
    ],
  },
]

// Обратная совместимость — плоский массив
export const SERVICES: Service[] = CATEGORIES.flatMap((c) => c.services)

/* ---------- 5. META ---------- */
export const META = {
  title: "VATAMAN BARBERSHOP CIOCANA — Frizerie pentru bărbați în Chișinău",
  description:
    "Tunsori, barbă, styling. Programare online la Vataman Barbershop, Mircea cel Bătrân 26/7, Chișinău, Ciocana.",
}