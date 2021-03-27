import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/auth.operations';
import styles from './Inputs.module.css';

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
        <h1 className={styles.title}>Сторінка реєстрації</h1>
        <form
          className={styles.form}
          onSubmit={this.handlSubmit}
          autoComplete="off"
        >
          <label className={styles.label}>
            Імя
            <input
              placeholder="Name"
              className={styles.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Email
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
            Пароль
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
            Зареєструватися
          </button>
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
