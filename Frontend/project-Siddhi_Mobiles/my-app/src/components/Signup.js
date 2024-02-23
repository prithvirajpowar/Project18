// import React from 'react'
// import { Link } from 'react-router-dom';
// import '../SignUp.css';

// export default function SignUp() {
//   return (
//     <>
//       <div className="container d-flex justify-content-center align-items-center min-vh-100">
//   <div className="row border rounded-5 p-3 bg-white shadow box-area">
//     <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
      
//     </div>
//     <div className="col-md-6 right-box">
//       <form>
//         <div className="row align-items-center">
//           <div className="header-text mb-4">
//             <h2>SignUp</h2>
//           </div>
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               className="form-control form-control-lg bg-light fs-6"
//               placeholder="Name"
//               required=""
//             />
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
//             /><br></br>
//             <small className="form-text">
//               <p>
//                 By Signup, you agree to our
//                 <a href="#!">Terms of Service</a>
//                 &amp;
//                 <a href="#!">Privacy Policy</a>
//               </p>
//             </small>
//           </div>
//           {/* <div className="input-group mb-5 d-flex justify-content-between">
//           </div> */}
//           <div className="input-group mb-3">
//             <button className="btn btn-lg btn-primary w-100 fs-6">
//               Sign Up
//             </button>
//           </div>
//           <div className="input-group mb-3">
//             <button className="btn btn-lg btn-light w-100 fs-6">
//               <img
//                 src="../images/google.png"
//                 style={{ width: 20 }}
//                 className="me-2"
//               />
//               <small>Sign In with Google</small>
//             </button>
//           </div>
//           <div className="row">
//             <small>
//               Already have a account? <Link to='/signin'><a href="#">Log in here</a></Link>
//             </small>
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>

//     </>
//   )
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../SignUp.css';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
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
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    // Password validation
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with the form submission logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="col-md-6 right-box">
            <form onSubmit={handleSubmit}>
              <div className="row align-items-center">
                <div className="header-text mb-4">
                  <h2>Sign-Up</h2>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-control form-control-lg bg-light fs-6 ${
                      errors.name ? 'is-invalid' : ''
                    }`}
                    placeholder="Name"
                    required=""
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control form-control-lg bg-light fs-6 ${
                      errors.email ? 'is-invalid' : ''
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
                      errors.password ? 'is-invalid' : ''
                    }`}
                    placeholder="Password"
                    required=""
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <small className="form-text">
                    <p>
                      By Signup, you agree to our
                      <a href="#!">Terms of Service</a>
                      &amp;
                      <a href="#!">Privacy Policy</a>
                    </p>
                  </small>
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-primary w-100 fs-6">
                    Sign Up
                  </button>
                </div>
                <div className="input-group mb-3">
                  <button className="btn btn-lg btn-light w-100 fs-6">
                    <img
                      src="../images/google.png"
                      style={{ width: 20 }}
                      className="me-2"
                    />
                    <small>Sign In with Google</small>
                  </button>
                </div>
                <div className="row">
                  <small>
                    Already have an account?{' '}
                    <Link to="/signin">
                      <a href="#">Log in here</a>
                    </Link>
                  </small>
                </div>
              </div>
            </form>
          </div>
        </div>
    </>
  );
}
