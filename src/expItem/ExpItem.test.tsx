import { render, screen } from '@testing-library/react';
import { ExpItem } from './ExpItem';

test('renders all data points', () => {
    const mockProps = {
        employer: 'Test Employer', 
        title: 'Test Employee Title',
        startDate: '01/2001',
        endDate: '02/2001',
        bullets: [
            'bullet point 1',
            'bullet point 2',
            'bullet point 3'
        ],
        backgroundImage: 'linear-gradient(#FFF,0)'
    };
    render(<ExpItem {...mockProps} />);
    const employerElement = screen.getByText('Test Employer');
    const employeeTitleElement = screen.getByText('Test Employee Title');
    const startDateElement = screen.getByText(/01\/2001/);
    const endDateElement = screen.getByText(/02\/2001/);
    const bulletListElements = screen.getAllByText(/bullet point/);
    expect(employerElement).toBeInTheDocument();
    expect(employeeTitleElement).toBeInTheDocument();
    expect(startDateElement).toBeInTheDocument();
    expect(endDateElement).toBeInTheDocument();
    expect(bulletListElements.length).toEqual(3);
});