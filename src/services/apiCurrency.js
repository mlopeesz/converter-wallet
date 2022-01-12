const apiCurrency = async (currency) => {
  const ENDPOINT = `https://economia.awesomeapi.com.br/json/${currency}`;
  const promise = await fetch(ENDPOINT);
  const response = promise.json();
  return response;
};

export default apiCurrency;
