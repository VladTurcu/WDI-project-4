import React from 'react';
import Auth from '../../lib/Auth';
import  AddAchievement from './achievements/AddAchievements';

const CoursesShow = ({state}) => {
  return(
    <div>

      {state.correctAnswers < 2 && <h1>Try Again {Auth.currentUser.username}!</h1>}
      {state.correctAnswers > 2 && <h1>Well Done {Auth.currentUser.username}!</h1>}

      <h3>You passed this course with {state.correctAnswers}/{state.course.tests.length} correct answers!</h3>
      <AddAchievement score={state} />
    </div>
  );
};

export default CoursesShow;
