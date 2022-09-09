import { object, string } from 'yup';

const loginFormSchema = object({
  email: string().email('Please provide a valid email.').required('Please provide a valid email.'),
  password: string().required('Please provide a password.'),
});

const registerFormSchema = object({
  username: string().min(3).max(32).optional(),
  email: string().email('Please provide a valid email.').required('Please provide a valid email.'),
  password: string()
    .required('Please provide a password.')
    .min(4, 'Password must be at least 4 characters long.')
    .max(64, 'Password cannot be longer than 64 characters.'),
});

export { loginFormSchema, registerFormSchema };
