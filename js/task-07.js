console.log("Task 7");
const scrollInput = document.querySelector("#font-size-control");
const span_scroll = document.querySelector("#text");
span_scroll.style.fontSize = `50px`;
scrollInput.addEventListener("input", (event) => {
  span_scroll.style.fontSize = `${event.currentTarget.value}px`;
  console.log(event.currentTarget.value);
});

console.log(
  "-------------------------------------------------------------------------------"
);
