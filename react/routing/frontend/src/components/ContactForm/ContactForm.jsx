import { useRef } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = ({ submitFunction }) => {
    const formRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        submitFunction(Object.fromEntries(formData));
        formRef.current.reset();
    };
    return (
        <form onSubmit={handleSubmit} ref={formRef}>
            <div className={styles.div}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.div}>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.div}>
                <label htmlFor="message">Message: </label>
                <textarea
                    name="message"
                    id="message"
                    cols="20"
                    rows="5"
                    required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
