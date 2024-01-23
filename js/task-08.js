const newUser = {
    email: "",
    password: "",

    getEmail() {
      return this.email;
    },

    setEmail(newEmail) {
      this.email = newEmail;
    },

    getPassword() {
      return this.password;
    },

    setPassword(newPassword) {
      this.password = newPassword;
    },
  }

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

  event.preventDefault();
  const form = event.target;
  newUser.setEmail(form.elements.email.value);
        newUser.setPassword(form.elements.password.value);

   if (newUser.getEmail() === "" || newUser.getPassword() === "") {
    return console.log("Please fill in all! ");
  }

  console.log(`Login: ${newUser.getEmail()}, Password: ${newUser.getPassword()}`);
  form.reset();
}

