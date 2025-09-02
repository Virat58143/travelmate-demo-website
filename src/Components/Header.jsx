import { useState } from "react";
import { Link } from "react-router-dom";
import "../page-style/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // toggle state

  return (
    <>
      <header>
        <nav>
          <div className="logo">TravelMate</div>

          {/* Hamburger icon */}
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>

          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Destinations">Destination</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
