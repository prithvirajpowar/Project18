import React from 'react'

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Siddhi Mobile</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accessories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Earphone</a></li>
            <li><a class="dropdown-item" href="#">Charger</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mobiles
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">IPhone</a></li>
            <li><a class="dropdown-item" href="#">Samsung</a></li>
            <li><a class="dropdown-item" href="#">OnePlus</a></li>
            <li><a class="dropdown-item" href="#">Xiaomi</a></li>
            <li><a class="dropdown-item" href="#">Oppo</a></li>
            <li><a class="dropdown-item" href="#">Vivo</a></li>
            <li><hr class="dropdown-divider"></hr></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Orders
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Completed</a></li>
            <li><a class="dropdown-item" href="#">current</a></li>
            <li><hr class="dropdown-divider"></hr></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  )
};
