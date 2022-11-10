import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultLocale } from '../../i18n';
import type { LocaleId } from '../../i18n';

export const LOCALE_KEY = 'locale';

export const localeSlice = createSlice({
  name: LOCALE_KEY,
  initialState: defaultLocale,
  reducers: {
    setLocale: (state: any, action: any) => {
      return action.payload as LocaleId;
    },
  },
});

export type LocaleState = {
  [LOCALE_KEY]: LocaleId;
};

export const { setLocale } = localeSlice.actions;
