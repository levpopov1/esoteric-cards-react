import React, {useState, useRef} from 'react'
import { useHistory } from 'react-router-dom';
import makeAPIRequest from '../redux/makeAPIRequest';
import { useDispatch } from 'react-redux';
import { setAccessToken, clearAccessToken } from '../redux/slices/userSlice';

function Auth() {

  const history = useHistory()

  const formRef = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("Please provide a valid email.");
  const [passwordErrorText, setPasswordErrorText] = useState("Please provide a password.");

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
        applyEmailInvalidClass();
      }
      else{
        applyEmailValidClass();
      }

      if(passwordErrors.length > 0){
        setPasswordErrorText(passwordErrors[0].msg);
        applyPasswordInvalidClass();
      }
      else{
        applyPasswordValidClass();
      }

      return Promise.reject("Validation errors found");
    }
  }

  // const register = async () => {
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({email, password})
  //   }

  //   let response = await makeAPIRequest('/auth/register', requestOptions);

  //   if(!response.ok){
  //     console.log(response.error);
  //     setErrors(response.error);
  //   }

  //   return response;
  // }

  const isEmailValid = () => {
    const rx = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/g);
    return Boolean(email.match(rx));
  }

  const isPasswordValid = () => {
    return Boolean(password.length > 0);
  }

  const applyEmailValidClass = () => {
    emailInput.current.classList.remove('is-invalid');
    emailInput.current.classList.add('is-valid');
  }

  const applyEmailInvalidClass = () => {
    emailInput.current.classList.remove('is-valid');
    emailInput.current.classList.add('is-invalid');
  }

  const applyPasswordValidClass = () => {
    passwordInput.current.classList.remove('is-invalid');
    passwordInput.current.classList.add('is-valid');
  }

  const applyPasswordInvalidClass = () => {
    passwordInput.current.classList.remove('is-valid');
    passwordInput.current.classList.add('is-invalid');
  }

  const checkValidation = (e) => {
    const emitter = e.target.id;

    switch (emitter) {
      case 'email':
        isEmailValid() ? applyEmailValidClass() : applyEmailInvalidClass();
        break;

      case 'password':
        isPasswordValid() ? applyPasswordValidClass() : applyPasswordInvalidClass();
        break;

      default:
        break;
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault();

    // cancel submission if local validation fails
    if(!isEmailValid() || !isPasswordValid()) return false;
    
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

  return (
    <div id="authScreen">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-md-center pt-4 pt-md-0">
          <div className="col-sm-4">
            <div className="card p-4">
              <div className="card-body">
                <h2 className="card-title mb-3">Welcome to Esoteric</h2>
                <h6 className="card-subtitle text-muted">Please sign in to continue</h6>
              </div>
              <div className="card-body">
                <form className="needs-validation" onSubmit={handleSubmit} ref={formRef}>
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
                    <p className="m-0">&mdash; or &mdash;</p>
                    <button type="submit" id="register" className="btn btn-outline-dark">Create account</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
