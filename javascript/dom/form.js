document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const username = document.getElementById("username");
  const usernameError = document.getElementById("username-error");

  username.addEventListener("input", function () {
    if (this.value.length < 5 || this.value.length > 10) {
      usernameError.textContent = "Username must be 5-10 characters long";
      this.classList.add("invalid");
    } else {
      usernameError.textContent = "";
      this.classList.remove("invalid");
    }
  });

  form.addEventListener("submit", function (event) {
    if (username.value.length < 5 || username.value.length > 10) {
      event.preventDefault();
      alert("Please correct the errors before submitting.");
    }
  });
});
