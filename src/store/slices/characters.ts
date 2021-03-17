import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import fetchCharacters from '../../api/characters';
import { CharactersResponseType } from './types';

type CharactersType = {
  loading: boolean;
  error: boolean;
  response: CharactersResponseType | null;
};

const initialState: CharactersType = {
  loading: false,
  error: false,
  response: null,
};

export const fetchCharactersThunk: AsyncThunk<
  unknown,
  void,
  {}
> = createAsyncThunk('fetch/characters', async () => {
  try {
    const response = await fetchCharacters();
    return response.data;
  } catch (error) {
    return error;
  }
});

const charactersSlice = createSlice({
  name: 'charactersSlice',
  initialState,
  reducers: {},
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
    },
  },
});

export const searchResultsSelector = (state: any) => state.characters;
export default charactersSlice.reducer;
