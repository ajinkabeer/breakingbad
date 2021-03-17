import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchCharacterByIdThunk,
  characterSelector,
} from '../store/slices/character';
import Loader from '../components/Loader';
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
    history.goBack();
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <button type="button" className="back-button" onClick={backButtonHandler}>
        Back
      </button>
      <br />
      <code>{JSON.stringify(response)}</code>
    </div>
  );
};

export default Details;
