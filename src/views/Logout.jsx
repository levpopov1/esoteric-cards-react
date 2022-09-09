import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  return (
    <>
      <p className="text-center text-white mb-5">You have logged out.</p>
      <div className="d-grid gap-2 px-5 text-center text-white">
        <button
          id="redirect"
          className="btn btn-outline-dark"
          onClick={() => navigate('/auth/login')}
        >
          Log back in
        </button>
      </div>
    </>
  );
}

export default Logout;
