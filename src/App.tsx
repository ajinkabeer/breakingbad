import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCharactersThunk,
  charactersSelector,
} from './store/slices/characters';
import {
  fetchCharacterByIdThunk,
  characterSelector,
} from './store/slices/character';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersThunk());
    dispatch(fetchCharacterByIdThunk({ id: 1 }));
  }, [dispatch]);

  const { response, loading } = useSelector(charactersSelector);
  const {
    response: characterResponse,
    loading: characterLoading,
  } = useSelector(characterSelector);

  if (loading) {
    return <p>Loading..</p>;
  }

  if (characterLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <header>
        <h1>Breaking Bad</h1>
        <code>{JSON.stringify(response)}</code>
        <h2>Character response</h2>
        <pre>{JSON.stringify(characterResponse)}</pre>
      </header>
    </div>
  );
};

export default App;
