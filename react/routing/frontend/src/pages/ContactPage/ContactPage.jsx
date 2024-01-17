import { useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Heading from "../../components/Heading/Heading";
import { createMessage } from "../../services/messages";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
    const [submitSuccessful, setSubmitSuccessful] = useState(false);

    const submitFunction = (data) => {
        createMessage(data)
            .then((res) => {
                setSubmitSuccessful(true);
                console.log(res);
            })
            .catch((e) => console.error(e));
    };
    return (
        <main className={styles.content}>
            <Heading>Contact</Heading>
            <ContactForm submitFunction={submitFunction} />
            {submitSuccessful && <p>Thank you for submitting you message</p>}
        </main>
    );
};

export default ContactPage;
