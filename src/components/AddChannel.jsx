import { useState } from "react";
import axios from "axios";

const AddChannel = ({openChannel, setOpenChannel}) => {

    const [channelForm, setChannelForm] = useState({
        name: "",
        description: ""
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setChannelForm((prevChannelForm) => ({
            ...prevChannelForm,
            [name]: value
        }));
    };

    const AddChannel=()=>{
        axios({
            method: "POST",
            url: "https://podclub-api-z229.onrender.com/channels",
            data: {
                name: channelForm.name,
                description: channelForm.description,
                user_id: localStorage.getItem("user_id")
            },
        })
        .then(function (response) {
            if (response.status === 200) {
                console.log(response);
                setOpenChannel(!openChannel);
                alert("New Channel Added Successfully");
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

        setOpenChannel(!openChannel);

    }

    return ( 
        <>
            <div className="add-channel">
                <form className="channel-form" action="">
                    <input 
                    placeholder="Channel Name" 
                    type="text" 
                    value={channelForm.name}
                    onChange={handleChange}
                    name="name"
                    />

                    <input 
                    placeholder="Channel Description" 
                    type="text" 
                    value={channelForm.description}
                    onChange={handleChange}
                    name="description"
                    />
                    <button onClick={AddChannel} type="button" class="button">
            <span class="button__text">Add a new channel</span>
            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
            </button>                </form>
            </div>
        </>
     );
}
 
export default AddChannel;