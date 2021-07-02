import {render, screen} from '@testing-library/react'
import Numbers from './Numbers'

test('renders calculator', () => {
    render(<Numbers />);
    const textElement = screen.getByText(/1/i);
    expect(textElement).toBeInTheDocument();
});