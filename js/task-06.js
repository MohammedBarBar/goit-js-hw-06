const textInput_lenght = document.querySelector("#validation-input");
textInput_lenght.addEventListener("blur", () => {
  //   console.log(textInput_lenght.value.length);
  if (textInput_lenght.value.length === 6) {
    textInput_lenght.classList.remove("invalid");
    textInput_lenght.classList.add("valid");
  } else textInput_lenght.classList.add("invalid");
});
