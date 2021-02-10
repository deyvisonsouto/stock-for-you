import { render, screen } from '@testing-library/react';
import Button from './Button';


test('renders the button', () => {
    render(
        <Button>Button test</Button>);
    expect(screen.getByText(/Button test/)).toBeInTheDocument();
});
