const categroy = document.querySelector(".categories");
const item = document.querySelectorAll(".item");
const innerItems = document.querySelectorAll(".item > ul");
const topic = document.querySelectorAll(".item > h2");
console.log("Task 1");
console.log("Number of categories : " + item.length);

for (let index = 0; index < topic.length; index++) {
  console.log("Category : " + topic[index].innerHTML);
  console.log("Elements : " + innerItems[index].querySelectorAll("li").length);
}
console.log(
  "-------------------------------------------------------------------------------"
);
