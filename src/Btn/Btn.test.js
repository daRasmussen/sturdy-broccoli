import { render, screen } from '@testing-library/react';
import Btn from './Btn';


test('renders plus button', () => {
    const signChar = '+'
    render(<Btn sign={signChar} />);
    const sign = screen.getByText(`${signChar}`);
    expect(sign).toBeInTheDocument();
});
