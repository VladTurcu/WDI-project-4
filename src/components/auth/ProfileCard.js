import React from 'react';
import Auth from '../../lib/Auth';

const ProfileCard = () => {
  return (
    <div>
      {Auth.currentUser && <div className="card" >
        <img className="card-img-top" src={Auth.currentUser.coverImage} alt="Card image cap" />
        <div className="card-block">
          <center><img className="profile-card-img" src={Auth.currentUser.image} /></center>
          <center><h4 className="card-title">{Auth.currentUser.username}</h4></center>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Level: </li>
          <li className="list-group-item">Tests passed:</li>

        </ul>
      </div>}
    </div>
  );
};

export default ProfileCard;
