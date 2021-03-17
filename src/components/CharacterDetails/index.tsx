import './style.css';

interface Props {
  img: string;
  name: string;
  nickname: string;
  birthday: string;
  portrayed: string;
  category: string;
}

const CharacterDetails = ({
  img,
  name,
  nickname,
  birthday,
  portrayed,
  category,
}: Props) => (
  <div>
    <div className="content-container">
      <img src={img} height={400} alt={name} />
    </div>
    <div className="content-container">
      <p>
        Name: <strong>{name}</strong>
      </p>
      <p>
        Nickname: <strong>{nickname}</strong>
      </p>
      <p>
        Birthday: <strong>{birthday}</strong>
      </p>
      <p>
        Portrayed by: <strong>{portrayed}</strong>
      </p>
      <p>
        Category: <strong>{category}</strong>
      </p>
    </div>
  </div>
);

export default CharacterDetails;
