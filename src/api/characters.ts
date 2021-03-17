import { AxiosResponse } from 'axios';
import apiClient from './client';

type PromiseType = () => Promise<AxiosResponse<unknown>>;

const fetchCharacters: PromiseType = () => apiClient.get('/characters');

export default fetchCharacters;
