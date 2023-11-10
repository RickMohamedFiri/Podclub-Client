import '../css/homepage.css'

const ProfileDetails = () => {

    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    return ( 
        <>
          <div className="profile-area">
                        <h1>Profile Details</h1>
                            <ul className="profile-details">
                                <li>
                                    <h2>Username</h2>
                                    <p>{username}</p>
                                </li>

                                <li>
                                    <h2>Email</h2>
                                    <p>{email}</p>
                                </li>

                                <li>
                                    <h2>About</h2>
                                    <p>Get Schwifty</p>
                                </li>
                            </ul>
          </div>

        </>
     );
}
 
export default ProfileDetails;