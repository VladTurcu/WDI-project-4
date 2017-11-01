import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';


class CoursesShow extends React.Component{
  state = {
    user: {}
  }
  componentWillMount() {
    Axios
      .get(`/api/users/${Auth.currentUser.id}`)
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => console.log(err));
  }


  render(){
    return(
      <div>
        <h1>{this.state.user.username}</h1>
      </div>
    );
  }
}

export default CoursesShow;
