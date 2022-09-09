import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginFormSchema } from '../validationSchema/schema';
import { login } from '../redux/slices/userSlice';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginFormSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log('form on submit', values);
        const response = await dispatch(login(values));
        setSubmitting(false);
        if (response.error) {
          console.log('ERROR', response.error.message);
          return;
        }
        if (response.payload.user.id) {
          navigate('/');
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form id="login-form">
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
              id="login-button"
              className="btn btn-primary"
            >
              Log in
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
