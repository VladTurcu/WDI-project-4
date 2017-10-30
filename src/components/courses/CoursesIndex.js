import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class CoursesIndex extends React.Component {
  state = {
    courses: []
  }

  componentWillMount() {
    Axios
      .get('/api/courses')
      .then(res => this.setState({ courses: res.data }))
      .catch(err => err);
  }

  render() {
    return (
      <div>
        <div className="row row-main">
          <div className="col col-main col-md-6">
            {this.state.courses.map((course, i) =>
              <div key={i}>
                <Link to={`/courses/${course.id}`}>
                  <div className="card card-custom bg-white border-white border-0">
                    <img className="img-card" src={course.image} />
                    <div className="card-custom-avatar">
                      <img className="img-fluid" src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg" alt="Avatar" />
                    </div>
                    <div className="card-body" >
                      <p className="card-title">{course.title}</p>
                      <h4 className="card-text">{course.description}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="col col-main col-md-6">
            {this.state.courses.map((course, i) =>
              <div key={i}>
                <Link to={`/courses/${course.id}`}>
                  <div className="card card-main card-custom bg-white border-white border-0">
                    <img className="img-card" src={course.image} />
                    <div className="card-custom-avatar">
                      <img className="img-fluid" src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg" alt="Avatar" />
                    </div>
                    <div className="card-body" >
                      <p className="card-title">{course.title}</p>
                      <h4 className="card-text">{course.description}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="w-100"></div>
          <div className="col col-main col-md-6">
            {this.state.courses.map((course, i) =>
              <div key={i}>
                <Link to={`/courses/${course.id}`}>
                  <div className="card card-main card-custom bg-white border-white border-0">
                    <img className="img-card" src={course.image} />
                    <div className="card-custom-avatar">
                      <img className="img-fluid" src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg" alt="Avatar" />
                    </div>
                    <div className="card-body" >
                      <p className="card-title">{course.title}</p>
                      <h4 className="card-text">{course.description}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="col col-main col-md-6">
            {this.state.courses.map((course, i) =>
              <div key={i}>
                <Link to={`/courses/${course.id}`}>
                  <div className="card card-main card-custom bg-white border-white border-0">
                    <img className="img-card" src={course.image} />
                    <div className="card-custom-avatar">
                      <img className="img-fluid" src="http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg" alt="Avatar" />
                    </div>
                    <div className="card-body" >
                      <p className="card-title">{course.title}</p>
                      <h4 className="card-text">{course.description}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default CoursesIndex;
