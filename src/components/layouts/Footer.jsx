import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "./container";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
};

export default Footer;
