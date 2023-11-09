import React from 'react';
import '../css/homepage.css'
import { AiFillCloseCircle, AiFillEdit,  } from 'react-icons/ai';
import { FcSettings } from 'react-icons/fc'
import ProfileDetails from './ProfileDetails.jsx';
import EditProfile from './EditProfile.jsx';
import { useState } from 'react';

const Profile = ({ open, setOpen }) => {
  const [change, setChange] = useState('details'); 

  return (
    <>
      <div className="profile-card">
        <div className="profile-title">
          <h2>Profile</h2>
          <AiFillCloseCircle onClick={() => {setOpen(!open); setChange('details');}} className='close' />
        </div>

        <div className="profile-body">
          <div className="profile-bar">
            <ul className=" profile-menu ">
              <li onClick={() => setChange('details')}>
                    <FcSettings/>
                    <p>Profile Details</p>
              </li>
              <li onClick={() => setChange('edit')}>
                    <AiFillEdit/>
                    <p>Edit Profile</p>
              </li>
            </ul>
          </div>


          {change ==='details' ? <ProfileDetails /> : <EditProfile /> }
        </div>
      </div>
    </>
  );
}

export default Profile;
