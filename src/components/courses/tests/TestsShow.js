import React from 'react';


const TestsShow = ({ test, handleSelectAnswer, testSubmit}) => {

  return(
    <div>

      <div className="card text-center">
        <div className="card-header">
          <h2 className="card-title">{ test.question }</h2>

        </div>
        <div className="card-block lesson-content" >
          <ul className="list-group list-group-flush">
            {test.options.map((answer, i) =>
              <div key={i}>
                <li className="list-group-item ">
                  <label className="btn-primary btn-answer">{answer}
                    <input className="test-label" id={i}  type="radio" name="answer" value={answer} onChange={() => handleSelectAnswer(answer, i)} />
                  </label>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="card-footer text-muted">
          <p><button type="button" className="btn btn-success btn-lg btn-block" onClick={testSubmit}>Submit Answer</button></p>
        </div>
      </div>
    </div>
  );
};

export default TestsShow;
