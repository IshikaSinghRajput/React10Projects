import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Button.module.css";

const Button = () => {
  return (
    <button className={styles.primary_btn}>
      <MdMessage fontSize="24px" />
      VIA SUPPORT CHAT
    </button>
  );
};

export default Button;
