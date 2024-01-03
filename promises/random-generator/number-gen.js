export const generateRandomNumber = (max = 10) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * max);
      if (randomNumber < 3) {
        reject(new Error("Number too small"));
      }
      resolve(randomNumber);
    }, 2000);
  });
};
