export const divide = (num1, num2) => {
  if (num2 === "0") {
    throw new Error("Zero Division is illegal");
  }
  return num1 / num2;
};
