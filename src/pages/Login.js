import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginEmail } from '../actions';
import logo from '../assets/logo.png';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.validateFields = this.validateFields.bind(this);

    this.state = {
      email: '',
      password: '',
      logged: false,
    };
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  validateFields() {
    const { email, password } = this.state;

    const MIN_PASSWORD_CHARACTERS = 6;

    if (
      email.includes('@')
      && email.includes('.com')
      && password.length >= MIN_PASSWORD_CHARACTERS
    ) { return false; }

    return true;
  }

  render() {
    const { email, password, logged } = this.state;
    const { userEmail } = this.props;
    const { handleChange, validateFields } = this;

    return (
      <div
        className="d-flex flex-column align-items-center justify-content-center
        vh-100"
      >
        <img height="350" src={ logo } alt="logo" />
        {logged && <Redirect to="/carteira" />}
        <div>
          <input
            className="mb-3 form-control"
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ handleChange }
          />
          <input
            className="form-control"
            name="password"
            placeholder="Senha"
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ handleChange }
          />
        </div>
        <button
          className="btn btn-primary mt-4"
          type="submit"
          disabled={ validateFields() }
          onClick={ (event) => {
            event.preventDefault();
            userEmail(email);
            this.setState({
              logged: true,
            });
          } }
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
