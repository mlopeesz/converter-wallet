import { walletFetch } from '../actions';

const apiCurrency = async (currency) => {
  const ENDPOINT = `https://economia.awesomeapi.com.br/json/${currency}`;
  const promise = await fetch(ENDPOINT);
  const response = promise.json();
  return response;
};

export const getCurrency = (currency) => async (dispatch) => {
  await apiCurrency(currency).then((response) => dispatch(walletFetch(response)));
};

export default apiCurrency;
