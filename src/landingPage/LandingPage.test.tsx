import { render, screen } from '@testing-library/react';
import { LandingPage } from './LandingPage';

test('renders header', () => {
    render(<LandingPage />);
    const headerElement = screen.getByText('Kevin Tarwater');
    expect(headerElement).toBeInTheDocument();
});

test('renders resume', () => {
    render(<LandingPage />);
    const resumeElement = screen.getByText(/5 years experience/i);
    expect(resumeElement).toBeInTheDocument();
});
