import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginFormSchema } from '../validationSchema/schema';
import { login, selectUserStatus } from '../redux/slices/userSlice';

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, status } = useSelector(selectUserStatus);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginFormSchema}
      onSubmit={async (values, actions) => {
        const { error, payload } = await dispatch(login(values));
        actions.setSubmitting(false);
        if (!error && payload) {
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
              style={{ position: 'relative' }}
            >
              {status === 'loading' && (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    style={{ position: 'absolute', left: '10px', top: '10px' }}
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Loading...</span>
                </>
              )}
              Log in
            </button>
          </div>
          {error && status === 'failed' && (
            <div className="mt-3">
              <div className="invalid-feedback text-center fw-bold">Error: {error}</div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
