import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import "../Header.css";
function Header() {
	return (
		<nav className="navbar">
			<div className="image-container">
				<img className="image" src="/img2.jpg" alt="Logo" />
			</div>
			<ul className="nav-list">
				<li className="nav-item">
					<Link className="nav-link active" to="/home">
						Home
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link active" to="/mobiles">
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
					<Link className="nav-link active" to="/SmartTv">
						SmartTv
					</Link>
				</li>
			</ul>
			<div className="icons">
				<FaShoppingCart className="icon" />
				<FaHeart className="icon" />
				<FaUser className="icon" />
			</div>
		</nav>
	);
}
export default Header;
