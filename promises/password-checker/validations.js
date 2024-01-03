export const validateString = (password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof password !== "string") {
        return reject(new Error("Password must be a string"));
      }
      resolve(password);
    }, 1000);
  });
};

export const validateCapitals = (password) => {
  return new Promise((resolve, reject) => {
    if (/[A-Z]/.test(password)) {
      return resolve(password);
    }
    reject(new Error("Password must contain at least one captial letter"));
  });
};

export const validateLength = (password, requiredLength = 6) => {
  return new Promise((resolve, reject) => {
    if (password.length < requiredLength) {
      reject(
        new Error(`Password must be at least ${requiredLength} characters`)
      );
    }
    resolve(password);
  });
};

export const validateNumber = (password) => {
  return new Promise((resolve, reject) => {
    if (/[0-9]/.test(password)) {
      return resolve(password);
    }
    reject(new Error("Password must contain at least one number"));
  });
};

export const validateSpecialChars = (password) => {
  const specialChars = ["!", "@", "#", "%", "&"];
  if (specialChars.some((char) => password.includes(char))) {
    return password;
  }
  throw new Error("Password must include at least one special character");
};

// validateString("Passw0rd")
//   .then((result) => validateCapitals(result))
//   .then((result) => validateLength(result, 8))
//   .then(validateNumber)
//   .then((result) => validateSpecialChars(result))
//   .then((password) => console.log("The Valid password is " + password))
//   .catch((e) => console.log(e.message));
