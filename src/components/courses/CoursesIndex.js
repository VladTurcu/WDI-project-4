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
      
      <div className="row">
        {this.state.courses.map((course, i) =>


          <div key={i} className="card index-card col-md-4">
            <Link to={`/courses/${course.id}`}><img className="card-img-top" src={course.imageSRC} alt="Card image cap" /></Link>
            <div className="card-body">
              <h4 className="card-title">{course.title}</h4>
              <p className="card-text">{course.description}</p>
            </div>
            <Link className="btn btn-success" to={`/courses/${course.id}`}>Take this course </Link>
          </div>

        )}
      </div>
    );
  }
}

export default CoursesIndex;
