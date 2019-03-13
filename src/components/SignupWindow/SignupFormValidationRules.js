export default function validate(values) {
  const errors = {};
  if (!values.name) {
    errors.name = 'First Name is Required';
  } else if (!/^[a-zA-Z][a-zA-Z]{1,25}$/.test(values.name)) {
    errors.name = 'Please only enter your first name';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (
    !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
      values.email
    )
  ) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be 6 or more characters';
  }
  return errors;
}
