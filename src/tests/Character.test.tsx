import Character from '../components/Character'
import { fireEvent, render } from '@testing-library/react';

const props = {
    id: 1,
    name: 'Name',
    img: 'test.png',
    portrayed: 'test',
    nickname: 'test',
    onClick: jest.fn()
}

describe('Character Component', () => {
    const { id, name, img, portrayed, nickname, onClick } = props
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
        const { id, name, img, portrayed, nickname, onClick } = props
        const { getByTestId } = render(<Character
            key={id}
            id={id}
            name={name}
            nickname={nickname}
            img={img}
            portrayed={portrayed}
            onClick={onClick}
        />);

        fireEvent.click(getByTestId('click-character'))
        expect(onClick).toHaveBeenCalledTimes(1)
    });
});