import { useState } from 'react';
import '../css/channels.css'
import { useEffect } from 'react';
import axios from 'axios';

const SideBar = ({open, setOpen, openChannel, setOpenChannel}) => {

    const username = localStorage.getItem("username");
    const about = localStorage.getItem("about");

    const [ channels, setChannels] = useState([]);


    useEffect(()=>{
        GetAllChannels()
    }
    ,[])



    const GetAllChannels = () => {
        axios({
            method: "GET",
            url: "https://podclub-api-z229.onrender.com/channels"
        })
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
                setChannels(response.data);
            }
        })
        .catch(function (error) {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else {
                console.log("Network error or server is down");
            }
        });

        
    };


    const toggleForm=()=>{
        setOpenChannel(!openChannel);
        console.log(openChannel);
    }

    

    return ( 
        <div className='menu'>
            <div className="user">
                
                <div onClick={()=>{setOpen(!open)}} className="details">
                    <p className="username">{username}</p>
                    <p className="about">{about}</p>
                </div>
            </div>
            
                        
            <button onClick={toggleForm} type="button" class="button">
            <span class="button__text">Add a new channel</span>
            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
            </button>

            <ul className="channels">  
                {
                    channels.map((channel) => (
                        <li className="channel" key={channel.id}>
                            <p>{channel.name}</p>
                        </li>
                    ))
                }
                
            </ul>

           

        </div>  
     );
}
 
export default SideBar;