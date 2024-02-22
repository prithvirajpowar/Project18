// import React from 'react';
// import '../SignUp.css';
// import { Link } from 'react-router-dom';

// const SignIn = () => {
//   return (
//     <>
//      <div className="container d-flex justify-content-center align-items-center min-vh-100">
//   <div className="row border rounded-5 p-3 bg-white shadow box-area">
//     <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">

//     </div>
//     <div className="col-md-6 right-box">
//       <form>
//         <div className="row align-items-center">
//           <div className="header-text mb-4">
//             <h2>SignIn</h2>
//           </div>
//           <div className="input-group mb-3">
//             <button className="btn btn-lg btn-light w-100 fs-6">
//               <img
//                 src="../src/images/google.png"
//                 style={{ width: 20 }}
//                 className="me-2"
//               />
//               <small>Sign In with Google</small>
//             </button>
//           </div>
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               className="form-control form-control-lg bg-light fs-6"
//               placeholder="Email address"
//               required=""
//             />
//           </div>
//           <div className="input-group mb-1">
//             <input
//               type="password"
//               className="form-control form-control-lg bg-light fs-6"
//               placeholder="Password"
//               required=""
//             />
//           </div>
//           <div className="input-group mb-5 d-flex justify-content-between">
//             <div className="form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="formCheck"
//               />
//               <label
//                 htmlFor="formCheck"
//                 className="form-check-label text-secondary"
//               >
//                 <small>Remember Me</small>
//               </label>
//             </div>
//             <div className="forgot">
//               <small>
//                 <a href="#">Forgot Password?</a>
//               </small>
//             </div>
//           </div>
//           <div className="input-group mb-3">
//             <button className="btn btn-lg btn-primary w-100 fs-6">
//               Continue
//             </button>
//           </div>
//           <br />
//           <div className="row">
//             <small>
//               Not a member? <Link to='/signup'><a href="#">Create account</a></Link>
//             </small>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>

//     </>

//   );
// };

// export default SignIn;

import React, { useState } from "react";
import "../SignUp.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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

  const handleSubmit = (e) => {
    e.preventDefault();

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

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="row border rounded-5 p-3 bg-white shadow box-area">
          <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
            <div class="featured-image">
              <img src="/images/oneplus.webp" class="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 right-box">
            <form onSubmit={handleSubmit}>
              <div className="row align-items-center">
                <div className="header-text mb-4">
                  <h2>SignIn</h2>
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
      </div>
    </>
  );
};

export default SignIn;
