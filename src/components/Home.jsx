import "../css/home.css";
import Logo from "./Logo(2).png";
import mic from "./mic.png";
import HomeIcon from "../css/HomeIcon.png";
import ChannelsIcon from "../css/ChannelsIcon.png";
import SettingsIcon from "../css/SettingsIcon.png";
import ProfileIcon from "../css/ProfileIcon.png";


function Home(){
    return (
        <>
        <div className="Main">
            <div className="Nav">
                <div>
                    <img src={Logo} alt="Company Logo"/>
                </div>
                <div className="Icons">
                        <img src={HomeIcon} alt="Home" />
                        <img src={ChannelsIcon} alt="Channels" />
                        <img src={ProfileIcon} alt="Profile" />
                        <img src={SettingsIcon} alt="Settings" />
                    </div>
            </div>
            <div className="Content">
            <div className="Slogan">
                    <span id="S1">Tune In,</span>
                    <span id="S2">Tune Up, & </span>
                    <span id="S3">Get Inspired</span>
                   
                </div>
                <div className="mic">
                    <img src={mic} alt="A mic logo"/>
                </div>
            </div>
        </div>
        </>
    )
}


export default Home;