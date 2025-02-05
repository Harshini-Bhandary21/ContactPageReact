import {MdMessage} from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import styles from "./Button.module.css"
function Button({isOutline,icon,text}){
    return(
        <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
            {icon}
            {text}

        </button>
    )
}

export default Button