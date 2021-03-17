import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharacters } from '../../api/characters';
import { CharactersResponseType } from './types';

type CharactersType = {
  loading: boolean;
  error: boolean;
  response: CharactersResponseType[] | null;
  initialResponse: CharactersResponseType[] | null;
};

const initialState: CharactersType = {
  loading: false,
  error: false,
  response: null,
  initialResponse: null,
};

export const fetchCharactersThunk = createAsyncThunk(
  'fetch/characters',
  async () => {
    try {
      const response = await fetchCharacters();
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {
    filterResponse(state, action) {
      const { filterBy } = action.payload;
      if (filterBy === 'name') {
        const sorted = state.response
          ?.slice()
          .sort((a, b) => (a.name < b.name ? -1 : Number(a.name > b.name)));
        state.response = sorted;
      }
    },
  },
  extraReducers: {
    [fetchCharactersThunk.pending.type]: (state, action) => {
      state.loading = true;
      state.error = action;
    },
    [fetchCharactersThunk.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action;
    },
    [fetchCharactersThunk.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
      state.initialResponse = action.payload;
    },
  },
});

export const charactersSelector = (state: any) => state.characters;
export const { filterResponse } = charactersSlice.actions;
export default charactersSlice.reducer;
