import React from 'react'
import '../SignUp.css';
export default function SignUp() {
  return (
   
       <div className="wrapper">
      <div className="container main">
        <div className="row">
          <div className="col-md-6 side-image">
            {/*------------- image -------------*/}
            <img src="images/white.png" alt="" />
          </div>

          <div className="col-md-6 right">
            <div className="input-box">
              <h1>
                <b>Sign Up</b>
              </h1>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter Your Name"
                  required=""
                />
                <div className="invalid-feedback">Please enter name.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
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

                <small className="form-text">
                  <p>
                    By Signup, you agree to our
                    <a href="#!" onClick={(e) => e.preventDefault()}>
                      Terms of Service
                    </a>
                    &amp;
                    <a href="#!" onClick={(e) => e.preventDefault()}>
                      Privacy Policy
                    </a>
                  </p>
                </small>
              </div>
              <div className="d-grid gap-2">
                <button type="button" className="btn btn-dark btn-lg">
                  <h5 className="bi bi-google">&nbsp;Sign in with Google</h5>
                </button>
                <br />
              </div>
              <div className="input-field">
                <button type="button" className="btn btn-dark btn-lg">
                  Sign Up
                </button>
              </div>
              <div className="signin">
                <span>
                  Already have an account?{' '}
                  <a href='#'>Log in here</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
