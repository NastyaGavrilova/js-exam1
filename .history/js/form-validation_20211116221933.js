const validate = (e) => {
  let valid = true;

  const errors = document.getElementsByClassName("validation-error");
  while (errors.length > 0) {
    errors[0].parentNode.removeChild(errors[0]);
  }
};
