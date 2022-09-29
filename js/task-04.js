console.log("Task 4");
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");
let counterValue = 0;

increment.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});

decrement.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});

console.log(
  "-------------------------------------------------------------------------------"
);
