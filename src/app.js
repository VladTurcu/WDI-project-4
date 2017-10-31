import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoursesIndex from './components/courses/CoursesIndex';
import CoursesShow from './components/courses/CoursesShow';
import CourseNew from './components/courses/CourseNew';
import Navbar from './components/utility/Navbar';
import Auth from './lib/Auth';
import Axios from 'axios';

import Login from './components/auth/Login';

import Register from './components/auth/Register';
import 'bootstrap-only-css';
import './scss/style.scss';

class App extends React.Component {
  componentDidMount() {
    if(!Auth.getToken()) return false;
    Axios.get('/api/users/:id', {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
    })
      .then(res =>  Auth.setCurrentUser(res.data))
      .catch(err => console.log(err));
  }
  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <main className="container">
            <Switch>
              <Route exact path="/" component={CoursesIndex} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/courses/new" component={CourseNew} />
              <Route exact path="/courses/:id" component={CoursesShow} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
