import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import UserForm from './UserForm';

class UserEdit extends React.Component {
  state = {
    user: {
      username: '',
      email: '',
      base64: '',
      coverImage: ''
    },
    errors: {}
  };

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(prevState => {
      prevState.user[name] = value;
      return prevState;
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .put(`/api/users/${this.props.match.params.id}`, this.state.user,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.props.history.push(`/profile/${res.data.id}`))
      .catch(err => console.log(err));
  }

  getDataURL = (dataURL) => {
    this.setState(prevState => {
      const user = Object.assign({}, prevState.user, { base64: dataURL });
      return { user };
    });
  }

  render() {
    return (
      <UserForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        getDataURL={this.getDataURL}
        user={this.state.user}
        errors={this.state.errors}
      />
    );
  }
}

export default UserEdit;
