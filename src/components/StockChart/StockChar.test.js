import { render, screen } from '@testing-library/react';

import StockChart from './StockChart';


test('renders the stock chart', () => {
    const data = [{ label: 'label1', data: [{ primary: new Date(), secondary: 5 }] }];
    const { container } = render(
        <StockChart data={data} />);
    console.log(container.firstChild);
    expect(container.firstChild).toHaveClass('ReactChart')
});
