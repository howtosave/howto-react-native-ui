import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//import LanguageDetector from 'i18next-browser-languagedetector';
import type { LocaleId } from './types';

import * as en from './en';
import * as ko from './ko';

export const defaultLocale = 'en' as LocaleId;

export const resources = {
  en,
  ko,
} as const;

export const defaultNS = 'common';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //.use(LanguageDetector)

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: process.env['NODE_ENV'] === 'test' ? 'cimode' : defaultLocale,
    ns: Object.keys(en),
    defaultNS,
    resources,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export {
  i18n
};
