import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Auth from '../../lib/Auth';


const Navbar = ({ history }) => {
  console.log(history);
  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">HOME</Link>
        </div>
        <div className="navbar-right">
          {!Auth.isAuthenticated() && <Link to="/login" className="navbar-brand">Login</Link>}
          {!Auth.isAuthenticated() && <Link to="/register" className="navbar-brand">Register</Link>}
          {Auth.isAuthenticated() && <a href="#" className="navbar-brand navbar-right" onClick={logout}>Logout</a>}
        </div>

      </div>
    </nav>
  );
};

export default withRouter(Navbar);
