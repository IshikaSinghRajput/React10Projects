import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

export const Button = () => {
  return (
    <button className="{styles.primary_btn}">
      <MdMessage fontSize="24px" />
      VIA SUPPORT CHAT
    </button>
  );
};
