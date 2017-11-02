import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';



class CoursesShow extends React.Component{
  state = {
    user: {}
  }
  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => this.setState({ user: res.data }, console.log(res.data)))
      .catch(err => {
        if(err.response.status === 404) return this.props.history.replace('/404');
        console.log(err);
      });
  }


  render(){
    return(
      <div>

        {Auth.isAuthenticated() &&
          <div>
            <h1>{this.state.user.username}</h1>
            <img src={this.state.user.imageSRC} />
          </div>
        }
        {this.state.user.admin && <h1>You are admin of thi website</h1>}
        {!this.state.user.admin && <h1>You are not admin of this website</h1>}

      </div>
    );
  }
}

export default CoursesShow;
