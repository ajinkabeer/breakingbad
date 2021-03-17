import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCharacterByIdThunk,
  characterSelector,
} from '../store/slices/character';

const Details = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacterByIdThunk({ id: 1 }));
  }, [dispatch]);

  const { response, loading } = useSelector(characterSelector);

  if (loading) {
    return <p>Loading..</p>;
  }

  return (
    <div>
      <h3>Details</h3>
      <code>{JSON.stringify(response)}</code>
    </div>
  );
};

export default Details;
