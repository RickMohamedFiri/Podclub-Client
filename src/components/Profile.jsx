import '../css/homepage.css'
import { AiFillCloseCircle } from 'react-icons/ai'

const Profile = ({open, setOpen}) => {

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
                            <li>Profile Settings</li>
                            <li>Security</li>
                        </ul>
                    </div>
                    <div className="profile-area">
                        <form action="" className="profile-form">
                            <input type="text" />
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Profile;