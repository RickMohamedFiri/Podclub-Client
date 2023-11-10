import styles from '../css/Styles.module.css'
import Message from './Message';


const Chats = () => {
    return ( 
        <>
            <div className={styles.messages}>
                <Message/>
            </div>
        </>
     );
}
 
export default Chats;