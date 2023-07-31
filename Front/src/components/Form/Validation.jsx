export default function Validation(values) {
  const errors = {};

  const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/;

  if (values.lastname === '') {
    errors.lastname = 'Le nom est requis';
  }

  if (values.firstname === '') {
    errors.firstname = 'Le prénom est requis';
  }

  if (values.email === '') {
    errors.email = 'L\'email est requis';
  } else if (!emailPattern.test(values.email)) {
    errors.email = 'Le format de l\'email n\'est pas valide';
  }

  if (values.password === '') {
    errors.password = 'Le mot de passe est requis';
  } else if (!passwordPattern.test(values.password)) {
    errors.password = 'Le mot de passe doit contenir 12 caractères et mélanger majuscules, minuscules, chiffres et caractères spéciaux';
  }

  return errors;
}
