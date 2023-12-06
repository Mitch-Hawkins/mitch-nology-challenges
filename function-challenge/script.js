function moonOrbits(earthDays) {
  return console.log(earthDays / 27);
}

moonOrbits(365);

function circleArea(radius) {
  return console.log(Math.PI * radius ** 2);
}

circleArea(10);

function circlePerimeter(radius) {
  return console.log(2 * Math.PI * radius);
}

circlePerimeter(10);

function ageInDays(age) {
  return console.log(age * 365);
}

ageInDays(32);

function ageInSeconds(age) {
  return console.log(age * 365 * 24 * 60 * 60);
}

ageInSeconds(32);

function remainder(number, division) {
  return console.log(number % division);
}

remainder(5, 5);

function totalPoints(twoPointers, threePointers) {
  return console.log(twoPointers * 2 + threePointers * 3);
}

totalPoints(10, 5);

function lessThan100(number1, number2) {
  if (number1 + number2 < 100) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

lessThan100(220, 15);
