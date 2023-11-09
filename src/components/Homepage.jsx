import { useState } from "react";
import '../css/homepage.css'
import SideBar from "./SideBar.jsx";
import MessageSection from "./MessageSection.jsx";
import Profile from './Profile.jsx';

const Homepage = () => {

    const [open, setOpen] = useState(false)

    return ( 
    <>
        <div className="homepage">
            <SideBar open={open} setOpen={setOpen}/>
            <MessageSection/>
            <div className={`${open ? 'profile-comp': 'profile-hidden'}`}>
                <Profile open={open} setOpen={setOpen}/>
            </div>
        </div>

    </> );
}
 
export default Homepage;