import type { LocaleId, LocaleInfo } from "./types";

export const locales = ['en', 'ko'];

export const localeList = {
  en: ['English'],
  ko: ['한글'],
} as Record<LocaleId, LocaleInfo>;
