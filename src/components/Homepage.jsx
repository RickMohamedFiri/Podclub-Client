import '../css/homepage.css'
import Channels from "./Chanels.jsx";
import MessageSection from "./MessageSection.jsx";

const Homepage = () => {
    return ( 
    <>
    <div className="homepage">
        <Channels/>
        <MessageSection/>
    </div>

    </> );
}
 
export default Homepage;