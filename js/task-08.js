console.log("Task 8");

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  //   console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

console.log(
  "-------------------------------------------------------------------------------"
);
