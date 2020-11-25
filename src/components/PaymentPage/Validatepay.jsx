export default function Validatepay(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email requis';
  } else if (!/\S+@\S+.\S+/.test(values.email)) {
    errors.email = ' Email invalide';
  }

  return errors;
}
