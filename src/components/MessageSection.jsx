import '../css/messagesSection.css';
import Textbar from './Textbar.jsx';

const MessageSection = () => {
    return ( 
    <>
       <div className="messages-section">

            <div className="top-bar">
                <p className="channel-name">Channel Name</p>
                <div className="more">
                    <p> <span>13</span> Participants</p>
                    <p>|</p>
                    <p>Invite</p>
                </div>
            </div>


            <div className="messages">
                
            </div>


            <Textbar/>


       </div>
    </> );
}
 
export default MessageSection;