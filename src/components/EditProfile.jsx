import React from 'react';
import '../css/homepage.css';

const EditProfile = () => {
    return ( 
        <>
             <div className="edit-profile">
                        <h1>Edit Profile</h1>
                            <form className="profile-form">
                                <input className='profile-input' placeholder='Username' type="text" />
                                <input className='profile-input' placeholder='Email' type="text" />
                                <input className='profile-input' placeholder='About' type="text" />
                                <input className='profile-input' placeholder='Old Password' type="password" />
                                <input className='profile-input' placeholder='New Password' type="password" />
                                <input value='Submit' type="submit" className='profile-submit' />
                            </form>
             </div>
        </>
     );
}
 
export default EditProfile;