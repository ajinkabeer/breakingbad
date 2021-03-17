import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharacterById } from '../../api/characters';
import { CharactersResponseType } from './types';

type CharacterType = {
  loading: boolean;
  error: boolean;
  response: CharactersResponseType | null;
};

const initialState: CharacterType = {
  loading: false,
  error: false,
  response: null,
};

export const fetchCharacterByIdThunk = createAsyncThunk(
  'fetch/characters',
  async ({ id }: { id: number }) => {
    try {
      const response = await fetchCharacterById({ id });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const characterSlice = createSlice({
  name: 'characterSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCharacterByIdThunk.pending.type]: (state, action) => {
      state.loading = true;
      state.error = action;
    },
    [fetchCharacterByIdThunk.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action;
    },
    [fetchCharacterByIdThunk.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
  },
});

export const characterSelector = (state: any) => state.character;
export default characterSlice.reducer;
