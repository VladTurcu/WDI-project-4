import React from 'react';

const TestsShow = ({ test, handleSelectAnswer, testSubmit }) => {

  return(
    <div>
      <b>stage: {test.stage}</b><br />
      <b>Question</b>: { test.question }<br />
      <b>Answer</b>: { test.answer }<br /><br />
      {test.options.map((answer, i) =>
        <div key={i}>
          <label>{answer}</label>
          <input name="answer" type="radio"  onChange={() => handleSelectAnswer(answer)} />
        </div>
      )}
      <p><button type="button" className="btn btn-success btn-lg btn-block" onClick={testSubmit}>Submit Answer</button></p>
    </div>
  );
};

export default TestsShow;
