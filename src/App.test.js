import { render, screen } from '@testing-library/react';
import Home from './App';

test('renders elements', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Header/i);
  const linkElement2 = screen.getByText(/quentin/i);
  const linkElement3 = screen.getByText(/david/i);
  const linkElement4 = screen.getByText(/michael/i);
  const linkElement5 = screen.getByText(/Footer/i);
  expect(linkElement).toBeInTheDocument();
});
