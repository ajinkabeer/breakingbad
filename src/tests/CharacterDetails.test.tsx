import { render } from '@testing-library/react';
import CharacterDetails from '../components/CharacterDetails';

const props = {
    name: 'testName',
    img: 'test.png',
    nickname: 'testnickname',
    birthday: '18-01-1995',
    portrayed: 'testactor',
    category: 'testcategory'
};
const {
    img,
    name,
    nickname,
    birthday,
    portrayed,
    category
} = props;

describe('Character Component', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(
            <CharacterDetails
                img={img}
                name={name}
                nickname={nickname}
                birthday={birthday}
                portrayed={portrayed}
                category={category}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders the correct props', () => {
        const { getByText } = render(
            <CharacterDetails
                img={img}
                name={name}
                nickname={nickname}
                birthday={birthday}
                portrayed={portrayed}
                category={category}
            />
        );
        getByText('testName');
        getByText('testnickname');
        getByText('18-01-1995');
        getByText('testactor');
        getByText('testcategory');
    });
});
