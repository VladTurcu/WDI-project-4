import React from 'react';
import DragDrop from '../utility/DragDrop';

const UserForm = ({ handleChange, handleSubmit, user, errors }) => {


  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={user.username}
          className="form-control"
        />
        {errors.username && <small className="has-error">{errors.username}</small>}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"
        />
        {errors.email && <small className="has-error">{errors.email}</small>}
      </div>

      <div className="form-group">
        <DragDrop
          onChange={handleChange}
          value={user.base64 || user.imageSRC} />
      </div>

      <button className="btn btn-block btn-primary">Update</button>
    </form>
  );
};

export default UserForm;
