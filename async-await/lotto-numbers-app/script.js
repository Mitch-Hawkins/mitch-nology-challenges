import { addLottoNumbers } from "./dom-functions.js";
import { generateLottoNumbers } from "./lotto-numbers.js";

document.querySelector("button").addEventListener("click", async () => {
  addLoading;
  const lottoNumbers = await generateLottoNumbers();
  addLottoNumbers(lottoNumbers);
});
