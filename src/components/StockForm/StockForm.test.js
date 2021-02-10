import { render, screen } from '@testing-library/react';

import StockForm from './StockForm';


test('renders the stock form stock symbol', () => {
    render(
        <StockForm />);
    expect(screen.getByText(/Stock Symbol/)).toBeInTheDocument();
});

test('renders the stock form from date', () => {
    render(
        <StockForm />);
    expect(screen.getByText(/From Date/)).toBeInTheDocument();
});

test('renders the stock form to date', () => {
    render(
        <StockForm />);
    expect(screen.getByText(/To Date/)).toBeInTheDocument();
});


test('renders the stock facebook', () => {
    render(
        <StockForm />);
    expect(screen.getByText(/Facebook/)).toBeInTheDocument();
});


test('renders the stock instagram', () => {
    render(
        <StockForm />);
    expect(screen.getByText(/Instagram/)).toBeInTheDocument();
});

test('renders the stock twitter', () => {
    render(
        <StockForm />);
    expect(screen.getByText(/Twitter/)).toBeInTheDocument();
});


test('renders the stock Check stocks button', () => {
    render(
        <StockForm />);
    expect(screen.getByText(/Check Stocks/)).toBeInTheDocument();
});