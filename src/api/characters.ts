import apiClient from './client';

const fetchCharacters = () => apiClient.get('/characters');

export default fetchCharacters;
