const validate = (e) => {
  let valid = true;

  // удаляем все уже существующие ошибки валидации, чтобы проверять по новой
  const errors = document.getElementsByClassName("validation-error");
  while (errors.length > 0) {
    errors[0].parentNode.removeChild(errors[0]);
  }
};
