export const apiCurrency = async (currency) => {
  const ENDPOINT = `https://economia.awesomeapi.com.br/json/${currency}`;
  const promise = await fetch(ENDPOINT);
  const response = promise.json();
  return response;
};

export const apiAllCurrency = async () => {
  const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';
  const promise = await fetch(ENDPOINT);
  const response = promise.json();
  return response;
};