export type Lang = 'uz' | 'ru' | 'en';
export const langs: Lang[] = ['uz', 'ru', 'en'];
export const defaultLang: Lang = 'uz';

export const htmlLang: Record<Lang, string> = { uz: 'uz', ru: 'ru', en: 'en' };
export const ogLocale: Record<Lang, string> = { uz: 'uz_UZ', ru: 'ru_RU', en: 'en_US' };
export const langLabel: Record<Lang, string> = { uz: "O‘zbekcha", ru: 'Русский', en: 'English' };

/** Uzbek lives at the root ("/"), the others under "/ru" and "/en". */
export function path(lang: Lang, page = ''): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const p = page ? `/${page}` : '';
  return `${prefix}${p}` || '/';
}

/** Menu link: "contact" is a section at the end of every page, "sustainability" a section of the home page, the rest are pages. */
export function navHref(lang: Lang, key: string): string {
  if (key === 'contact') return '#contact';
  if (key === 'sustainability') return `${path(lang)}#sustainability`;
  return path(lang, key);
}

/** Used by every page: one static page is generated per language. */
export function langPaths() {
  return langs.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}
