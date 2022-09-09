import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerFormSchema } from '../validationSchema/schema';
import { register } from '../redux/slices/userSlice';

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={registerFormSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log('form on submit', values);
        const response = await dispatch(register(values));
        console.log(response);
        setSubmitting(false);
        if (response.payload.user.id) {
          navigate('/');
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form id="register-form">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <Field
              type="text"
              name="username"
              id="username-input"
              className="form-control"
              aria-describedby="usernameFeedback"
            />
            <ErrorMessage name="username" component="div" className="invalid-feedback" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email-input"
              className="form-control"
              aria-describedby="emailFeedback"
            />
            <ErrorMessage name="email" component="div" className="invalid-feedback" />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password-input"
              className="form-control"
              aria-describedby="passwordFeedback"
            />
            <ErrorMessage name="password" component="div" className="invalid-feedback" />
          </div>
          <div className="d-grid gap-2 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              id="register-button"
              className="btn btn-primary"
            >
              Create Account
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
