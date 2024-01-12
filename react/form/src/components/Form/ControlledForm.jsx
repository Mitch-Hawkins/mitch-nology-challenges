import { useState, useEffect, useRef } from "react";
import styles from "./ControlledForm.module.scss";

const ControlledForm = () => {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordConfirm, setPasswordConfirm] = useState("");

    const defaultValues = {
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    };

    const [formValues, setFormValues] = useState(defaultValues);
    const [isValid, setIsValid] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues, "formValues");
        setFormValues(defaultValues);
    };

    const validateForm = (data) => {
        // check if my fields are not empty strings, if they are, form is not valid, submit button should be disabled
        if (data.username === "") {
            return false;
        }

        if (data.email === "") {
            return false;
        }

        if (data.password === "") {
            return false;
        }

        if (data.passwordConfirm !== data.password) {
            return false;
        }
        return true;
    };

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        const newValues = { ...formValues, [name]: value };
        setFormValues(newValues);
        const valid = validateForm(newValues);
        // formValues will always be one character behind newValues, because setting state in async, we need time for it to happen
        // !!we can never access the most up to date state in the same function we are setting it in!!
        console.log(formValues, "formVAlues");
        console.log(newValues, "newValues");
        setIsValid(valid);

        // I could add the input validation logic here or move it to its own function
    };

    console.log("Form re-rendered");

    useEffect(() => {
        console.log(formValues, "up t date form values");
        // DO NO SET THE SAME STATE YOUR USEEFFECT IS WATCHING, INFINITE LOOP
        //     setFormValues({});
    }, [formValues]);

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.div}>
                <label htmlFor="usernameInput">Username: </label>
                <input
                    type="text"
                    id="usernameInput"
                    name="username"
                    value={formValues.username}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.div}>
                <label htmlFor="emailInput">Email: </label>
                <input
                    type="email"
                    id="emailInput"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.div}>
                <label htmlFor="passwordInput">Password: </label>
                <input
                    type="password"
                    id="passwordInput"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles.div}>
                <label htmlFor="passwordConfInput">Password Confirm: </label>
                <input
                    type="password"
                    id="passwordConfInput"
                    name="passwordConfirm"
                    value={formValues.passwordConfirm}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" disabled={!isValid}>
                Register
            </button>
        </form>
    );
};

export default ControlledForm;
