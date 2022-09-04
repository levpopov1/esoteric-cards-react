import { Outlet } from 'react-router-dom';

function AuthView() {
  return (
    <div id="authScreen">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-md-center pt-4 pt-md-0">
          <div className="col-sm-4">
            <h2 className="display-5 text-center mb-5">Esoteric</h2>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthView;
