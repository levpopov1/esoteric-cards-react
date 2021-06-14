import React from 'react'

function Auth() {
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
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" aria-describedby="passwordHelp"/>
                    <div id="passwordHelp" className="form-text">Please do not reuse passwords from other sites.</div>
                  </div>
                  <div className="d-grid gap-2 text-center">
                    <button type="submit" className="btn btn-primary">Log in</button>
                    <p className="m-0">&mdash; or &mdash;</p>
                    <a href="/register" className="btn btn-outline-dark">Create account</a>
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
