import ProtectedRoute from './components/utility/ProtectedRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoursesIndex from './components/courses/CoursesIndex';
import CoursesShow from './components/courses/CoursesShow';
import CourseNew from './components/courses/CourseNew';
import UserShow from './components/profile/UserShow';
import Navbar from './components/utility/Navbar';
import ReactDOM from 'react-dom';
import Auth from './lib/Auth';
import Axios from 'axios';
import React from 'react';


// import Login from './components/auth/Login';

import Register from './components/auth/Register';
import 'bootstrap-css-only';
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
          <div className="jumbotron jumbotron-fluid">
            {!Auth.isAuthenticated() &&  <div className="col-md-4">
            </div>}
          </div>

          <main className="container">
            <Switch>
              <Route exact path="/" component={CoursesIndex} />
              <ProtectedRoute exact path="/courses/new" component={CourseNew} />
              <ProtectedRoute exact path="/courses/:id" component={CoursesShow} />
              <ProtectedRoute exact path="/profile/:id" component={UserShow} />
              {/* <Route exact path="/" component={Login} /> */}
              <Route exact path="/register" component={Register} />
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
