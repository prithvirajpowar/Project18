import React from 'react';
import '../Order.css'; // Import Bootstrap CSS

const OrderDetails = () => {
  return (
    <div className='container-order'>
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
              <div className="col">
                <h2>Order Details</h2>
                <h4>Total Orders</h4>
                <div className="card" style={{ width: '35.5rem', height: '12rem' }}>
                  <div className="card-body"></div>
                </div>
              </div>
              <div className="col">
                <h4>Past Orders</h4>
                <div className="card" style={{ width: '35.5rem', height: '12rem' }}>
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

export default OrderDetails;
