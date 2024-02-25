import React, {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../SignUp.css";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Added state for session


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     // Load the Google Sign-In API script
  //     await new Promise((resolve) => {
  //       const script = document.createElement("script");
  //       script.src = "https://apis.google.com/js/platform.js";
  //       script.onload = resolve;
  //       document.body.appendChild(script);
  //     });
  
  //     // Initialize the Google Sign-In API with your client ID
  //     await window.gapi.load("auth2", async () => {
  //       await window.gapi.auth2.init({
  //         client_id: "242718267072-driauk7gk8g7g3550gdu6ud8o2urf0tp.apps.googleusercontent.com",
  //       });
  
  //       // Sign in the user
  //       const auth2 = window.gapi.auth2.getAuthInstance();
  //       const googleUser = await auth2.signIn();
  
  //       const profile = googleUser.getBasicProfile();
  //       const googleEmail = profile.getEmail();
  
  //       console.log("Google Sign-In successful:", googleEmail);
  
  //       // You may want to send the Google email to your server for authentication
  //       // Example: axios.post('http://localhost:9540/google-auth', { email: googleEmail });
  //     });
  //   } catch (error) {
  //     console.error("Google Sign-In failed:", error);
  //   }
  // };


// <GoogleLogin
// onSuccess={(credentialResponse) => {
//   console.log(credentialResponse);
// }}
// onError={() => {
//   console.log('Login Failed');
// }}
// />

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:9540/signin',formData)
    .then(response => 
      { if(response.data.SignIn){
        setIsAuthenticated(true);
        navigate('/home')
      }
      else{
        alert("No Record")
      }
      console.log(response.data)
      })
    .catch(error => console.log(error));

    
    const newErrors = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with the form submission logic here
      console.log("Form submitted:", formData);
    }
  };
  
  const handleLogout = () => {
    // Clear session and navigate to login page
    setIsAuthenticated(false);
    Cookies.remove("authenticated");
    navigate("/signin");
  };

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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
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
                  <button className="btn btn-lg btn-primary w-100 fs-6">
                    Continue
                  </button>
                </div>
                <br />
                <div className="row">
                {isAuthenticated ? (
                  <small>
                    Welcome, user!{" "}
                    <button
                      className="link-button"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                    </small>
                ) : (
                  <small>
                    Not a member?
                    <Link to="/signup">
                      <a href="#">Create account</a>
                    </Link>
                  </small>
                   )}
                </div>
              </div>
            </form>
          </div>
      </div>
    </>
  );
};

export default SignIn;
