import { render, screen } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
import { Reservations } from './components';

test('Checking Time Status Section', () => {
  render( <Reservations />);

  const statusHeadaing = screen.getByText("Evening");

  expect(statusHeadaing).toBeInTheDocument();
});
=======
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
>>>>>>> 988d8580b3ddd6ce3da4d860b367c0ff2078ed3a
