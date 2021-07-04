import {render, screen} from '@testing-library/react';
import Display from "./Display";

test('renders Formula', () => {
    const { test } = Display;
    render(<Display />);
    const textElement = screen.getByText(test);
    expect(textElement).toBeInTheDocument();
});
