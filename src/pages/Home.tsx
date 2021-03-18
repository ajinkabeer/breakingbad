import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchCharactersThunk,
  charactersSelector,
  filterResponse,
} from '../store/slices/characters';
import Character from '../components/Character';
import Loader from '../components/Loader';
import '../css/home.css';
import Filter from '../components/Filter';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [filterBy, setFilterBy] = useState<string>('none');

  useEffect(() => {
    dispatch(fetchCharactersThunk());
  }, [dispatch]);

  const { response, loading } = useSelector(charactersSelector);

  useEffect(() => {
    dispatch(filterResponse({ filterBy }));
  }, [filterBy, dispatch]);

  const onClickHandler = useCallback(
    (id: number) => {
      history.push(`/details/${id}`);
    },
    [history]
  );

  const onFilterChange = useCallback((e) => {
    setFilterBy(e.target.value);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Filter onChange={onFilterChange} value={filterBy} />
      <div className="grid-container">
        {response?.map(({ char_id: id, name, img, portrayed }) => (
          <Character
            key={id}
            id={id}
            name={name}
            img={img}
            portrayed={portrayed}
            onClick={() => onClickHandler(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
