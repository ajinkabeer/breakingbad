import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Header from '../components/Header'

describe('Header Component', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(
            <Header />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it('renders the correct component', () => {
        const { getByText } = render(<Header />);
        getByText('Breaking Bad Characters');
    });
})