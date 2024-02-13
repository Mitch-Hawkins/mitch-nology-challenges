import { useRef } from "react";
import styles from "./ControlledForm.module.scss";

const RefForm = ({ formSubmit }) => {
  const formRef = useRef(null);
  // const [errors, setErrors] = useState(null);

  // const validateForm = (data) => {
  //     // FIX THIS TOMORROW
  //     const errorObj = {
  //         username: [],
  //         email: [],
  //         password: [],
  //         passwordConfirm: [],
  //     };

  //     if (data.username === "") {
  //         errorObj.username.push("Username cannot be empty");
  //     }

  //     if (data.email === "") {
  //         errorObj.email.push("Email cannot be empty");
  //     }

  //     if (data.password === "") {
  //         errorObj.password.push("Password cannot be empty");
  //     }

  //     if (data.passwordConfirm !== data.password) {
  //         errorObj.passwordConfirm.push(
  //             "Password confirm must match password"
  //         );
  //     }

  //     if (Object.values(errorObj).some((arr) => arr.length > 0)) {
  //         setErrors(errorObj);
  //         console.log(errorObj, "ERRORS");
  //         return false;
  //     }

  //     return true;
  // };

  // 1. Get a reference to the form element from the DOM

  // 2. Create a formData object from it

  // as an alterative you could create useRefs to all inputs one by one
  // this would be really long for a form witha  lot of inputs
  // const usernameRef = useRef(null);
  // const emailRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // sendDataToBAcked({username: usernameRef.current.value, email: emailRef.current.value})
    //  console.log(usernameRef.current.value);

    // formSubmit({
    //     username: usernameRef.current.value,
    //     email: emailRef.current.value,
    // });
    // console.log(formRef.current);
    // console.log(formRef);
    const form = formRef.current;
    const formData = new FormData(form);
    const dataToSendToBackend = Object.fromEntries(formData);
    const isValid = validateForm(dataToSendToBackend);
    // if (isValid) {
    // console.log("form is valid, submitting");
    // setErrors(null);
    formSubmit(dataToSendToBackend);
    form.reset();
    // }
    // console.log(formData);
    // console.log(Object.fromEntries(formData));
    // console.log([...formData.entries()]);
  };

  // console.log("form re-rendered");

  return (
    <form onSubmit={handleSubmit} ref={formRef} className={styles.form}>
      <div className={styles.div}>
        <label htmlFor="usernameInput">Username: </label>
        <input
          type="text"
          id="usernameInput"
          name="username"
          ref={usernameRef}
        />
        {errors?.username?.[0] && (
          <small className={styles.error}>{errors.username[0]}</small>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="emailInput">Email: </label>
        <input type="email" id="emailInput" name="email" ref={emailRef} />
        {errors?.email?.[0] && (
          <small className={styles.error}>{errors.email[0]}</small>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="passwordInput">Password: </label>
        <input type="password" id="passwordInput" name="password" />
        {errors?.password?.[0] && (
          <small className={styles.error}>{errors.password[0]}</small>
        )}
      </div>
      <div className={styles.div}>
        <label htmlFor="passwordConfInput">Password Confirm: </label>
        <input type="password" id="passwordConfInput" name="passwordConfirm" />
        {errors?.passwordConfirm?.[0] && (
          <small className={styles.error}>{errors.passwordConfirm[0]}</small>
        )}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RefForm;
