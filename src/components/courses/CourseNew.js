import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import CourseForm from './CourseForm';

class CourseNew extends React.Component {

  state = {
    course: {
      title: '',
      image: '',
      description: '',
      lessons: [],
      tests: [],
      base64: ''
    },
    lessons: {
      stage: 1,
      title: '',
      content: ''
    },
    tests: {
      question: '',
      answer: '',
      options: [],
      stage: 1
    },
    options: [],
    option: {
      item: ''
    },
    errors: {}

  };

  componentWillMount() {
    console.log('Component will mount');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  handleCourseChange = ({ target: { name, value } }) => {
    const course = Object.assign({}, this.state.course, { [name]: value });
    this.setState({ course });
  }

  handleLessonChange = ({ target: { name, value } }) => {
    const lessons = Object.assign({}, this.state.lessons, { [name]: value });
    this.setState({ lessons });
  }
  handleTestChange = ({ target: { name, value } }) => {
    const tests = Object.assign({}, this.state.tests, { [name]: value });
    this.setState({ tests });
  }
  handleOptionChange = ({ target: { name, value } }) => {
    const option = Object.assign({}, this.state.option, { [name]: value });
    this.setState({ option });
  }


  handleChange = ({ target: { name, value } }) => {
    this.setState(prevState => {
      const course = Object.assign({}, prevState.course, { [name]: value });
      return { course };
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/courses', this.state.course, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

addLesson = () => {
  this.setState(prevState => {
    const lessons = prevState.course.lessons.concat(this.state.lessons);
    const course = { ...prevState.course, lessons };
    return { course, lessons: { content: '', title: '', stage: 1 } };
  });
}

addTest = () => {
  this.setState(prevState => {
    const tests = prevState.course.tests.concat(this.state.tests);
    const course = { ...prevState.course, tests };
    return { course, tests: { question: '', answer: '', options: [], stage: 1 } };
  });
}
addOption = () => {
  this.setState(prevState => {
    const options = prevState.tests.options.concat(this.state.option.item);
    const tests = { ...prevState.tests, options };
    return { tests, option: { item: ''} };
  });
}


render() {
  console.log('options >>', this.state.tests);
  console.log('option >>', this.state.option.item);
  return (
    <CourseForm
      state={this.state}
      history={this.props.history}
      handleSubmit={this.handleSubmit}
      handleCourseChange={this.handleCourseChange}
      handleLessonChange={this.handleLessonChange}
      course={this.state.course}
      errors={this.state.errors}
      lessons={this.state.lessons}
      addLesson={this.addLesson}
      tests={this.state.tests}
      addTest={this.addTest}
      handleTestChange={this.handleTestChange}
      handleOptionChange={this.handleOptionChange}
      addOption={this.addOption}
      handleChange={this.handleChange}
    />
  );
}
}

export default CourseNew;
