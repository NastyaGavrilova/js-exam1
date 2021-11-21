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
    // let spanMessageError = document.getElementsByClassName(
    //   "e-span__error-message"
    // );
    // spanMessageError.innerHTML = "Where is your message?";
    let spanMessageError = document.getElementById("js-error-name");
    spanMessageError.classList.add("e-span__error");
    spanNameError.innerHTML = "You did not enter a name";
    valid = false;
  }

  // проверяем поле емейла
  const emailField = document.getElementById("js-input-email");

  if (!emailField.value) {
    // если не заполнено
    // let spanEmailError = document.getElementsByClassName("e-span__error-email");
    // spanEmailError.innerHTML = "You did not enter email";
    document.querySelector('label[for="js-input-email"]').innerHTML +=
      ' <span class="e-span__error">You did not enter email</span>';
    valid = false;
  } else {
    // если заполнено, то проверяем на корректность email-адреса регулярным выражением
    const rejex =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!rejex.test(String(emailField.value).toLowerCase())) {
      // spanEmailError.innerHTML = "Incorrect Email, try again!";
      document.querySelector('label[for="email"]').innerHTML +=
        ' <span class="e-span__error">Incorrect Email, try again!</span>';
      valid = false;
    }
  }

  if (false == valid) {
    e.preventDefault(); // предотвращаем отправку формы, если есть ошибки валидации
  }
  return valid;
};

const formBtn = document.getElementById("js-contacts__btn");
formBtn.addEventListener("click", validate);
