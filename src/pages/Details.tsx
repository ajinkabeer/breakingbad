import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchCharacterByIdThunk,
  characterSelector,
} from '../store/slices/character';
import Loader from '../components/Loader';
import CharacterDetails from '../components/CharacterDetails';
import '../css/details.css';

const Details = ({ match }) => {
  const id = match.params.slug;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      dispatch(fetchCharacterByIdThunk({ id }));
    }
  }, [dispatch, id]);

  const { response, loading } = useSelector(characterSelector);

  const backButtonHandler = () => {
    history.replace('/');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ flex: 1 }}>
      <button type="button" onClick={backButtonHandler}>
        Back
      </button>
      <div className="content">
        {response?.map(
          ({ char_id, img, name, nickname, birthday, portrayed, category }) => (
            <CharacterDetails
              key={char_id}
              img={img}
              name={name}
              nickname={nickname}
              birthday={birthday}
              portrayed={portrayed}
              category={category}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Details;
