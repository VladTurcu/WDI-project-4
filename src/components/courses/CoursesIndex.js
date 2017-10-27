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
      <main>
        <h1>Courses</h1>
        {this.state.courses.map((course, i) =>
          <div key={i}>
            <h1><Link to={`/courses/${course.id}`}>{course.title}</Link> </h1>
          </div>
        )}
      </main>
    );
  }
}

export default CoursesIndex;
