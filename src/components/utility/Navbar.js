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
          {Auth.isAuthenticated() && <Link to={`/profile/${Auth.getPayload().userId}`} className="nav-item"><i className="fa fa-user" aria-hidden="true"></i></Link>}
          {Auth.isAuthenticated() && <Link to={`/profile/${Auth.getPayload().userId}/edit`} className="nav-item"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>}
          {Auth.isAuthenticated() && <a href="#" className="nav-item " onClick={logout}><i className="fa fa-sign-out" aria-hidden="true"></i></a>}
          <div className="row sign">
            {!Auth.isAuthenticated() &&
              <div className="dropdown">
                <Link to="#" className="nav-item btn" data-toggle="dropdown"><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</Link>
                <div className="dropdown-menu">
                  <Login className="col-md-6" />
                </div>
              </div>}
            {!Auth.isAuthenticated() && <Link to="/register" className="nav-item btn">
              <i className="fa fa-user-plus" aria-hidden="true"></i> Register
            </Link>}


          </div>

        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
