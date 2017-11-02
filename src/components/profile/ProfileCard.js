import React from 'react';
import { Link} from 'react-router-dom';


const ProfileCard = ({course}) => {

  return (
    <div className="profile-card">
      <div className="card" >
        <center><img className="profile-card-img" src={course.createdBy.image} /></center>
        <center><h6>Created by: </h6></center>
        <center><h4 className="card-title">{course.createdBy.username}</h4></center>
      </div>
    </div>
  );
};

export default ProfileCard;
