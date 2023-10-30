import { Link } from "react-router-dom";
import '../css/landingpage.css'


const LandingPage = () => {
    return ( 
        <>
            <div className="landing-page">
                <div className="nav-bar">
                    <h2 className="name">P<div className="logo"><img src="logoimg.png" alt="" /></div>D<span>CLUB</span></h2>
                    <Link className='login-btn'>Login</Link>
                </div>


                <div className="body">
                    
                    <div className="title">
                        <h1><span className="connect">Connect</span> and Get the best <span className="podcast">Podcast</span> experience <br /> Today.</h1>
                        <Link className="get-started">Get Started</Link>
                    </div>

                    <div className="image">
                        <div className="circle">
                            <div className="div">
                            </div>
                            <img className="micimg" src="mic.png" alt="" />
                            <img className="playimg" src="play.png" alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
     );
}
 
export default LandingPage;