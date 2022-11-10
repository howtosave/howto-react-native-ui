import { resources, defaultNS } from './i18n';
import { localeList } from './locale-list';

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['en'];
  }
}

type I18nCommonKey = keyof typeof resources['en']['common'];

type LocaleList = Partial<typeof localeList>;
type LocaleId = 'en' | 'ko';
type LocaleInfo = [string, string?];
