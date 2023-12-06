function sum(n) {
  let sumNumber = 0;
  for (let i = 0; i <= n; i++) {
    sumNumber += i;
  }
  console.log(sumNumber);
}

sum(10);

function sumTo(n) {
  console.log((n * (n + 1)) / 2);
}

sumTo(4);
