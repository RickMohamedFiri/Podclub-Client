import "../css/home.css";
import Logo from "../podclub-images/Logo(2).png";
import mic from "../podclub-images/mic.png";
import HomeIcon from "../podclub-images/HomeIcon.png";
import ChannelsIcon from "../podclub-images/ChannelsIcon.png";
import SettingsIcon from "../podclub-images/SettingsIcon.png";
import ProfileIcon from "../podclub-images/ProfileIcon.png";


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