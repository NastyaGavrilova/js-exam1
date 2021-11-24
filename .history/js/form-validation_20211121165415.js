const BASE_URL =
  "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration";
const email = document.getElementById("js-input-email");
const btnForm = document.getElementById("js-contacts__btn");
const password = document.getElementById("js-input-password");
const errorMessage = document.querySelector(".c-error-message");
let user;

class Users {
  emailError = "Incorrect email! Try again";
  firstNameError = "You did not enter a name";
  lastNameError = "You did not enter a surname";
  passwordError = "You did not enter a password";
  userMessageError = "Where is your message?";
  userNameError = "You did not enter a login";
  regex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
  userName = document.getElementById("js-input-user-name").value;
  firstName = document.getElementById("js-input-first-name").value;
  lastName = document.getElementById("js-input-last-name").value;
  email = document.getElementById("js-input-email").value;
  password = document.getElementById("js-input-password").value;
  valid = this.regex.test(this.email);
  active = true;
  role = 2;
  language = "ua";
  disabledSeasonAnimation = true;

  get userData() {
    if (this.firstName != "") {
      if (this.lastName != "") {
        if (this.userName != "") {
          if (this.password != "") {
            if (this.valid) {
              return {
                role: this.role,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                username: this.userName,
                password: this.password,
                disabledSeasonAnimation: this.disabledSeasonAnimation,
                language: this.language,
                active: this.active,
              };
            } else {
              return this.emailError;
            }
          } else {
            return this.passwordError;
          }
        } else {
          return this.userNameError;
        }
      } else {
        return this.lastNameError;
      }
    } else {
      return this.firstNameError;
    }
  }
}

btnForm.disabled = false;
btnForm.addEventListener("click", (e) => {
  e.preventDefault();

  user = new Users();
  if (user.userData === user.firstNameError) {
    errorMessage.innerHTML = user.firstNameError;
    firstName.classList.add("e-input--error");
  } else if (user.userData === user.lastNameError) {
    errorMessage.innerHTML = user.lastNameError;
    lastName.classList.add("e-input--error");
  } else if (user.userData === user.userNameError) {
    errorMessage.innerHTML = user.userNameError;
    userName.classList.add("e-input--error");
  } else if (user.userData === user.emailError) {
    errorMessage.innerHTML = user.emailError;
    email.classList.add("e-input--error");
  } else if (user.userData === user.passwordError) {
    errorMessage.innerHTML = user.passwordError;
    password.classList.add("e-input--error");
  } else {
    btnForm.disabled = true;
    getUserName();
  }
  localStorage.setItem("user", JSON.stringify(user));
  console.log(JSON.parse(localStorage.getItem("user")));
});

function getUserName() {
  const userDataJSON = JSON.stringify(user.userData);
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: userDataJSON,
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.success) {
        errorMessage.classList.add("c-form--success");
        errorMessage.innerHTML = response.message.en;
        document.querySelector(".c-contacts__form").reset();
        btnForm.disabled = false;
      } else {
        errorMessage.classList.add("c-form__error");
        errorMessage.innerHTML = response.message.en;
        btnForm.disabled = false;
      }
    });
}
