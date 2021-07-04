import {render, screen} from '@testing-library/react';
import Author from "./Author";

test('renders Author', () => {
    const {test} = Author;
    render(<Author/>);
    const textElement = screen.getByText(test);
    expect(textElement).toBeInTheDocument();
});
