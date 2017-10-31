import React from 'react';

function CourseForm({ handleSubmit, handleCourseChange, handleLessonChange, handleOptionChange, course, lessons, addLesson, handleTestChange, tests, addTest, addOption, state}) {


  return (
    <div className="row">
      <form onSubmit={handleSubmit} className="col-md-6">

        <div className={'form-group'}>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Title"
            value={course.title}
            onChange={handleCourseChange}
          />
        </div>
        <div className={'form-group'}>

          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            placeholder="Image"
            value={course.image}
            onChange={handleCourseChange}
          />
        </div>

        <label>Lesson</label>
        <div className="lesson-new">
          <div className={'form-group'}>
            <input
              id="title"
              type="text"
              className="form-control"
              name="title"
              rows="8"
              placeholder="Lesson title"
              value={lessons.title}
              onChange={handleLessonChange}
            />
          </div>

          <div className={'form-group'}>
            <textarea
              id="lesson"
              type="text"
              className="form-control"
              name="content"
              rows="8"
              value={lessons.content}
              onChange={handleLessonChange}
            ></textarea>
          </div>

          <label htmlFor="stage">Stage</label>
          <select
            className="form-control"
            id="stage"
            name="stage"
            value={lessons.stage}
            onChange={handleLessonChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>

          <div className="form-group">
            <a className="btn btn-success" onClick={addLesson}>Add Lesson</a>
          </div>
        </div>

        <label htmlFor="category">Test</label>
        <div className="lesson-new">
          <div className={'form-group'}>
            <input
              id="question"
              type="text"
              className="form-control"
              name="question"
              rows="8"
              placeholder="Test"
              value={tests.question}
              onChange={handleTestChange}
            />
          </div>
          <div className={'form-group'}>
            <input
              id="answer"
              type="text"
              className="form-control"
              name="answer"
              placeholder="Correct answer"
              value={tests.answer}
              onChange={handleTestChange}
            />
          </div>
          <div className={'form-group'}>
            {tests.options && tests.options.map((option, i) =>
              <div key={i}>{option}</div>
            )}
            <input
              id="option"
              type="text"
              className="form-control"
              name="item"
              placeholder="Options"
              value={state.option.item}
              onChange={handleOptionChange}
            />
            <a className="btn btn-success" onClick={addOption}>+</a>
          </div>

          <label htmlFor="stage">Stage</label>
          <select
            className="form-control"
            id="stage"
            name="stage"
            value={tests.stage}
            onChange={handleTestChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </select>

          <div className="form-group">
            <a className="btn btn-success" onClick={addTest}>Add Question</a>
          </div>
        </div>














        <div className="form-group">
          <button  className="btn btn-primary">Save</button>
        </div>
      </form>

      <div className="page-banner col-md-6">
        <h2>{course.title}</h2>
        <img className="preview-img" src={course.image} />
        {course.lessons.map((item, i) =>
          <div key={i}>
            <h2>{item.title}</h2>
            <h4>Stage: {item.stage}</h4>
            <h4>{item.content}</h4>
          </div>
        )}

        {course.tests.map((item, i) =>
          <div key={i}>
            <h3>{item.question}?</h3>
            <h4>Stage: {item.stage}</h4>
            <h4>Correct answer: {item.answer}</h4>
          </div>
        )}

        {state.tests.options && state.tests.options.map((item, i) =>
          <div key={i}>Options: {item}</div>
        )}

      </div>
    </div>

  );
}

export default CourseForm;
