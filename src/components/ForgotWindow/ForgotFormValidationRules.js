export default function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (
    !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/.test(
      values.email
    )
  ) {
    errors.email = 'Email address is invalid';
  }
  return errors;
}
