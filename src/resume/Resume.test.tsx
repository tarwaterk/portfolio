import { render, screen } from '@testing-library/react';
import { Resume } from './Resume';

test('renders summary', () => {
    const mockProps = {
        baseAngle: 0,
        baseColor: '#FFFFFF'
    };
    render(<Resume {...mockProps} />);
    const summaryElement = screen.getByText(/5 years experience/i);
    const techListElement = screen.getByText(/Javascript \/ Typescript/i);
    expect(summaryElement).toBeInTheDocument();
    expect(techListElement).toBeInTheDocument();
});

test('renders experience items', () => {
    const mockProps = {
        baseAngle: 0,
        baseColor: '#FFFFFF'
    };
    render(<Resume {...mockProps} />);
    const goldmanItemElement = screen.getByText(/Goldman Sachs/i);
    expect(goldmanItemElement).toBeInTheDocument();
});