import {useState, useRef} from 'react';

function LoginForm({checkValidation, handleSubmit, formValidationUI}) {

  const loginFormRef = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("Please provide a valid email.");
  const [passwordErrorText, setPasswordErrorText] = useState("Please provide a password.");

  const handleOnSubmit = async (e) => {

    try {
      const callback = await handleSubmit(e, {email, password});
      callback();
    } 
    catch (errors) {
      if(!errors) return;

      const {emailErrors, passwordErrors} = errors;
      
      if(emailErrors.length > 0){
        setEmailErrorText(emailErrors[0].msg);
        formValidationUI.applyInputInvalidClass(emailInput);
      }
      else{
        formValidationUI.applyInputValidClass(emailInput);
      }
  
      if(passwordErrors.length > 0){
        setPasswordErrorText(passwordErrors[0].msg);
        formValidationUI.applyInputInvalidClass(passwordInput);
      }
      else{
        formValidationUI.applyInputValidClass(passwordInput);
      }
    }

  }

  return (
    <div className="card p-4">
      <div className="card-body text-center">
        {/* <h2 className="card-title mb-3">Welcome to Esoteric</h2> */}
        <h6 className="card-subtitle text-muted">Please sign in to continue</h6>
      </div>
      <div className="card-body">
        <form id="login-form" onSubmit={(e) => handleOnSubmit(e)} ref={loginFormRef}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={email} ref={emailInput} onChange={e => setEmail(e.target.value)} onBlur={e => checkValidation(e, email, emailInput)} aria-describedby="emailFeedback" required/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            <div id="emailFeedback" className="invalid-feedback">
              {emailErrorText}
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password} ref={passwordInput} onChange={e => setPassword(e.target.value)} onBlur={e => checkValidation(e, password, passwordInput)} aria-describedby="passwordFeedback" required/>
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
