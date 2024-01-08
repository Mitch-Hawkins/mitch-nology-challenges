import * as challenge from "./js11";

const { greet, sumTwoNumbers, checkLarger, filterByLength, reduceNumbers } =
  challenge;

describe("greet() tests", () => {
  it("Should have a return", () => {
    expect(greet()).toBeDefined();
  });
  it("Should work with basic inputs", () => {
    expect(greet()).toBe("Hello, nice to meet you");
  });
});

describe("sumTwoNumbers() tests", () => {
  it("Should have a return", () => {
    expect(sumTwoNumbers(10, 20)).toBeDefined();
  });
  it("Should work with basic inputs", () => {
    expect(sumTwoNumbers(10, 20)).toBe(30);
  });
});

describe("sumTwoNumbers() tests", () => {
  it("Should have a return", () => {
    expect(sumTwoNumbers(10, 20)).toBeDefined();
  });
  it("Should work with basic inputs", () => {
    expect(sumTwoNumbers(10, 20)).toBe(30);
  });
});

describe("checkLarger() tests", () => {
  it("Should have a return", () => {
    expect(checkLarger(10, 20)).toBeDefined();
  });
  it("Should work with basic inputs", () => {
    expect(checkLarger(10, 20)).toBe("20 is bigger than 10");
    expect(checkLarger(20, 10)).toBe("20 is bigger than 10");
  });
  it("Should work with inputs that are equal", () => {
    expect(checkLarger(20, 20)).toBe("Both numbers are equal");
  });
});

const namesArray = ["Johnny", "Jack", "Jordan", "Jennifer", "Jessica"];
const namesArrayLessThanSix = ["Johnny", "Jack", "Jordan"];

describe("filterByLength() tests", () => {
  it("Should have return an array", () => {
    expect(Array.isArray(filterByLength(namesArray))).toBe(true);
  });
  it("Should return an array of strings", () => {
    const isNameString = filterByLength(namesArray).every(
      (name) => typeof name === "string"
    );
    expect(isNameString).toBe(true);
  });
  it("Should return only the names less than or equal to 6 characters", () => {
    expect(filterByLength(namesArray)).toEqual(namesArrayLessThanSix);
    expect(filterByLength(["Mitch", "Hawkins"])).toEqual(["Mitch"]);
  });
  it("Should deal with an empty array", () => {
    expect(filterByLength([])).toBe("Sorry, no valid names supplied");
  });
});

let numbersArray = [10, 50, 200];

describe("reduceNumbers() tests", () => {
  it("Should have return an array", () => {
    expect(Array.isArray(reduceNumbers(numbersArray))).toBe(true);
  });
  it("Should return an array of numbers", () => {
    const isNumber = reduceNumbers(numbersArray).every(
      (name) => typeof name === "number"
    );
    expect(isNumber).toBe(true);
  });
  it("Should reduce each number in the array by the reduce amount, whilst staying in between 0 and 255", () => {
    expect(reduceNumbers(numbersArray, 10)).toEqual([0, 40, 190]);
    expect(reduceNumbers(numbersArray, 60)).toEqual([0, 0, 140]);
    expect(reduceNumbers([300, 400, 500], 50)).toEqual([250, 255, 255]);
  });
});
