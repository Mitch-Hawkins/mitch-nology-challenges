export const addLottoNumbers = (numbers) => {
  document.querySelector(
    "section"
  ).innerHTML = `<p style="color:green"> Your lotto number are ${numbers.toString()} </p>`;
};

export const addLoading = () => {
  document.querySelector(
    "section"
  ).innerHTML = `<p style ="color:orange">Loading</p>`;
};
