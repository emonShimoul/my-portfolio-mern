import "./Header.css";
import logo from "../../assets/images/myself3.jpg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobActive, setIsMobActive] = useState("false");
  const handleToggle = () => {
    setIsMobActive(!isMobActive);
  };

  return (
    <>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link className="logo-text" to="/">
              Emon
            </Link>
          </div>
          <button className="toggler-menu" onClick={handleToggle}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`header-left menu-open ${isMobActive ? null : "active"}`}>
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src={logo} title="" alt="" />
              </div>
              <h5>Emon</h5>
            </div>
          </div>
          <ul className="nav nav-menu" id="pp-menu">
            <li className="list" data-menuanchor="home">
              <NavLink className="nav-link" to="/">
                <i className="ti-home"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="list" data-menuanchor="about">
              <NavLink className="nav-link" to="/about">
                <i className="ti-id-badge"></i>
                <span>About Me</span>
              </NavLink>
            </li>
            <li className="list" data-menuanchor="services">
              <NavLink className="nav-link" to="/services">
                <i className="ti-panel"></i>
                <span>Services</span>
              </NavLink>
            </li>
            <li className="list" data-menuanchor="work">
              <NavLink className="nav-link" to="/portfolio">
                <i className="ti-bookmark-alt"></i>
                <span>Portfolio</span>
              </NavLink>
            </li>
            <li className="list blog" data-menuanchor="blogs">
              <NavLink className="nav-link" to="blogs">
                <i className="ti-layout-media-overlay-alt-2"></i>
                <span>Blogs</span>
              </NavLink>
            </li>
            <li className="list" data-menuanchor="contactus">
              <NavLink className="nav-link" to="/contactme">
                <i className="ti-map-alt"></i>
                <span>Contact Me</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav justify-content-center social-icons">
          <Link to="https://www.facebook.com/emon.shimoul" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="https://github.com/emonShimoul" target="_blank">
            <i className="fab fa-github"></i>
          </Link>
          <Link to="https://www.instagram.com/emon_shimul/" target="_blank">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/shimoul-uddin-emon-524535159/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
