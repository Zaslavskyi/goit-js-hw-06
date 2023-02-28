const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
let counterEl = document.querySelector("#value");
  let counterValue = 0;
  btnDecrementEl.addEventListener("click", () => {
    counterValue -= 1;
    counterEl.textContent = counterValue;
  });
  btnIncrementEl.addEventListener("click", () => {
    counterValue += 1;
    counterEl.textContent = counterValue;
  });