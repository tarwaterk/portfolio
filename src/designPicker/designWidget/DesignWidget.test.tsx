import { render, screen } from '@testing-library/react';
import { DesignWidget } from './DesignWidget';

test('renders color input and angle input', () => {
    const mockProps = {
        onAngleUpdate: jest.fn(),
        onColorUpdate: jest.fn()
    }
    render(<DesignWidget {...mockProps} />);
    const angleInputElement = screen.getByText('Select Angle:');
    const colorInputElement = screen.getByText('Select Color:');
    expect(angleInputElement).toBeInTheDocument();
    expect(colorInputElement).toBeInTheDocument();
});