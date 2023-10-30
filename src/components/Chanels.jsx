import '../css/channels.css'

const Channels = () => {
    return ( 
        <div className='menu'>
            <div className="user">
                <div className="icon">
                    <img src="icon.jpg" alt="" />
                </div>
                <div className="details">
                    <p className="username">Light Yagami</p>
                    <p className="about">I am justice.</p>
                </div>
            </div>
            
            <form action="search">
                <input placeholder='Search...' type="text" className="search"/>
            </form>

            <ul className="channels">
                <li className="channel">
                    <div className="icon"></div>
                    <p>CHANNEL NAME</p>
                </li>
                <li className="channel">
                    <div className="icon"></div>
                    <p>CHANNEL NAME</p>
                </li>
                <li className="channel">
                    <div className="icon"></div>
                    <p>CHANNEL NAME</p>
                </li>
                <li className="channel">
                    <div className="icon"></div>
                    <p>CHANNEL NAME</p>
                </li>
                
                
            </ul>
        </div>  
     );
}
 
export default Channels;