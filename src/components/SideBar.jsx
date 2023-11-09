import '../css/channels.css'

const SideBar = ({open, setOpen}) => {

    const username = localStorage.getItem("username")

    return ( 
        <div className='menu'>
            <div className="user">
                <div className="icon">
                    <img src="icon.jpg" alt="" />
                </div>
                <div onClick={()=>{setOpen(!open)}} className="details">
                    <p className="username">{username}</p>
                    <p className="about">Get Schwifty.</p>
                </div>
            </div>
            
            <form action="search">
                <input placeholder='Search...' type="text" className="search"/>
            </form>

            <ul className="channels">
            <li className="channel">
                    <div className="icon">
                        <img src="icon2.jpg" alt="" />
                    </div>
                    <p>CHANNEL NAME</p>
                </li>  <li className="channel">
                    <div className="icon">
                        <img src="icon2.jpg" alt="" />
                    </div>
                    <p>CHANNEL NAME</p>
                </li>  <li className="channel">
                    <div className="icon">
                        <img src="icon2.jpg" alt="" />
                    </div>
                    <p>CHANNEL NAME</p>
                </li>  <li className="channel">
                    <div className="icon">
                        <img src="icon2.jpg" alt="" />
                    </div>
                    <p>CHANNEL NAME</p>
                </li>
                
            </ul>

           

        </div>  
     );
}
 
export default SideBar;