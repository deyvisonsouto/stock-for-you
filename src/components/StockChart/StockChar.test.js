import { render } from '@testing-library/react';

import StockChart from './StockChart';


test('renders the stock chart', () => {
    const data = [{ label: 'label1', data: [{ primary: new Date(), secondary: 5 }] }];
    render(
        <StockChart data={data} />);
    expect(true).toBe(true);
});
