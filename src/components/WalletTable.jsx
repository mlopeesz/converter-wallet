import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WalletTable extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
          </tr>
        </thead>
        <tbody className="tbody table-light">
          {expenses.map(({
            id,
            value,
            tag,
            method,
            description,
            currency,
            exchangeRates,
          }) => (
            <tr key={ id } className="tr">
              <td className="td">{description}</td>
              <td className="td">{tag}</td>
              <td className="td">{method}</td>
              <td className="td">{value}</td>
              <td className="td">{currency}</td>
              <td className="td">{exchangeRates[currency].name.split('/')[0]}</td>
              <td className="td">
                {
                  (Number(exchangeRates[currency].ask)
                     * Number(value)).toFixed(2)
                }
              </td>
              <td className="td">{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td className="td">Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

WalletTable.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(WalletTable);
