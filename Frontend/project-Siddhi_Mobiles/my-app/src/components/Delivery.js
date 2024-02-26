import React from 'react';
import '../Delivery.css'; // Import Bootstrap CSS
import Header1 from './Header1';
import { Link } from 'react-router-dom';

const Delivery = () => {
  return (
    <>
    <Header1></Header1>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="row border rounded-5 p-3 bg-white shadow box-area">
    <div className="col-md-3 rounded-4 d-flex  flex-column left-box">
      <div className="row">
        <div className="col-md-3">
          <div
            className="card side-bar"
            style={{ width: "12rem", border: "none"}}
          >
            <img
              src="images/logo.jpg"
              className="card-img-top"
              alt="logo"
              style={{ width: 225 }}
            />
            <ul className="list-group list-group-flush">
              <Link to='/dashboard'><li className="list-group-item">Dashboard</li></Link>
              <Link to='/inventory'><li className="list-group-item">Inventory</li></Link>
              <Link to='/account'><li className="list-group-item">Account</li></Link>
              <Link to='/orders'><li className="list-group-item">Order Details</li></Link>
              <Link to='/shops'><li className="list-group-item">Shop Details</li></Link>
              <Link to='/delivery'><li className="list-group-item">Delivery</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-9 right-box">
      <div className="row details" style={{ padding: 20 }}>
        <h3>Delivery</h3><br/>
        <h5>Order Placed</h5>
        <div className="col">
          <div className="card" style={{ width: "35.5rem", height: "7rem" }}>
            <div className="card-body"></div>
          </div>
        </div>&nbsp;
        <h5>On Transist</h5>
        <div className="col">
          <div className="card" style={{ width: "35.5rem", height: "7rem" }}>
            <div className="card-body"></div>
          </div>
        </div>&nbsp;
        <h5>Order Delivered</h5>
        <div className="col">
          <div className="card" style={{ width: "35.5rem", height: "7rem" }}>
            <div className="card-body"></div>
          </div>
        </div>
        </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Delivery;
