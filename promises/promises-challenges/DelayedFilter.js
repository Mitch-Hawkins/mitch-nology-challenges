function delayedFilter(array, callback, timeout = 2500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!array || !callback) {
        reject(new Error("Must Provide all parameters"));
      }
      const filter = array.filter(callback);
      console.log(callback);
      resolve(filter);
    }, timeout);
  });
}

let array1 = [2, 3, 4, 5, 6];
let array2 = [10, 20, 30, 40];
let array3 = [4, 6, 8, 9, 1];

function isBiggerThanFour(i) {
  return i > 4;
}

delayedFilter(array1, (i) => i > 4, 3000)
  .then((result) => console.log(result))
  .catch((e) => console.log(e.message));
