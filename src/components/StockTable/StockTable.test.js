import { render, screen } from '@testing-library/react';

import StockTable from './StockTable';

const stockTableData = [
    {
        stockSymbol: 'TEST',
        date: new Date(),
        price: 10,
        facebookData: 2000,
        instagramData: 200,
        twitterData: 2000,
        recommendation: 1,
        risk: 'balanced'
    }
]


test('renders the stock table', () => {
    render(
        <StockTable stockPrices={stockTableData} />);
    expect(screen.getByText(/Stock Symbol/)).toBeInTheDocument();
});

