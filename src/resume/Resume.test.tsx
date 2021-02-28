import { render, screen } from '@testing-library/react';
import { Resume } from './Resume';

test('renders summary', () => {
    render(<Resume />);
    const summaryElement = screen.getByText(/5 years experience/i);
    const techListElement = screen.getByText(/Javascript \/ Typescript/i);
    expect(summaryElement).toBeInTheDocument();
    expect(techListElement).toBeInTheDocument();
});

test('renders experience items', () => {
    render(<Resume />);
    const goldmanItemElement = screen.getByText(/Goldman Sachs/i);
    expect(goldmanItemElement).toBeInTheDocument();
});