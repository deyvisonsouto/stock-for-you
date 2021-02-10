import { compareDate } from "./dateHelper";

export const stockTableFormat = (stocks, stockMentionsFacebook, stockMentionsInstagram, stockMentionsTwitter, stockRecommendations, risk) => {
  const stockTable = [];
  if (stocks && stockRecommendations) {
    stocks.map(stock => {
      stockTable.push(
        {
          stockSymbol: stock.stockSymbol,
          date: stock.date,
          price: stock.price,
          facebookData: (stockMentionsFacebook.filter(d => compareDate(d.date, stock.date))[0] || {}).mentionsCount,
          instagramData: (stockMentionsInstagram.filter(d => compareDate(d.date, stock.date))[0] || {}).mentionsCount,
          twitterData: (stockMentionsTwitter.filter(d => compareDate(d.date, stock.date))[0] || {}).mentionsCount,
          recommendation: (stockRecommendations.filter(d => compareDate(d.date, stock.date))[0] || {}).recommendation,
          risk
        }
      );
      return stockTable;
    })
  }
  return stockTable;
}


export const stockChartForm = (stockPrices) => {
  if (stockPrices && stockPrices.length > 0) {
    const stockChart = [];
    stockPrices.map(price => {
      stockChart.push({
        primary: new Date(price.date),
        secondary: price.price
      })
      return stockChart;
    });

    return [{ label: stockPrices[0].stockSymbol, data: stockChart }];
  }
  return [];
}

