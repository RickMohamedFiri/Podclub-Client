import styles from '../css/Styles.module.css'



const Message = () => {



    return ( 
        <>
         <div className={styles.message}>
            <div className={styles.messageInfo}>
                <img  src="icon.jpg" alt="" />
                <span>just now</span>
            </div>
            <div className={styles.messageContent}>
                <p>The new album is out guys!</p>
                <img src="icon2.jpg" alt="" />
            </div>
         </div>
        </>
     );  
}
 
export default Message;
<>

</>