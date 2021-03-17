import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchCharactersThunk,
  charactersSelector,
} from '../store/slices/characters';
import Character from '../components/Character';
import Loader from '../components/Loader';
import '../css/home.css';

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCharactersThunk());
  }, [dispatch]);

  const { response, loading } = useSelector(charactersSelector);

  const onClickHandler = (id: number) => {
    history.push(`/details/${id}`);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="grid-container">
        {response?.map(({ char_id: id, name, nickname, img, portrayed }) => (
          <Character
            key={id}
            id={id}
            name={name}
            nickname={nickname}
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
