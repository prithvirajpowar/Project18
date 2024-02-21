import React from 'react';
import '../Dashboard.css'; // Import Bootstrap CSS

const Dashboard = () => {
  return (
    <div className='container-dashboard'>
      <div className="wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-sm-3 side-image">
              <div className="row menu">
                <div className="col-3">
                  <div className="card side-bar" style={{ borderColor: 'white' }}>
                    <img src="Rectangle 16.jpg" alt="Side" />
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

            <div className="col-sm-9 right">
              <div className="row details" style={{ padding: '20px' }}>
                <h3>Dashboard</h3>

                <div className="col-4">
                  <div className="card" style={{ width: '11rem', height: '9rem' }}>
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card" style={{ width: '11rem', height: '9rem' }}>
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-4">
                  <div className="card" style={{ width: '11rem', height: '9rem' }}>
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card" style={{ width: '17rem', height: '9rem' }}>
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card" style={{ width: '17rem', height: '9rem' }}>
                    <div className="card-body"></div>
                  </div>
                </div>

                <div className="col">
                  <div className="card" style={{ width: '35rem', height: '9rem' }}>
                    <div className="card-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
