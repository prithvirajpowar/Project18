import React from 'react'
import '../Account.css'

export default function Account() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="row">
              <div class="card" >
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><img src="./Rectangle.png" class="img-fluid" alt="Siddhi Mobiles" />   </li>

                </ul>
              </div>
            </div>

            <div className="row">
              <div class="card text-center" >
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><b>Dashboard</b></li>
                  <li class="list-group-item"><b>Inventory</b></li>
                  <li class="list-group-item"><b>Account</b></li>
                  <li class="list-group-item"><b>Order Details</b></li>
                  <li class="list-group-item"><b>Store Details</b></li>
                  <li class="list-group-item"><b>Delivery</b></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="col-xl-8">

            <div class="card mb-3 "  >
              <div class="row g-0 profile">
                <h1>Account Details</h1>
                <div class="col-md-4 ">
                  <img src="./Rectangle.png" class="img-fluid rounded-start profile-img" alt="Profile photo" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">Owner Name</li>
                  <li class="list-group-item">Shop Name</li>
                  <li class="list-group-item">Shop ID:</li>
                  <li class="list-group-item">Email Id</li>
                  <li class="list-group-item">address</li>
                  
                </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
