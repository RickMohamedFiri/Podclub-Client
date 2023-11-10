import { useState } from "react";
import '../css/homepage.css'
import SideBar from "./SideBar.jsx";
import MessageSection from "./MessageSection.jsx";
import Profile from './Profile.jsx';
import AddChannel from "./AddChannel.jsx";

const Homepage = () => {

    const [open, setOpen] = useState(false)

    const [openChannel, setOpenChannel]= useState(false);

    return ( 
    <>
        <div className="homepage">
            <SideBar openChannel={openChannel} setOpenChannel={setOpenChannel}  open={open} setOpen={setOpen}/>
            <MessageSection/>
            <div className={`${open ? 'profile-comp': 'profile-hidden'}`}>
                <Profile open={open} setOpen={setOpen}/>
            </div>
            <div className={`${openChannel ? 'reveal-form': 'hide-form'}`}>
              <AddChannel openChannel={openChannel} setOpenChannel={setOpenChannel}/>
            </div>
        </div>

    </> );
}
 
export default Homepage;