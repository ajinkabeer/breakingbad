import './style.css';

interface Props {
  id: number;
  name: string;
  img: string;
  portrayed: number;
  nickname: string;
  onClick: () => void;
}

const Character = ({ id, name, img, portrayed, nickname, onClick }: Props) => (
  <div className="card">
    <a onClick={onClick} tabIndex={id} onKeyPress={onClick} role="button">
      <img src={img} height={400} alt={name} />
      <div className="card-container">
        <div className="card-title-container">
          <h3>{name}</h3>
          <p>{portrayed}</p>
        </div>
        <p>{nickname}</p>
      </div>
    </a>
  </div>
);

export default Character;
