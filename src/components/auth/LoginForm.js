import React from 'react';
import OAuthButton from './OAuthButton';

const LoginForm = ({ handleChange, handleSubmit, credentials, error }) => {
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={credentials.email}
            className="form-control"
          />
        </div>
        <div className="form-group danger">
          {error && <small className="alert"><h6>{error}</h6></small>}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={credentials.password}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <OAuthButton provider="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></OAuthButton>
          <button className="is-primary btn">Login</button>
        </div>
      </form>
    </div>


  );
};

export default LoginForm;
