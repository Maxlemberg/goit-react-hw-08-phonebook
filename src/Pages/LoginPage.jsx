import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../redux/auth/auth.operations';
import styles from './Inputs.module.css';

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
        <h1 className={styles.title}>Сторінка логіна</h1>
        <form
          className={styles.form}
          onSubmit={this.handlSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            {/* Eлектронна скринька📧 */}
            📯
            <input
              placeholder="Email"
              className={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            {/* Пароль */}
            🗝️
            <input
              placeholder="Password"
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.button}>
            Зайти
          </button>
        </form>
      </div>
    );
  }
}

const mapDispathToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispathToProps)(LoginPage);
