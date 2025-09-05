import React from "react";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";

const ContactFormj = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}></div>
      <div className={styles.contact_image}></div>
      <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
      <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
    </section>
  );
};

export default ContactFormj;
