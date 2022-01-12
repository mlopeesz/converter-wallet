// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_USER, WALLET_FETCH } from '../actions';

const INITIAL_STATE = {
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_USER:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case WALLET_FETCH:
    return {
      ...state,
    };
  default:
    return state;
  }
};

export default walletReducer;
