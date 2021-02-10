import { render, screen } from '@testing-library/react';
import Input from './Input';


test('renders the button', () => {
    render(
        <Input label={"test input"} value={"test input"} changed={()=>{}} />);
    expect(screen.getByText(/test input/)).toBeInTheDocument();
});
