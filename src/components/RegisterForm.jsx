import {useState, useRef} from 'react';

function RegisterForm({checkValidation, handleSubmit, formValidationUI}) {

  const registerFormRef = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const usernameInput = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("Please provide a valid email.");
  const [passwordErrorText, setPasswordErrorText] = useState("Please provide a password.");
  const [usernameErrorText, setUsernameErrorText] = useState("Please choose a username.");

  const handleOnSubmit = async (e) => {

    try {
      const callback = await handleSubmit(e, {username, email, password});
      callback();
    } 
    catch (errors) {
      if(!errors) return;

      const {usernameErrors, emailErrors, passwordErrors} = errors;
      
      if(usernameErrors.length > 0){
        setUsernameErrorText(usernameErrors[0].msg);
        formValidationUI.applyInputInvalidClass(usernameInput);
      }
      else{
        formValidationUI.applyInputValidClass(usernameInput);
      }
  
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
        <h6 className="card-subtitle text-muted">Create an account</h6>
      </div>
      <div className="card-body">
        <form id="register-form" onSubmit={(e) => handleOnSubmit(e)} ref={registerFormRef}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" value={username} ref={usernameInput} onChange={e => setUsername(e.target.value)} onBlur={e => checkValidation(e, username, usernameInput)} aria-describedby="usernameFeedback"/>
            <div id="usernameFeedback" className="invalid-feedback">
              {usernameErrorText}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={email} ref={emailInput} onChange={e => setEmail(e.target.value)} onBlur={e => checkValidation(e, email, emailInput)} aria-describedby="emailFeedback" required/>
            <div id="emailFeedback" className="invalid-feedback">
              {emailErrorText}
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={password} ref={passwordInput} onChange={e => setPassword(e.target.value)} onBlur={e => checkValidation(e, password, passwordInput)} aria-describedby="passwordFeedback" required/>
            <div id="passwordFeedback" className="invalid-feedback">
              {passwordErrorText}
            </div>
          </div>
          <div className="d-grid gap-2 text-center">
            <button type="submit" id="register" className="btn btn-primary">Create Account</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
