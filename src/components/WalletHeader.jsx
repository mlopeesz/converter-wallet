import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletHeader extends Component {
  render() {
    const { userEmail } = this.props;

    return (
      <header>
        <h4 data-testid="email-field">{ userEmail }</h4>
        <h4>
          Despesas totais:
          <span data-testid="total-field">0</span>
        </h4>
        <h4>
          Câmbio:
          <span data-testid="header-currency-field">BRL</span>
        </h4>
      </header>
    );
  }
}

WalletHeader.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

export default connect(mapStateToProps, null)(WalletHeader);
