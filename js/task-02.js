console.log("Task 2");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
// const markup = ingredients.map(createElement);

const markup = ingredients.forEach((element) => {
  const item = document.createElement("li");
  item.textContent = element;
  console.log(item.textContent);
  item.classList.add("item");
  list.append(item);
});
console.log(
  "-------------------------------------------------------------------------------"
);
