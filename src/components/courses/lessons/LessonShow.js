import React from 'react';


const LessonShow = ({ currentLesson, getNextLesson }) => {
  return(
    <div>
      <div className="card text-center">
        <div className="card-header">
          <h2 className="card-title">{ currentLesson.title }</h2>
          <h4 className="card-title">stage: {currentLesson.stage}</h4>
        </div>
        <div className="card-block lesson-content">
          <p className="card-text">{ currentLesson.content }</p>
        </div>
        <div className="card-footer text-muted">
          <button type="button" className="btn btn-success btn-lg btn-block" onClick={getNextLesson}>Next lesson</button>
        </div>
      </div>
    </div>
  );
};

export default LessonShow;
