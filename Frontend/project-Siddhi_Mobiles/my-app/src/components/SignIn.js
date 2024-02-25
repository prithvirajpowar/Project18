import React, {useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../SignUp.css";
// import validation from "./SignInValidation";


function SignIn() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState('');

  const email = useRef(null);
  const password = useRef(null); 

  // const handleInput = (e) => {
  //   setValues(prev => ({...prev, [e.target.name]:e.target.value}))
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mail = email.current.value;
    const pass = password.current.value;

    try{
      const response = await axios.post('http://localhost:9540/loginUser', {email:mail, password:pass});
      console.log(response.data);
      const [role, userId] = response.data.split('-');
      const uId = parseInt(userId)
      console.log(role)
      Cookies.set('UserId', uId);
      if(role === 'USER'){
        Cookies.set('isUser', true);
        Cookies.set('authenticated', true);
        navigate('/home');
        window.location.reload();
      }
      else if(role === 'ADMIN'){
        Cookies.set('isUser', true);
        Cookies.set('authenticated', true);
        navigate('/home');
        window.location.reload();
      }
      else{
        alert(response.status);
      }
    }
    catch(errors){
      console.log('Error occured: ', errors);
      setErrors("Incorrect username or password")
    }
  }
  

//   const handleSubmit =  (e) => {
//     e.preventDefault();
//     setErrors(validation(values));
//     if(errors.email === "" && errors.password === ""){
//       axios.post('http://localhost:9540/LoginUser', values)
//       .then(res => {
//         if(res.data === "Success"){
//           navigate('/home');
// // Cookies.set("user", JSON.stringify(values), { expires: 1/24 })
//         }else{  
//           alert("Invalid Username or Password");
//         }
//       })
//       .catch(err => console.log(err));
//     }
//   }

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 right-box">
            <form onSubmit={handleSubmit}>
              <div className="row align-items-center">
                <div className="header-text mb-4">
                  <h2>Sign-In</h2>
                </div>
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-light w-100 fs-6">
                    <img
                      src="/images/google.png"
                      style={{ width: 20 }}
                      className="me-2"
                    />
                    <small>Sign In with Google</small>
                  </button>
                </div>&nbsp;
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="email"
                    ref={email}
                    // value={formData.email}
                    // onChange={handleInput}
                    className={`form-control form-control-lg bg-light fs-6 ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email address"
                    required=""
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                <div className="input-group mb-1">
                  <input
                    type="password"
                    name="password"
                    ref={password}
                    // value={formData.password}
                    // onChange={handleInput}
                    className={`form-control form-control-lg bg-light fs-6 ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    placeholder="Password"
                    required=""
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>&nbsp;

                <div className="input-group mb-5 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
                    />
                    <label
                      htmlFor="formCheck"
                      className="form-check-label text-secondary"
                    >
                      <small>Remember Me</small>
                    </label>
                  </div>
                  <div className="forgot">
                    <small>
                      <a href="#">Forgot Password?</a>
                    </small>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <button onClick={handleSubmit} className="btn btn-lg btn-primary w-100 fs-6">
                    Sign In
                  </button>
                </div>
                <br />
                <div className="row">
                
                  <small>
                    Not a member?
                    <Link to="/signup">
                      <a href="#">Create account</a>
                    </Link>
                  </small>
                  
                </div>
              </div>
            </form>
          </div>
      </div>
    </>
  );
};

export default SignIn;