console.log("Task 9");

const color_button = document.querySelector(".change-color");
const span_color = document.querySelector(".color");

color_button.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  document.body.style.color = getRandomHexColor();
  span_color.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(
  "-------------------------------------------------------------------------------"
);
