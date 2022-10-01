const boxes = document.querySelector("#boxes");
boxes.style.backgroundColor = getRandomHexColor();
const NumberOfBox = document.querySelector("#controls > input");
const createButton = document.querySelector("button[data-create]");
const clearButton = document.querySelector("button[data-destroy]");
createButton.addEventListener("click", function createBoxes() {
  let i = 0;
  while (i < NumberOfBox.value) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    boxes.append(box);
    i++;
  }
});

clearButton.addEventListener("click", function destroyBoxes() {
  boxes.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
