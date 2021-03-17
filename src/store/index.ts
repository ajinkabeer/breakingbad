import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/characters';
import characterReducer from './slices/character';

export const rootReducer = combineReducers({
  characters: charactersReducer,
  character: characterReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };

export type RootState = ReturnType<typeof rootReducer>;
