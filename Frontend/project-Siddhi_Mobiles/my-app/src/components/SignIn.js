import React from 'react';
import '../SignIn.css';

const SignIn = () => {
  return (
    <div>
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            {/*------------- image -------------*/}
            <img src="images/white.png" alt="" />
          </div>

          <div className="col-md-6 right">
            <div className="input-box">
              <h3>
                <b>Sign in to your account</b>
              </h3>

              <div className="input-field">
                <button type="button" className="btn btn-light">
                  <h6 className="bi bi-google">&nbsp;Sign in with Google</h6>
                </button>
                <br />
                <br />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email address"
                  required=""
                />
                <div className="invalid-feedback">Please enter email.</div>
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  required=""
                />
                <div className="invalid-feedback">Please enter password.</div>
              </div>

              <div className="forgotpwd">
                <span>
                  <a href="#!" onClick={(e) => e.preventDefault()}>
                    Forgot Password?
                  </a>
                </span>
              </div>

              <div className="input-field">
                <button type="button" className="btn btn-dark btn-lg">
                  Continue
                </button>
              </div>

              <div className="signin">
                <span>
                  Not a Member?{' '}
                  <button type="button" className="btn btn-dark btn-lg" onClick={(e) => e.preventDefault()}>
                    Create Account
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default SignIn;
