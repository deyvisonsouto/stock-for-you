const stockAPI = {
  stockPriceGenerator(stockSymbol, initialDate, finalDate) {
    return new Promise((resolve, reject) => {
      if (!finalDate) {
        finalDate = new Date();
      }
      finalDate = new Date(finalDate);

      if (!this.isValidDate(new Date(initialDate)) || !this.isValidDate(finalDate)) {
        reject(new Error('Invalid dates'));
      }

      // mock up stock price
      const stockPriceArr = [];
      let currentDate = new Date(initialDate);
      while (this.compareDate(currentDate, finalDate) < 1) {
        const priceFactor = Math.floor(Math.random() * 100) + 1; // to avoid deep variations
        const min = priceFactor * 0.7; // minimum goes down to  30%
        const max = priceFactor * 1.7;// maximum goes up to 70%
        stockPriceArr.push({
          stockSymbol: stockSymbol,
          date: currentDate,
          price: (Math.random() * (max - min)) + min
        });
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1)); // add the next day
      }
      resolve({ data: stockPriceArr });
    });
  },

  socialMediaCountGenerator(stockSymbol, initialDate, finalDate, socialMedia) {
    return new Promise((resolve, reject) => {
      if (!finalDate) {
        finalDate = new Date();
      }
      finalDate = new Date(finalDate);


      if (!this.isValidDate(new Date(initialDate)) || !this.isValidDate(finalDate)) {
        reject(new Error('Invalid dates'));
      }

      // mock up stock social media mentions
      const stockSocialMediaMentions = [];
      let currentDate = new Date(initialDate);
      finalDate = new Date(finalDate);

      while (this.compareDate(currentDate, finalDate) < 1) {
        stockSocialMediaMentions.push({
          socialMedia: socialMedia,
          stockSymbol: stockSymbol,
          date: currentDate,
          mentionsCount: Math.floor(Math.random() * 100000) + 1
        });
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1)); // add the next day
      }
      resolve({ data: stockSocialMediaMentions });
    });
  },

  recommendationAlgorithm(stockSymbol, stockPrices, socialMediaMentions, risk) {
    return new Promise((resolve) => {
      const recommendations = []
      stockPrices.map(stockPrice => {
        recommendations.push({
          stockSymbol: stockSymbol,
          date: stockPrice.date,
          recommendation: Math.floor(Math.random() * 3)
        });
        return recommendations;
      });
      resolve({ data: recommendations });
    });
  },

  // support functions
  isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  },
  compareDate(date1, date2) {
    return (
      isFinite(date1.valueOf()) &&
        isFinite(date2.valueOf()) ?
        (date1 > date2) - (date1 < date2) :
        NaN
    );
  }
};

export default stockAPI;