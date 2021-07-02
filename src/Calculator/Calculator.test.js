import { render, screen } from '@testing-library/react';
import Calculator from "./Calculator";

test('renders calculator', () => {
    render(<Calculator />);
    const textElement = screen.getByText(/This is a Calculator/i);
    expect(textElement).toBeInTheDocument();
});