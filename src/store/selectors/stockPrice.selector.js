export const stockPriceSelector = (state) => {
    return state.stockPrice && state.stockPrice.stockPrices;
}