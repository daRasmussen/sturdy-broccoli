import {render, screen} from '@testing-library/react';
import Buttons from "./Buttons";

test('renders Buttons', () => {
    const {test} = Buttons;
    render(<Buttons/>);
    const textElement = screen.getByText(test);
    expect(textElement).toBeInTheDocument();
});
