import {render, screen} from '@testing-library/react';
import Formula from "./Formula";

test('renders Formula', () => {
    const { test } = Formula;
    render(<Formula/>);
    const textElement = screen.getByText(test);
    expect(textElement).toBeInTheDocument();
});
