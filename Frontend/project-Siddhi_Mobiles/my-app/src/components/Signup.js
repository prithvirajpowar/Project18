import React, { useState } from 'react';
import '../SignUp.css';
import axios from 'axios';


export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER', 
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      axios.post('http://localhost:9540/regUser', formData)
        .then(response => {
          console.log('Form submitted successfully:', response.data);
        })
        .catch(error => {
          console.error('There was an error submitting the form:', error);
          if (error.response && error.response.data) {
            setErrors({ form: error.response.data.message });
          }
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>    
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-6 right-box">
        <form onSubmit={handleSubmit}>
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Sign Up</h2>
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Name"
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Password"
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <div className="form-group mb-3">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="form-select"
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
