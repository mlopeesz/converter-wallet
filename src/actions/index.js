import { apiCurrency } from '../services/apiCurrency';

export const LOGIN_EMAIL = 'LOGIN_EMAIL';
export const loginEmail = (email) => ({
  type: LOGIN_EMAIL,
  email,
});

export const WALLET_FETCH = 'WALLET_FETCH';
export const walletFetch = (payload) => ({
  type: WALLET_FETCH,
  payload,
});

export const getCurrency = (currency) => async (dispatch) => {
  await apiCurrency(currency).then((response) => dispatch(walletFetch(response)));
};
