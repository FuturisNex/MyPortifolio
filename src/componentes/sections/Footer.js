import {FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './styles/Footer.module.css'
function Footer (){
    return (
        <div className={styles.Footer}>
            <ul>
                <li><a href='https://www.instagram.com/gustavo_bds_/'><FaInstagram size={(30)}/></a></li>
                <li><a href='https://github.com/Gustavo-BDS'><FaGithub size={(30)}/></a></li>
            </ul>
            <p>gustavoclashs362@gmail.com</p>
            <p> Gustavo © 2023</p>
        </div>
    )
}

export default Footer