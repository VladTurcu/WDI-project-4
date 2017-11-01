import React from 'react';
import Axios from 'axios';
import LessonShow from './lessons/LessonShow';
import TestsShow from './tests/TestsShow';
import CourseEnd from './CourseEnd';
import ProfileCard from '../auth/ProfileCard';


class CoursesShow extends React.Component{
  state = {
    course: {},
    currentLesson: null,
    currentTest: null,
    lessonIndex: 0,
    selectedAnswer: '',
    correctAnswers: 0,
    testIndex: 0,
    stage: 1,
    courseEnd: false,
    active: false,
    class: ''

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
    if(this.state.lessonIndex > this.state.course.lessons.length) return this.setState({ courseEnd: true });
    const currentLesson = this.state.course.lessons[this.state.lessonIndex];
    const prevLesson = this.state.course.lessons[this.state.lessonIndex - 1];
    const lessonIndex = this.state.lessonIndex + 1;
    if(!currentLesson ||  prevLesson && prevLesson.stage < currentLesson.stage) {
      console.log('lesson index >>>', lessonIndex);
      this.setState({ lessonIndex });
      return this.getNextTest();
    }
    console.log('setting lesson...');
    this.setState({ currentLesson, lessonIndex, currentTest: null, stage: currentLesson.stage });
  }

  getNextTest = () => {
    const currentTest = this.state.course.tests.find(test => test.stage === this.state.stage);
    this.setState({ currentTest, currentLesson: null });
  }

  handleSelectAnswer = (answer) => {
    this.setState({ selectedAnswer: answer });
  }
  // 
  // handleClass = (i) => {
  //   this.setState({ class: i });
  //   console.log('this is the class >>', this.state.class);
  // }

  testSubmit = () => {
    this.getNextLesson();
    const correctAnswers = this.state.correctAnswers + 1;
    if(this.state.selectedAnswer === this.state.currentTest.answer) this.setState({ correctAnswers, testIndex: this.state.testIndex + 1});
    const stage = this.state.stage + 1;
    this.setState({stage});
    // const correctAnswers = this.state.selectedAnswer === this.state.currentTest.answer ? correctAnswers + 1 : correctAnswers;
  }


  render(){

    return(
      <div className="row">
        <div className="col-md-9">
          {/* <h1>{this.state.course.title}</h1>
          <h2>{this.state.course.description}</h2> */}

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
                handleClass={this.handleClass}
                state={this.state}
              />
              </div>}
          {this.state.courseEnd && <CourseEnd state={this.state} />}
        </div>
        <div className="col-md-3">
          <ProfileCard />
        </div>
      </div>
    );
  }
}

export default CoursesShow;
