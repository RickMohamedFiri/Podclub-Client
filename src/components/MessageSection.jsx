import '../css/messagesSection.css';
import Textbar from './Textbar.jsx';
import Chats from './Chats';


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


            <Chats/>


            <Textbar/>


       </div>
    </> );
}
 
export default MessageSection;