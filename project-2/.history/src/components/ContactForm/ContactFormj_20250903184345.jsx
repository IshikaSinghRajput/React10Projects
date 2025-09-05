import React from "react";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactFormj = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}></div>
        <button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
        <button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
      </div>

      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactFormj;
