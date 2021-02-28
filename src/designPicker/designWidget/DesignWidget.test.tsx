import { render, screen } from '@testing-library/react';
import { DesignWidget } from './DesignWidget';

test('renders color input and angle input', () => {
    render(<DesignWidget />);
    const angleInputElement = screen.getByText('Select Angle:');
    const colorInputElement = screen.getByText('Select Color:');
    expect(angleInputElement).toBeInTheDocument();
    expect(colorInputElement).toBeInTheDocument();
});
