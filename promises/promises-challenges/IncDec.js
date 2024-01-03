function delayedIncDec(n, mode, timeout = 2500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!n || !mode) {
        reject(new Error("Must Provide all parameters"));
      } else if (mode == "Inc") {
        n++;
      } else if (mode == "Dec") {
        n--;
      }
      resolve(n);
    }, timeout);
  });
}

delayedIncDec(10, "Inc", 3000)
  .then((result) => console.log(result))
  .catch((e) => console.log(e.message));

delayedIncDec(0, "Dec", 1000)
  .then((result) => console.log(result))
  .catch((e) => console.log(e.message));
delayedIncDec(3, "Inc")
  .then((result) => console.log(result))
  .catch((e) => console.log(e.message));
