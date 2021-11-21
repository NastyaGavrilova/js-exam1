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
    // если не заполнено
    document.querySelector('label[for="js-input-name"]').innerHTML +=
      ' <span class="e-span__error">You did not enter a name</span>';
    valid = false;
  }
  // проверяем поле комментария
  const messageField = document.getElementById("js-textarea-message");

  if (!commentField.value) {
    // если не заполнено
    document.querySelector('label[for="comment"]').innerHTML +=
      ' <span class="validation-error">А где ваш комментарий?</span>';
    valid = false;
  }
};
