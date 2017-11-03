import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class AdminList extends React.Component {
  state = {
    courses: [{
      published: null
    }],
    users: []
  }

  componentWillMount() {
    Axios
      .get('/api/courses')
      .then(res =>
        this.setState({ courses: res.data }))
      .catch(err => err);

    Axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(err => err);
  }

handleSubmit = (e) => {
  e.preventDefault();
  Axios
    .put(`/api/courses/${e}`, this.state.courses, {
      headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
    })
    .then(() => console.log(e))
    .catch(err => this.setState({ errors: err.response.data.errors }));
}

  deleteCourse = (id) => {
    Axios
      .delete(`/api/courses/${id}`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => {
        this.setState(prevState => {
          const courses = prevState.courses.filter((course) => {
            return course.id !== id;
          });
          return { courses };
        });
      })
      .catch(err => console.log(err));
  }

  deleteUser = (id) => {
    Axios
      .delete(`/api/users/${id}`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => {
        this.setState(prevState => {
          const courses = prevState.courses.filter((course) => {
            return course.id !== id;
          });
          return { courses };
        });
      }) 
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="admin-list">
        <div className="row  admin-main-container">
          <div className="col-md-5">
            {this.state.courses.map((course, i) =>
              <div key={i}>
                <div className="media row">
                  <div className="col-sm-4">
                    <Link to={`/courses/${course.id}`}><img className="rounded float-left admin-element-img" src={course.imageSRC} alt={course.title} /></Link>
                  </div>
                  <div className="media-body col-lg-8">
                    <button type="button" className="close" onClick={() => this.deleteCourse(course.id)} aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <Link to={`/courses/${course.id}`}> <h3 className="mt-0">{course.title}</h3></Link>
                    <p>{course.description}</p>
                    {!course.published && <button onClick={() => this.handleSubmit(course.id)}><em>Pending admin approval</em></button>}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-md-5">
            {this.state.users.map((user, i) =>
              <div key={i}>
                {user && <div className="media row">
                  <div className="col-sm-4">
                    <Link to={`/profile/${user.id}`}><img className="rounded float-left admin-element-img" src={user.imageSRC} alt={user.username} /></Link>
                  </div>
                  <div className="media-body col-lg-8">
                    <button type="button" onClick={() => this.deleteUser(user.id)} className="close" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <Link to={`/profile/${user.id}`}> <h3 className="mt-0">{user.username}</h3></Link>
                    <h6 className="mt-0"><p><em>{user.email}</em></p></h6>
                  </div>
                </div>}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminList;
