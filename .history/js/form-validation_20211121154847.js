// const validate = (e) => {
//   let valid = true;

//   // удаляем все уже существующие ошибки валидации, чтобы проверять по новой
//   const errors = document.getElementsByClassName("e-span__error");
//   while (errors.length > 0) {
//     errors[0].parentNode.removeChild(errors[0]);
//   }

//   // проверяем автора
//   const nameField = document.getElementById("js-input-name");

//   if (!nameField.value) {
//     let spanNameError = document.getElementById("js-error-name");
//     spanNameError.classList.add("e-span__error");
//     spanNameError.innerHTML = "You did not enter a name";
//     valid = false;
//   }
//   // проверяем поле комментария
//   const messageField = document.getElementById("js-textarea-message");

//   if (!messageField.value) {
//     // если не заполнено
//     let spanMessageError = document.getElementById("js-error-message");
//     spanMessageError.classList.add("e-span__error");
//     spanMessageError.innerHTML = "Where is your message?";
//     valid = false;
//   }

//   // проверяем поле емейла
//   const emailField = document.getElementById("js-input-email");

//   if (!emailField.value) {
//     // если не заполнено

//     let spanEmailError = document.getElementById("js-error-email");
//     spanEmailError.classList.add("e-span__error");
//     spanEmailError.innerHTML = "You did not enter email";
//     valid = false;
//   } else {
//     // если заполнено, то проверяем на корректность email-адреса регулярным выражением
//     const rejex =
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (!rejex.test(String(emailField.value))) {
//       let spanEmailError = document.getElementById("js-error-email");
//       spanEmailError.classList.add("e-span__error");
//       spanEmailError.innerHTML = "Incorrect Email, try again!";
//       valid = false;
//     }
//   }

//   if (false == valid) {
//     e.preventDefault(); // предотвращаем отправку формы, если есть ошибки валидации
//   }

//   let user = {
//     name: nameField.value,
//     email: emailField.value,
//     message: messageField.value,
//   };

//   // созраняем в локал сторадж
//   localStorage.setItem("user", JSON.stringify(user));
//   console.log(JSON.parse(localStorage.getItem("user")));
//   return valid;
// };

// const formBtn = document.getElementById("js-contacts__btn");
// formBtn.addEventListener("click", validate);

const BASE_URL =
  "https://beetroot-solodkui.herokuapp.com/beetroot-solodkui/users/registration";
const email = document.getElementById("js-input-email");
const btnForm = document.getElementById("js-contacts__btn");
const errorMessage = document.querySelector(".c-error-message");
let user;

class Users {
  emailError = "Incorrect email! Try again";
  firsNameError = "You did not enter a name";
  lastNameError = "You did not enter a surname";
  userMessageError = "Where is your message?";
  regex = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
  firstName = document.getElementById("js-input-first-name").value;
  lastName = document.getElementById("js-input-last-name").value;
  email = document.getElementById("js-input-email").value;
  userMessage = document.getElementById("js-textarea-message");
  valid = this.regex.test(this.email);
  active = true;
  role = 2;
  language = "ua";
  disabledSeasonAnimation = true;

  get userData() {
    if (this.firstName != "") {
      if (this.lastName != "") {
        if (this.userMessage != "") {
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
          return this.userMessageError;
        }
      } else {
        return this.lastNameError;
      }
    } else {
      return this.firstName;
    }
  }
}

btn.disabled = false;
btn.addEventListener("click", (e) => {
  e.preventDefault();

  user = new Users();
  email.classList.remove("e-input--error");
  confirmPassword.classList.remove("e-input--error");
  errorMessage.classList.remove("c-form--success");
  errorMessage.innerHTML = "";
  if (user.userData === user.passwordError) {
    errorMessage.innerHTML = user.passwordError;
    confirmPassword.classList.add("e-input--error");
  } else if (user.userData === user.emailError) {
    errorMessage.innerHTML = user.emailError;
    email.classList.add("e-input--error");
  } else {
    btn.disabled = true;
    getUserName();
  }
});
