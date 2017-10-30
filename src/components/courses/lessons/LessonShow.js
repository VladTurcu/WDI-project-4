import React from 'react';


const LessonShow = ({ currentLesson, getNextLesson }) => {
  return(
    <div>
      <b>{ currentLesson.title } - stage: {currentLesson.stage}</b>
      { currentLesson.content }
      <p><button type="button" className="btn btn-success btn-lg btn-block" onClick={getNextLesson}>Next lesson</button></p>
    </div>
  );
};

export default LessonShow;
