import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

function SignUp() {
  const navigate = useNavigate();

  return (
    <>
      <div className="card p-4">
        <div className="card-body text-center">
          <h6 className="card-subtitle text-muted">Create an account</h6>
        </div>
        <div className="card-body">
          <RegisterForm />
        </div>
      </div>
      <div className="d-grid gap-2 px-5 text-center text-white">
        <p className="mb-3 mt-5">Already have an account?</p>
        <button id="redirect" className="btn btn-dark" onClick={() => navigate('/auth/login')}>
          Log In
        </button>
        <button id="gohome" className="btn btn-outline-dark" onClick={() => navigate('/')}>
          Continue as Guest
        </button>
      </div>
    </>
  );
}

export default SignUp;
