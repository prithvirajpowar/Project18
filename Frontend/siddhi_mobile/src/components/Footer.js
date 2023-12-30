import React from "react";

export default function Footer() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <h3>Newsletter</h3>
              <input type="text"></input>
              <button>Send</button>
            </div>

            <div className="col-9">
              <div className="row">
                <div className="col-2">
                  <h3>About</h3>
                  <ul>
                    <li>SignIn/Up</li>
                    <li>Track Order</li>
                    <li>About us</li>
                    <li>Leadership</li>
                  </ul>
                </div>

                <div className="col-2">
                  <h3>Categories</h3>
                  <ul>
                    <li>Mobiles</li>
                    <li>Tablets</li>
                    <li>Accessories</li>
                    <li>Smart Tv's</li>
                  </ul>
                </div>

                <div className="col-2">
                  <h3>Policies</h3>
                  <ul>
                    <li>Privacy Policy </li>
                    <li>Payment Policy</li>
                    <li>Return and Refund Policy</li>
                    <li>Shipping Policy</li>
                    <li>Terms and Conditions</li>
                  </ul>
                </div>

                <div className="col-2">
                  <h3>Work with Us</h3>
                  <ul>
                    <li>Privacy Policy </li>
                    <li>Payment Policy</li>
                    <li>Return and Refund Policy</li>
                    <li>Shipping Policy</li>
                    <li>Terms and Conditions</li>
                  </ul>
                </div>

                <div className="col-2">
                  <h3>Follow Us</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">

         <h6>Mumbai Pune  Nashik  Aurangabad  Kolhapur  Sangli  Satara Ahmednagar Solapur Latur Osmanabad Ratnagiri Sindhudurg  NorthGoa  SouthGoa  Beed  Thane Dhule</h6>
        
        </div>
      </div>
    </nav>
  );
}
