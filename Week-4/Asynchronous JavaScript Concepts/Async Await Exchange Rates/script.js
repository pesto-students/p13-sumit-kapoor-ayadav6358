async function getExchangeRate(currencyCode) {
    try {
      const response = await fetch("https://api.exchangerate.host/latest");
      const data = await response.json();
      
      const exchangeRate = data.rates[currencyCode];
      
      if (exchangeRate === undefined) {
        return null;
      }
      
      return parseFloat(exchangeRate.toFixed(4));
    } catch (error) {
      throw new Error("An error occurred while fetching the exchange rate.");
    }
  }
  
  // Testing
  getExchangeRate("USD")
    .then(rate => {
      console.log(rate); // Output: 1.0920
    })
    .catch(error => {
      console.error(error);
    });
  
  getExchangeRate("XYZ")
    .then(rate => {
      console.log(rate); // Output: null
    })
    .catch(error => {
      console.error(error);
    });
  