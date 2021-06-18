import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
// import RegisterForm from '../components/RegisterForm';

const isEmailValid = (email) => {
  const rx = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g);
  return Boolean(email.match(rx));
}

const isPasswordValid = (password) => {
  return Boolean(password.length > 16);
}

const formValidationUI = {
  applyInputValidClass: (input) => {
    input.current.classList.remove('is-invalid');
    input.current.classList.add('is-valid');
  },
  applyInputInvalidClass: (input) => {
    input.current.classList.remove('is-valid');
    input.current.classList.add('is-invalid');
  }
}

function Auth() {

  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const {action} = useParams();

  useEffect(() => {
    console.log(action)
    switch (action) {
      case "login":
        setShowRegisterForm(false);
        break;
      case "register":
        setShowRegisterForm(true);
        break;
      default:
        break;
    }
  }, [action]);

  
  return (
    <div id="authScreen">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-md-center pt-4 pt-md-0">
          <div className="col-sm-4">
            <div className={`flippable-card ${showRegisterForm ? "active" : ""}`}>
              <div className="flippable-card-inner">
                <div className="flippable-card-front">
                  <LoginForm formValidationUI={formValidationUI} isEmailValid={isEmailValid} isPasswordValid={isPasswordValid}/>
                </div>
                <div className="flippable-card-back">
                  {/* <RegisterForm formValidationUI={formValidationUI} isEmailValid={isEmailValid} isPasswordValid={isPasswordValid}/> */}
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 px-5 text-center text-white">
              <p className="mb-3 mt-5">
                {showRegisterForm ? "Already have an account?" : "Don't have an account?"}
              </p>
              <button id="register" className="btn btn-dark" onClick={() => setShowRegisterForm(prev => !prev)}>
                {showRegisterForm ? "Log in" : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
