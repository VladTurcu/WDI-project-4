import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Alert from './Alert';

const ProtectedRoute = ({ component: Component, ...other }) => {
  return (
    <Route {...other} render={props => (
      Auth.isAuthenticated() ? (
        <Component {...props}/>
      ) : (
        <div>

          <Redirect to="/"/>
          <Alert />
        </div>
      )
    )}/>
  );
};


export default withRouter(ProtectedRoute);
