import { localeSlice } from './locale-slice';

export * from './locale-slice';
export const reducers = {
  [localeSlice.name]: localeSlice.reducer,
};
