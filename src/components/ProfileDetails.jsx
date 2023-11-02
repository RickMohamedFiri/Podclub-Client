import '../css/homepage.css'

const ProfileDetails = () => {
    return ( 
        <>
          <div className="profile-area">
                        <h1>Profile Details</h1>
                            <ul className="profile-details">
                                <li>
                                    <h2>Username</h2>
                                    <p>Rick Sanchez</p>
                                </li>

                                <li>
                                    <h2>Email</h2>
                                    <p>rick@sanchez.com</p>
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