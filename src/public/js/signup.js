signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await request("/api/signup", "POST", {
    username: usernameInput.value,
    password: passwordInput.value,
    mail: mailInput.value,
    age: ageInput.value,
  });
  console.log(response);
  alertShow(response.message, response.status);
  console.log(response.status);
  if (response.status === "success") {
    setTimeout(() => {
      redirect("/");
    }, 1000);
  }
});

function alertShow(message, status) {
  alertBox.classList.remove("hidden");
  if (status === "fail") {
    alertBox.classList.remove("alert-success");
    alertBox.classList.add("alert-warning");
  } else if (status === "success") {
    alertBox.classList.remove("alert-warning");
    alertBox.classList.add("alert-success");
  }
  alertBox.textContent = message;
}

function redirect(path) {
  window.location.href = path;
}
