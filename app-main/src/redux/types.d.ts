import { store, combinedReducer } from './storage-persist/store';

type AppStore = typeof store;
type AppState = ReturnType<typeof combinedReducer>;
type AppDispatch = typeof store.dispatch;
