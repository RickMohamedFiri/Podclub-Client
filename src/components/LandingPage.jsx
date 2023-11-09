import { Link } from "react-router-dom";
import Logo from "../podclub-images/Logo(1).png";
import '../css/landingpage.css'


const LandingPage = () => {
    return ( 
        <>
            <div className="landing-page">
                <div className="nav-bar">
                    <img src={Logo} alt="The company Logo"/>
                    <Link to='/Login' className='login-link'>Login</Link>
                </div>


                <div className="body">
                    
                    <div className="landing-title">
                            <p> <span className="num1">Connect</span> <span className="num2">and Get the best</span><br/> <span className="num3"> Podcast</span> <span className="num4">experience</span> <br/><span className="num5">Today</span></p>
                        <Link to='/Signup' className="signup-link">Get Started</Link>
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