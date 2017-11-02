import React from 'react';

class Alert extends React.Component {
  render() {
    return(
      <div className="alert alert-danger" role="alert">
        <button className='close' data-dismiss='alert'> &times; </button>
        <strong>You have to login to access this page!</strong>
      </div>
    );
  }
}

export default Alert;
