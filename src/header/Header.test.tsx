import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders name', () => {
    render(<Header baseAngle={0} baseColor={'#FFFFFF'} setBaseAngle={jest.fn()} setBaseColor={jest.fn()} />);
    const headerText = screen.getByText('Kevin Tarwater');
    expect(headerText).toBeInTheDocument();
});
