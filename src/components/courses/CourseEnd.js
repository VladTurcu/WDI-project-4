import React from 'react';
import Auth from '../../lib/Auth';
import  AddAchievement from './achievements/AddAchievements';

const CoursesShow = ({state}) => {
  console.log('current user', Auth.currentUser);
  return(
    <div>
      <h1>Well done {Auth.currentUser.username}!</h1>
      <h3>You passed this course with {state.correctAnswers}/{state.course.tests.length} correct answers!</h3>
      <AddAchievement score={state} />
    </div>
  );
};

export default CoursesShow;
