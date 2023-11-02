import '../css/homepage.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import ProfileDetails from './ProfileDetails.jsx';
import EditProfile from './EditProfile.jsx';
import { useState } from 'react';

const Profile = ({open, setOpen}) => {

    const {change, setChange} = useState('True')

    return ( 
        <>
            <div className="profile-card">
                <div className="profile-title">
                        <h2>Profile</h2>
                        <AiFillCloseCircle onClick={()=>{setOpen(!open)}} className='close'/>
                </div>

                <div className="profile-body">
                    <div className="profile-bar">
                        
                        <ul className="profile-menu">
                            <li onClick={()=>{setChange(!change)}}>Profile Details</li>
                            <li  onClick={()=>{setChange(!change)}}>Edit Profile</li>
                        </ul>
                    </div>


                    
                {change?<EditProfile/>:<ProfileDetails/>}
                    

                </div>
            </div>
        </>
     );
}
 
export default Profile;