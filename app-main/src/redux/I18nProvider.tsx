import React from 'react';

import { I18nextProvider } from 'react-i18next';
import { useStore } from 'react-redux';
import { i18n } from '../i18n';
import { LOCALE_KEY } from './reducers';
import type { LocaleState } from './reducers';

type Props = {
  children: React.ReactNode;
};

export const I18nProvider: React.FC<Props> = ({ children }) => {
  const store = useStore();
  const { [LOCALE_KEY]: locale } = store.getState() as LocaleState;

  React.useEffect(() => {
    if (locale !== i18n.language) i18n.changeLanguage(locale);
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
