import { Link } from "react-router-dom";
import './Header.css';
function Header() {
  // return(<h1>Hello...!!This is the Header component</h1>)
  return (
    <div className="container-header">
      <div className="row">

        <div className="col-4">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-circle-png%2Fwhite-circle&psig=AOvVaw0g52fmvBOoaPBlEEzZSyc6&ust=1708001094781000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCcuIbuqoQDFQAAAAAdAAAAABAH" alt=""></img>
          <h3>Siddhi Mobiles</h3>
        </div>
        
    <div className="col-4">
      <ul class="nav justify-content-center">
        <li className="nav-item" >
          <Link className="nav-link active" to="/" >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mobiles">
            Mobiles
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/accessories">
            Accessories
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/tablets">
            Tablets
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/orders">
            Orders
          </Link>
        </li>
      </ul>
    </div>

    <div className="col-4">
      <ul class="nav justify-content-center">
        <li className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </li>
        <li className="nav-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
          </svg>
        </li>
        <li className="nav-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
        </li>
      </ul>
    </div>
      </div>
      
    
  </div>


  );
}
export default Header;
