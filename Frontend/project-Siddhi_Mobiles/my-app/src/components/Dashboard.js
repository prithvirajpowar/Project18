import React from 'react';
import '../Dashboard.css'; // Import Bootstrap CSS

const Dashboard = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
  <div className="row border rounded-5 p-3 bg-white shadow box-area">
    <div className="col-md-3 rounded-4 d-flex  flex-column left-box">
      <div className="row">
        <div className="col-md-3">
          <div
            className="card side-bar"
            style={{ width: "15rem", border: "none" }}
          >
            <img
              src="images/Rectangle_16.jpg"
              className="card-img-top"
              alt="..."
              style={{ width: 225 }}
            />
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
    <div className="col-md-9 right-box">
      <div className="row details" style={{ padding: 20 }}>
        <h3>Dashboard</h3>
        <div className="col-4">
          <div className="card" style={{ width: "11rem", height: "7rem" }}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "11rem", height: "7rem" }}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-4">
          <div className="card" style={{ width: "11rem", height: "7rem" }}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-6" style={{ paddingTop: 20 }}>
          <div className="card" style={{ width: "17rem", height: "7rem" }}>
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-6" style={{ paddingTop: 20 }}>
          <div className="card" style={{ width: "17rem", height: "7rem" }}>
            <div className="card-body"></div>
          </div>
        </div>
        &nbsp;
        <div className="col">
          <div className="card" style={{ width: "35rem", height: "7rem" }}>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
};

export default Dashboard;
