import React from 'react';
import LoginForm from './LoginForm';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import {withRouter } from 'react-router-dom';
// import OAuthButton from './OAuthButton';

class Login extends React.Component {

  state = {
    credentials: {
      email: '',
      password: ''
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const credentials = Object.assign({}, this.state.credentials, { [name]: value });
    this.setState({ credentials });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios.post('/api/login', this.state.credentials)
      .then((res) => {
        Auth.setToken(res.data.token);
        Auth.setCurrentUser(res.data.user);
        this.props.history.push('/');
      })
      .catch(() => {
        Auth.logout();
        this.props.history.push('/');
      });
  }

  render() {
    return (
      <div>
        <LoginForm
          credentials={this.state.credentials}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default withRouter(Login);
