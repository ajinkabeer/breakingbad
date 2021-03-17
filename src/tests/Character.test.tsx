import { fireEvent, render } from '@testing-library/react';
import Character from '../components/Character';

const props = {
  id: 1,
  name: 'Name',
  img: 'test.png',
  portrayed: 'test',
  nickname: 'test',
  onClick: jest.fn(),
};
const { id, name, img, portrayed, nickname, onClick } = props;

describe('Character Component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Character
        key={id}
        id={id}
        name={name}
        nickname={nickname}
        img={img}
        portrayed={portrayed}
        onClick={onClick}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Test whether component can be clicked', () => {
    const { getByTestId } = render(
      <Character
        key={id}
        id={id}
        name={name}
        nickname={nickname}
        img={img}
        portrayed={portrayed}
        onClick={onClick}
      />
    );

    fireEvent.click(getByTestId('click-character'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
