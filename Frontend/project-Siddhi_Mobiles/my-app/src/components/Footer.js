import "../Footer.css";

function Footer() {
	// return(<h1>Hello...!!This is the Footer component</h1>)
	return (
		<div className="footer">
			<div className="footer-content">
				<div className="footer-section">
					<h6>Account</h6>
					<ul>
						<li>Sign in/ Sign Up</li>
						<li>Track Order</li>
						<li>About Us</li>
						<li>Leadership</li>
					</ul>
				</div>

				<div className="footer-section">
					<h6>Categories</h6>
					<ul>
						<li>Mobiles</li>
						<li>Tablets</li>
						<li>Accessories</li>
						<li>Smart TV's</li>
					</ul>
				</div>

				<div className="footer-section">
					<h6>Policies</h6>
					<ul>
						<li>Privacy Policy</li>
						<li>Payment Policy</li>
						<li>Return & Refund Policy</li>
						<li>Terms & Conditions</li>
					</ul>
				</div>

				<div className="footer-section">
					<h6>Work with us</h6>
					<ul>
						<li>Siddhi Mobiles</li>
						<li>Service Centre</li>
					</ul>
				</div>

				<div className="footer-section">
					<h6>Newsletter</h6>
					<div className="newsletter">
						<input type="text" placeholder="Enter your email" />
						<button>Send</button>
					</div>
					<div className="footer-image">
						<img src="/img2.jpg" alt="Newsletter" />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Footer;
