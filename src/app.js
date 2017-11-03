import ProtectedRoute from './components/utility/ProtectedRoute';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoursesIndex from './components/courses/CoursesIndex';
import CoursesShow from './components/courses/CoursesShow';
import CoursesNew from './components/courses/CoursesNew';
import UserShow from './components/profile/UserShow';
import UserEdit from './components/profile/UserEdit';
import Navbar from './components/utility/Navbar';
import ReactDOM from 'react-dom';
import Auth from './lib/Auth';
import Axios from 'axios';
import React from 'react';



import Login from './components/auth/Login';

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
          <div className="jumbotron is-fluid">
            <center><h1 className="display-2 home">Connoisseur</h1></center>
          </div>

          <main className="container">
            <Switch>
              <Route exact path="/" component={CoursesIndex} />
              <ProtectedRoute exact path="/courses/new" component={CoursesNew} />
              <ProtectedRoute exact path="/courses/:id" component={CoursesShow} />
              <Route exact path="/profile/:id" component={UserShow} />
              <ProtectedRoute exact path="/profile/:id/edit" component={UserEdit} />
              <Route exact path="/" component={Login} />
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
