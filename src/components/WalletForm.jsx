import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <form>
        <input data-testid="value-input" />
        <input data-testid="description-input" />
        <input data-testid="currency-input" />
        <label htmlFor="method-input">
          Método de Pagamento:
          <select id="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão de crédito">Cartão de Crédito</option>
            <option value="cartão de débito">Cartão de Débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tag:
          <select data-testid="tag-input" id="tag-input">
            <option value="alimentação">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saúde">Saúde</option>
          </select>
        </label>
        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

export default WalletForm;
