import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { setAccessToken, clearAccessToken } from '../redux/slices/userSlice';

// API 
import makeAPIRequest from '../lib/makeAPIRequest';

// Form Components
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const isEmailValid = (email) => {
  const rx = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g);
  return Boolean(email.match(rx));
}

const isPasswordValid = (password) => {
  return Boolean(password.length >= 16);
}

const isUsernameValid = (username) => {
  return Boolean(username.length >= 3 && username.length <= 32);
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

const checkValidation = (e, value, ref) => {
  const emitter = e.target.id;

  console.log(emitter);

  switch (emitter) {
    case 'email':
      isEmailValid(value) ? formValidationUI.applyInputValidClass(ref) : formValidationUI.applyInputInvalidClass(ref);
      break;

    case 'password':
      isPasswordValid(value) ? formValidationUI.applyInputValidClass(ref) : formValidationUI.applyInputInvalidClass(ref);
      break;

    case 'username':
      isUsernameValid(value) ? formValidationUI.applyInputValidClass(ref) : formValidationUI.applyInputInvalidClass(ref);
      break;
    default:
      break;
  }
}

function Auth() {

  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleRedirect = () => {
    if(showRegisterForm){
      history.push('/auth/login');
    }
    else{
      history.push('/auth/register');
    }
    setShowRegisterForm(prev => !prev);
  }

  const login = (email, password) => {
    const body = {
      email: email,
      password: password
    }
    return sendRequest('/auth/login', body);
  }

  const register = (username, email, password) => {
    const body = {
      username: username,
      email: email,
      password: password
    }
    return sendRequest('/auth/register', body);
  }


  const sendRequest = async (endpoint, requestBody) => {

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    }

    try {
      let response = await makeAPIRequest(endpoint, requestOptions);
      return Promise.resolve(response.accessToken);
    } 
    catch (errors) {
      return Promise.reject(errors);
    }
  }

  
  const handleErrorPrompts = (errors) => {
    let usernameErrors = errors.filter(err => err.param === "username");
    let emailErrors = errors.filter(err => err.param === "email");
    let passwordErrors = errors.filter(err => err.param === "password");
    return {usernameErrors, emailErrors, passwordErrors}
  }


  const handleSubmit = async (e, data) => {

    e.preventDefault();

    const {username, email, password} = data;

    const action = e.nativeEvent.submitter.id;

    switch (action) {
      case 'login':
        if(!isEmailValid(email) || !isPasswordValid(password)) {
          return Promise.reject(false);
        }

        try {
          let accessToken = await login(email, password);
          dispatch(setAccessToken(accessToken));
        } 
        catch (errors) {
          dispatch(clearAccessToken());
          return Promise.reject(handleErrorPrompts(errors));
        }
        break;

      case 'register':
        if(!isEmailValid(email) || !isPasswordValid(password) || !isUsernameValid(username)) {
          return Promise.reject(false);
        }

        try {
          let accessToken = await register(username, email, password);
          dispatch(setAccessToken(accessToken));
        } 
        catch (errors) {
          dispatch(clearAccessToken());
          return Promise.reject(handleErrorPrompts(errors));
        }
        break;

      default:
        return Promise.reject(false);
    }

    return Promise.resolve(() => history.push('/'));
  }

  return (
    <div id="authScreen">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-md-center pt-4 pt-md-0">
          <div className="col-sm-4">
            <h2 className="display-5 text-center mb-5">Esoteric</h2>
            <Switch>
              <Redirect exact from="/auth" to="/auth/login" />
              <Route path="/auth/login">
                <LoginForm 
                  checkValidation={checkValidation} 
                  handleSubmit={handleSubmit} 
                  formValidationUI={formValidationUI}
                />
              </Route>
              <Route path="/auth/register">
                <RegisterForm 
                  checkValidation={checkValidation} 
                  handleSubmit={handleSubmit} 
                  formValidationUI={formValidationUI}
                />
              </Route>
            </Switch>
            <div className="d-grid gap-2 px-5 text-center text-white">
              <p className="mb-3 mt-5">
                {showRegisterForm ? "Already have an account?" : "Don't have an account?"}
              </p>
              <button id="register" className="btn btn-dark" onClick={handleRedirect}>
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
