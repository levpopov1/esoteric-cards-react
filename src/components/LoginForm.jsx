import React, {useState, useRef} from 'react';
import makeAPIRequest from '../lib/makeAPIRequest';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAccessToken, clearAccessToken } from '../redux/slices/userSlice';

function LoginForm({formValidationUI, isEmailValid, isPasswordValid}) {

  const loginFormRef = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("Please provide a valid email.");
  const [passwordErrorText, setPasswordErrorText] = useState("Please provide a password.");

  const history = useHistory();
  const dispatch = useDispatch();

  const login = async () => {

    setEmailErrorText("");
    setPasswordErrorText("");

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }

    try {
      let response = await makeAPIRequest('/auth/login', requestOptions);
      return Promise.resolve(response.accessToken);
    } 
    catch (errors) {
      let emailErrors = errors.filter(err => err.param === "email");
      let passwordErrors = errors.filter(err => err.param === "password");

      if(emailErrors.length > 0){
        setEmailErrorText(emailErrors[0].msg);
        formValidationUI.applyInputInvalidClass(emailInput);
        // applyEmailInvalidClass();
      }
      else{
        formValidationUI.applyInputValidClass(emailInput);

        // applyEmailValidClass();
      }

      if(passwordErrors.length > 0){
        setPasswordErrorText(passwordErrors[0].msg);
        formValidationUI.applyInputInvalidClass(passwordInput);

        // applyPasswordInvalidClass();
      }
      else{
        formValidationUI.applyInputValidClass(passwordInput);

        // applyPasswordValidClass();
      }

      return Promise.reject("Validation errors found");
    }
  }

  

  const checkValidation = (e) => {
    const emitter = e.target.id;

    console.log(emitter)

    switch (emitter) {
      case 'email':
        isEmailValid(email) ? formValidationUI.applyInputValidClass(emailInput) : formValidationUI.applyInputInvalidClass(emailInput);
        break;

      case 'password':
        isPasswordValid(password) ? formValidationUI.applyInputValidClass(passwordInput) : formValidationUI.applyInputInvalidClass(passwordInput);
        break;

      default:
        break;
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    // cancel submission if local validation fails
    if(!isEmailValid(email) || !isPasswordValid(password)) return false;
    
    const action = e.nativeEvent.submitter.id;

    switch (action) {
      case 'login':
        try {
          let accessToken = await login();
          dispatch(setAccessToken(accessToken));
          history.push('/');
        } 
        catch (error) {
          dispatch(clearAccessToken());
        }
        break;
      case 'register':
        // register();
        break;
      default:
        break;
    }

  }

  // if(password.length === 0){
  //   setPasswordErrorText("Please provide a password.");
  // }
  // else if(password.length > 0 && password.length < 16){
  //   setPasswordErrorText("Password must be at least 16 characters long.");
  // }



  return (
    <div className="card p-4">
      <div className="card-body">
        <h2 className="card-title mb-3">Welcome to Esoteric</h2>
        <h6 className="card-subtitle text-muted">Please sign in to continue</h6>
      </div>
      <div className="card-body">
        <form className="needs-validation" onSubmit={handleSubmit} ref={loginFormRef}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={email} ref={emailInput} onChange={e => setEmail(e.target.value)} onBlur={e => checkValidation(e)} aria-describedby="emailFeedback" required/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            <div id="emailFeedback" className="invalid-feedback">
              {emailErrorText}
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password} ref={passwordInput} onChange={e => setPassword(e.target.value)} onBlur={e => checkValidation(e)} aria-describedby="passwordFeedback" required/>
            {/* <div id="passwordHelp" className="form-text">Please do not reuse passwords from other sites.</div> */}
            <div id="passwordFeedback" className="invalid-feedback">
              {passwordErrorText}
            </div>
          </div>
          <div className="d-grid gap-2 text-center">
            <button type="submit" id="login" className="btn btn-primary">Log in</button>
            {/* <p className="m-0">&mdash; or &mdash;</p>
            <button type="submit" id="register" className="btn btn-outline-dark" onClick={() => setShowRegisterForm(prev => !prev)}>Create account</button> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
