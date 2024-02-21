import React from 'react'

export default function Account() {
  return (
    <div className='container-account'>
       <div className="wrapper">
    <div className="container main">
      <div className="row">
        <div className="col-md-3 side-image">
          <div className="row menu">
            <div className="col-3">
              <div className="card side-bar" style={{ borderColor: "white" }}>
                <img src="Rectangle 16.jpg" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Dashboard</li>
                  <li className="list-group-item">Inventory</li>
                  <li className="list-group-item">Account</li>
                  <li className="list-group-item">Order Details</li>
                  <li className="list-group-item">Shop Details</li>
                  <li className="list-group-item">Delivery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 right">
          <div className="head">
            <h3>Account Details</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              fill="currentColor"
              className="bi bi-camera"
              viewBox="0 0 16 16"
            >
              <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z" />
              <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
            </svg>
          </div>
          <div className="card1" style={{ width: "18rem" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Owner Name:</li>
              <li className="list-group-item">Shop Name:</li>
              <li className="list-group-item">Shop ID:</li>
              <li className="list-group-item">Email Id:</li>
              <li className="list-group-item">Address:</li>
            </ul>
            <br />
            <div className="input-field">
              <button type="button" className="btn btn-dark btn-lg">
                 Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </div>
  )
}
