import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/auth.operations';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handlSubmit = evt => {
    evt.preventDefault();
    this.props.onLogin(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Сторінка логіна</h1>
        <form onSubmit={this.handlSubmit} autoComplete="off">
          <label htmlFor="">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Зайти</button>
        </form>
      </div>
    );
  }
}

const mapDispathToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispathToProps)(LoginPage);
