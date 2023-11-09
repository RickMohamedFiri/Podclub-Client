import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/messagesSection.css';
import Textbar from './Textbar.jsx';
import Chats from './Chats';
import { Context } from "../App";

const MessageSection = () => {
    const navigate = useNavigate();
    const [token, removeToken, setToken] = useContext(Context);


    const LogMeOut = () => {
        axios({
            method: "POST",
            url: "https://podclub-api-z229.onrender.com/logout",
        })
        .then((response) => {
            removeToken(); 
            localStorage.removeItem('email');
            alert("Logout Successful");
            navigate("/");
        })
        .catch(err => {
            if (err.response) {
                console.log(err.response);
                console.log(err.response.status);
                console.log(err.response.headers);
            }
        });
    }

    return (
        <>
            <div className="messages-section">
                <div className="top-bar">
                    <p className="channel-name">Channel Name</p>
                    <div className="more">
                        <p> <span>13</span> Participants</p>
                        <p>|</p>
                        <p>Invite</p>
                        <button onClick={LogMeOut} className="logout-btn">
                            <span>Log Out</span>
                        </button>
                    </div>
                </div>

                <Chats />

                <Textbar />
            </div>
        </>
    );
}

export default MessageSection;
