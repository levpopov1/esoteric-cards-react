import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="card p-4">
        <div className="card-body text-center">
          <h6 className="card-subtitle text-muted">Please sign in to continue</h6>
        </div>
        <div className="card-body">
          <LoginForm />
        </div>
      </div>
      <div className="d-grid gap-2 px-5 text-center text-white">
        <p className="mb-3 mt-5">Don&apos;t have an account?</p>
        <button
          id="redirect"
          className="btn btn-outline-dark"
          onClick={() => navigate('/auth/signup')}
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Login;
