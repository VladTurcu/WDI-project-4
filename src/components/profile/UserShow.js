import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import AdminList from './AdminList';


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
            <div className="card text-center">
              <div className="card-header">
              </div>
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4">
                    <img src={this.state.user.imageSRC} className="rounded mx-auto d-block img-thumbnail" alt={this.state.user.username} />
                  </div>
                  <div className="col-sm-8">
                    <h3 className="card-title">{this.state.user.username}</h3>
                    <div className="card-text">
                      <hr />
                      {this.state.user.admin && <p>You are the administrator of this website</p>}
                      {!this.state.user.admin && <p>Nothing to see for now</p>}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        }

        {this.state.user.admin && <AdminList />}
      </div>
    );
  }
}

export default CoursesShow;
