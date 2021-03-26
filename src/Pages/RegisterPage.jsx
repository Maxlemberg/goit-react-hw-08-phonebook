import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/auth.operations';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handlSubmit = evt => {
    evt.preventDefault();
    this.props.onRegister(this.state);
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <div>
        <h1>Сторінка реєстрації</h1>
        <form onSubmit={this.handlSubmit} autoComplete="off">
          <label htmlFor="">
            Імя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
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
          <button type="submit">Зареєструватися</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispathToProps = dispath => ({
  onRegister: data => dispath(register(data)),
});

//  const mapDispathToProps = {
//   onSubmit: register,
// };

export default connect(null, mapDispathToProps)(RegisterPage);
