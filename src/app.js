import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoursesIndex from './components/courses/CoursesIndex';
import CoursesShow from './components/courses/CoursesShow';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={CoursesIndex} />
            <Route exact path="/courses/:id" component={CoursesShow} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
