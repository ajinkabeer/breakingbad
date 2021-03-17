import './style.css';

interface Props {
  name: string;
  img: string;
  portrayed: number;
  nickname: string;
}

const Character = ({ name, img, portrayed, nickname }: Props) => (
  <div className="card">
    <img src={img} width={200} height={300} alt={name} />
    <div className="card-container">
      <div className="card-title-container">
        <h3>{name}</h3>
        <p>{portrayed}</p>
      </div>
      <p>{nickname}</p>
    </div>
  </div>
);

export default Character;
