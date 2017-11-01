import React from 'react';
import OAuthButton from './OAuthButton';

const LoginForm = ({ handleChange, handleSubmit, credentials }) => {
  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="form-group col-md-4">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={credentials.email}
          className="form-control"
        />
      </div>
      <div className="form-group col-md-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={credentials.password}
          className="form-control"
        />
      </div>
      <div className="form-group col-md-4">
        <button className="nav-item btn-link"><i className="fa fa-sign-in" aria-hidden="true"></i></button>
        <OAuthButton provider="facebook"><i className="fa fa-facebook" aria-hidden="true"></i></OAuthButton>
      </div>
    </form>
  );
};

export default LoginForm;
