const validate = (e) => {
  let valid = true;

  // удаляем все уже существующие ошибки валидации, чтобы проверять по новой
  const errors = document.getElementsByClassName("e-span__error");
  while (errors.length > 0) {
    errors[0].parentNode.removeChild(errors[0]);
  }

  // проверяем автора
  const nameField = document.getElementById("js-input-name");

  if (!nameField.value) {
    let spanNameError = document.getElementById("js-error-name");
    spanNameError.classList.add("e-span__error");
    spanNameError.innerHTML = "You did not enter a name";
    valid = false;
  }
  // проверяем поле комментария
  const messageField = document.getElementById("js-textarea-message");

  if (!messageField.value) {
    // если не заполнено
    let spanMessageError = document.getElementById("js-error-message");
    spanMessageError.classList.add("e-span__error");
    spanMessageError.innerHTML = "Where is your message?";
    valid = false;
  }

  // проверяем поле емейла
  const emailField = document.getElementById("js-input-email");

  if (!emailField.value) {
    // если не заполнено

    let spanEmailError = document.getElementById("js-error-email");
    spanEmailError.classList.add("e-span__error");
    spanEmailError.innerHTML = "You did not enter email";
    valid = false;
  } else {
    // если заполнено, то проверяем на корректность email-адреса регулярным выражением
    const rejex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!rejex.test(String(emailField.value))) {
      let spanEmailError = document.getElementById("js-error-email");
      spanEmailError.classList.add("e-span__error");
      spanEmailError.innerHTML = "Incorrect Email, try again!";
      valid = false;
    }
  }

  if (false == valid) {
    e.preventDefault(); // предотвращаем отправку формы, если есть ошибки валидации
  }

  localStorage.setItem("user-email", emailField.value);
  return valid;
};

const formBtn = document.getElementById("js-contacts__btn");
formBtn.addEventListener("click", validate);
