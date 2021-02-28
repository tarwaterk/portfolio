import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LandingPage', () => {
  render(<App />);
  const lpHeaderElement = screen.getByText('Kevin Tarwater');
  expect(lpHeaderElement).toBeInTheDocument();
});
