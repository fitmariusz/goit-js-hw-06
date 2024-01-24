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
const inputs = document.querySelectorAll("input");

inputs.forEach(inputForm => { 
  inputForm.setAttribute('required','');
});

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  newUser.setEmail(form.elements.email.value);
  newUser.setPassword(form.elements.password.value);
  if (newUser.getEmail() === "" || newUser.getPassword().trim() === "") {
      return console.log("Please fill in all! ");
  }
  console.log(newUser);
  form.reset();
}

