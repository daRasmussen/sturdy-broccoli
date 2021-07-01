import { render, screen } from '@testing-library/react';
import Btn from './Btn';


test('renders calculator', () => {
    const signChar = '+'
    render(<Btn sign={signChar} />);
    const sign = screen.getByText(`${signChar}`);
    expect(sign).toBeInTheDocument();
});
