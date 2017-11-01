import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Login from '../auth/Login';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();
    Auth.logout();
    history.push('/');
  }

  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
        </div>
        <div className="navbar-right">
          {Auth.isAuthenticated() && <Link to="/courses/new" className="nav-item"><i className="fa fa-plus" aria-hidden="true"></i></Link>}
          {/* {Auth.isAuthenticated() && <Link to={Auth.currentUser.id} className="nav-item"><i className="fa fa-user" aria-hidden="true"></i></Link>} */}
          {Auth.isAuthenticated() && <a href="#" className="nav-item navbar-right" onClick={logout}><i className="fa fa-sign-out" aria-hidden="true"></i></a>}
          {!Auth.isAuthenticated() && <Login />}
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
