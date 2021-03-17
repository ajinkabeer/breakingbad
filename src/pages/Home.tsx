import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCharactersThunk,
  charactersSelector,
} from '../store/slices/characters';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharactersThunk());
  }, [dispatch]);

  const { response, loading } = useSelector(charactersSelector);

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <h3>Home</h3>
      <code>{JSON.stringify(response)}</code>
    </div>
  );
};

export default Home;
