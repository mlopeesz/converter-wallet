import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="titleLogin">
          <h2>TrybeWallet</h2>
        </div>
        <input data-testid="email-input" type="email" id="email" />
        <input data-testid="password-input" type="password" id="password" />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
