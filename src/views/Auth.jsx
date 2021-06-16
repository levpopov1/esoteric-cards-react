import React, {useState, useRef} from 'react'
import makeAPIRequest from '../redux/makeAPIRequest';

function Auth() {

  const formRef = useRef(null);
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);
  const [emailErrorText, setEmailErrorText] = useState("Please provide a valid email.");
  const [passwordErrorText, setPasswordErrorText] = useState("Please provide a password.");

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

    let response = await makeAPIRequest('/auth/login', requestOptions);

    console.log(response);

    if(response.error){
      // setErrors(response.error);
      formRef.current.classList.remove('was-validated');

      let emailError = response.error.filter(err => err.param === "email");
      let passwordError = response.error.filter(err => err.param === "password");

      if(emailError.length > 0){
        setEmailErrorText(emailError[0].msg);
        emailInput.current.classList.add('is-invalid');
      }
      else{
        emailInput.current.classList.remove('is-invalid');
        emailInput.current.classList.add('is-valid');
      }

      if(passwordError.length > 0){
        setPasswordErrorText(passwordError[0].msg);
        passwordInput.current.classList.add('is-invalid');
      }
      else{
        passwordInput.current.classList.remove('is-invalid');
        passwordInput.current.classList.add('is-valid');
      }

      return false;
    }

    return response.data;
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

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(!e.target.checkValidity()){
      console.log("cancelling api request")
      e.stopPropagation();
      formRef.current.classList.add('was-validated');
      return false;
    }

    console.log("form submitted with", email, password)
    const action = e.nativeEvent.submitter.id;


    // if(!email){
    //   console.log("please provide email")
    // }

    // if(!password){
    //   console.log("please provide password")
    // }

    switch (action) {
      case 'login':
        let data = await login();
        if(!data){

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
                <form className="needs-validation" onSubmit={handleSubmit} ref={formRef} noValidate>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={email} ref={emailInput} onChange={e => setEmail(e.target.value)} aria-describedby="emailFeedback" required/>
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    <div id="emailFeedback" className="invalid-feedback">
                      {emailErrorText}
                    </div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} ref={passwordInput} onChange={e => setPassword(e.target.value)} aria-describedby="passwordFeedback" required/>
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
