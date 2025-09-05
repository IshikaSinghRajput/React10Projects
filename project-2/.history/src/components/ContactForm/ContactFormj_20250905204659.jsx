import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const ContactFormj = () => {
  const [name, setName] = useState("Ishika");
  const [email, setEmail] = useState("Ishika");
  const [text, setText] = useState("Ishika");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setEmail(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button text="SUBMIT" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="\image\contact.svg" />
      </div>
    </section>
  );
};

export default ContactFormj;
