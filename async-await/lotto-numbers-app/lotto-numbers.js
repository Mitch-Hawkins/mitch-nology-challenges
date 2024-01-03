const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const generateLottoNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(generateRandomNumber(1, 60));
    }, 1000);
  });
};

export const generateLottoNumbers = async (n) => {
  //   const numbers = [];
  //   for (let i = 0; i < n; i++) {
  //     const num = await generateLottoNumber();
  //     numbers.push(num);
  //   }
  //   return numbers;
  const numberPromises = [];
  for (let i = 0; i < n; i++) {
    const numP = generateLottoNumber();
    numberPromises.push(numP);
  }
  return await Promise.all(numberPromises);
};
