import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../page-style/Footer.css";


const Footer = ()=>{

    return(
        <>

            {/* Footer Section */}
                  <footer className="footer">
                    <div className="footer-container">
            
                      {/* Brand / About */}
                      <div className="footer-box">
                        <h3 className="footer-logo">TravelMate</h3>
                        <p>
                          Your trusted partner for extraordinary travel experiences since 2015.
                        </p>
                      </div>
            
                      {/* Quick Links */}
                      <div className="footer-box">
                        <h4>Quick Links</h4>
                        <ul>
                          <li><Link to="/Home">Home</Link></li>
                          <li><Link to="/About">About</Link></li>
                          <li><Link to="/Destinations">Destinations</Link></li>
                          <li><Link to="/Contact">Contact</Link></li>
                        </ul>
                      </div>
            
                      {/* Contact Info */}
                      <div className="footer-box">
                        <h4>Contact</h4>
                        <p><FaMapMarkedAlt /> 455 West Orchard Street, NC 280867</p>
                        <p><FaPhone /> +088 (246) 642-27-10</p>
                        <p><FaEnvelope /> exploreworld@gmail.com</p>
                      </div>
            
                      {/* Social Links */}
                      <div className="footer-box">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                          <a href="#"><FaInstagram /></a>
                          <a href="#"><FaTwitter /></a>
                          <a href="#"><FaLinkedin/></a>
                          <a href="#"><FaFacebook /></a>
                        </div>
                      </div>
            
                    </div>
            
                    <div className="footer-bottom">
                      <p>© {new Date().getFullYear()} Explore World Tourism. All rights reserved.</p>
                    </div>
                  </footer>
        </>
    )
};

export default Footer;