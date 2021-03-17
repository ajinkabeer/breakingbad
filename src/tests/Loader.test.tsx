import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Loader from '../components/Loader';

describe('Header Component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders the correct component', () => {
    const { getByText } = render(<Loader />);
    getByText('Loading..');
  });
});
