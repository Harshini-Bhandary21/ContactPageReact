import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import { MdMessage } from "react-icons/md"
import {FaPhoneAlt} from "react-icons/fa"
import {HiMail} from "react-icons/hi"
function ContactForm(){
    return(
        <section className={`${styles.container} container`}>
            <div className={`${styles.container_form}`}>
                <div className={`${styles.top_btn}`}>
                    <Button
                    text = "VIA SUPPORT CHAT"
                    icon = {<MdMessage/>}
                    />
                    <Button
                    text = "VIA CALL"
                    icon = {<FaPhoneAlt/>}
                    />
                </div>
                <Button
                isOutline = "True"
                text="VIA EMAIL FORM"
                icon = {<HiMail/>}
                />
                
                <form>
                    <div className={`${styles.form_control}`}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                    </div>
                    <div className={`${styles.form_control}`}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                    </div>
                    <div className={`${styles.form_control}`}>
                    <label htmlFor="text">Text</label>
                    <textarea style={{paddingTop:"10px"}} name="text" rows="15"/>
                    </div>
                    
                </form>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "end",

                    }

                    }
                >
                <Button
                text="SUBMIT"
                />
                </div>
                
            </div>
            <div className={`${styles.container_image}`}>
                <img src="public/images/Service 24_7-pana 1.svg" alt="svg"/>
            </div>

        </section>
    )
}

export default ContactForm
