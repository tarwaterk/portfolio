import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders name', () => {
    render(<Header baseAngle={0} baseColor={'#FFFFFF'} />);
    const headerText = screen.getByText('Kevin Tarwater');
    expect(headerText).toBeInTheDocument();
});
