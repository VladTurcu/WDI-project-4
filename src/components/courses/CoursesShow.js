import React from 'react';
import Axios from 'axios';
import LessonShow from './lessons/LessonShow';
import TestsShow from './tests/TestsShow';
import CourseEnd from './CourseEnd';
import Auth from '../../lib/Auth';


class CoursesShow extends React.Component{
  state = {
    course: {},
    currentLesson: null,
    currentTest: null,
    lessonIndex: 0,
    selectedAnswer: '',
    stage: 1,
    courseEnd: false
  }
  componentWillMount() {
    Axios
      .get(`/api/courses/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ course: res.data }, () => this.getNextLesson());
      })
      .catch(err => console.log(err));
  }


  getNextLesson = () => {
    if(this.state.currentLesson && this.state.currentLesson.isEndOfStage) return this.getNextTest();
    const currentLesson = this.state.course.lessons[this.state.lessonIndex];
    const lessonIndex = this.state.lessonIndex + 1;
    this.setState({ currentLesson, lessonIndex, currentTest: null, stage: currentLesson.stage });
  }

  getNextTest = () => {
    const currentTest = this.state.course.tests.find(test => test.stage === this.state.stage);
    this.setState({ currentTest, currentLesson: null });
  }

  nextLesson = () => {
    if(this.state.selectedAnswer === this.state.currentTest.answer){
      return this.getNextLesson();
    } else {
      alert('Wrong answer');
    }
  }

  handleSelectAnswer = (answer) => {
    this.setState({ selectedAnswer: answer });
  }

  testSubmit = () => {
    // check user's answer.. allocated score
    if(this.state.lessonIndex === this.state.course.lessons.length){
      this.setState({ courseEnd: true});
    } else {
      this.nextLesson();
      console.log('Next Lesson');
    }
  }

  render(){
    console.log('User app here vlad you are right >>', Auth.getCurrentUser());
    return(
      <div>
        <h1>{this.state.course.title}</h1>
        <h2>{this.state.course.description}</h2>

        {this.state.currentLesson &&
        <div>
          <LessonShow
            currentLesson={this.state.currentLesson}
            getNextLesson={this.getNextLesson}
          />
        </div>}

        {this.state.currentTest && !this.state.courseEnd &&
          <div><TestsShow
            test={this.state.currentTest}
            handleSelectAnswer={this.handleSelectAnswer}
            testSubmit={this.testSubmit}
          />
          </div>}

        {this.state.courseEnd && <CourseEnd />}
      </div>
    );
  }
}

export default CoursesShow;
