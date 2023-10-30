import '../css/channels.css'

const Channels = () => {
    return ( 
        <div className='menu'>
            <div className="name">
                <div className="icon"></div>
                <p>Nezuko Chan</p>
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
                <li className="channel">
                    <div className="icon"></div>
                    <p>CHANNEL NAME</p>
                </li>
                
            </ul>
        </div>  
     );
}
 
export default Channels;