import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCharactersThunk,
  charactersSelector,
} from './store/slices/characters';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersThunk());
  }, [dispatch]);

  const { response, loading } = useSelector(charactersSelector);

  if (loading) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <header>
        <h1>Breaking Bad</h1>
        <code>{JSON.stringify(response)}</code>
      </header>
    </div>
  );
};

export default App;
