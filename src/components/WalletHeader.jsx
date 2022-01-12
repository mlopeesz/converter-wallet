import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHeader extends Component {
  constructor() {
    super();
    this.state = {
      currency: 'BRL',
    };
  }

  refreshTotal() {
    const { expenses } = this.props;
    const walletTotal = expenses.reduce((acc, { exchangeRates, currency, value }) => (
      acc + (Number(exchangeRates[currency].ask) * Number(value))
    ), 0);
    return walletTotal;
  }

  render() {
    const { userEmail } = this.props;
    const { currency } = this.state;

    return (
      <header>
        <h4 data-testid="email-field">{ userEmail }</h4>
        <h4>
          Despesas totais:
          <span data-testid="total-field">{ this.handleTotal }</span>
        </h4>
        <h4>
          Câmbio:
          <span data-testid="header-currency-field">{ currency }</span>
        </h4>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(WalletHeader);
