import apiClient from './client';

const fetchCharacters = () => apiClient.get('/characters');

const fetchCharacterById = ({ id }: { id: number }) =>
  apiClient.get(`characters/${id}`);

export { fetchCharacters, fetchCharacterById };
