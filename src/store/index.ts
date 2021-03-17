import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/characters';

export const rootReducer = combineReducers({
  characters: charactersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };

export type RootState = ReturnType<typeof rootReducer>;
