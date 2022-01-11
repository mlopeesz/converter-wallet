import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.validateFields = this.validateFields.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  validateFields() {
    const { email, password } = this.state;
    const MIN_PASSWORD = 6;

    if (
      email.includes('@')
      && email.includes('.com')
      && password.length >= MIN_PASSWORD
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    const { userEmail } = this.props;
    const { handleChange, validateFields } = this;

    return (
      <div>
        <div className="titleLogin">
          <h2>TrybeWallet</h2>
        </div>
        <input
          data-testid="email-input"
          type="email"
          id="email"
          value={ email }
          onChange={ handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          id="password"
          value={ password }
          onChange={ handleChange }
        />
        <button
          type="button"
          disabled={ validateFields() }
          onClick={ () => userEmail(email) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(loginEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
