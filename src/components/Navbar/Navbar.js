import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { status, handleLogOut } = useContext(UserContext);

  const renderLoggedOutView = () => {
    return (
      <>
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={() => setActive(!active)}
        >
          <FontAwesomeIcon icon="bars" color="white" size="lg" />
        </span>
        <Link to="/" onClick={() => setActive(false)}>
          <h1>TrApp</h1>
        </Link>
        <ul className="main-nav" id={active ? 'active' : null}>
          <li onClick={() => setActive(false)}>
            <Link to="/signup" className="nav-links">
              Sign Up
            </Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/login" className="nav-links">
              Log In
            </Link>
          </li>
        </ul>
      </>
    );
  };

  const renderLoggedInView = () => {
    return (
      <>
        <span
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={() => setActive(!active)}
        >
          <FontAwesomeIcon icon="bars" color="white" size="lg" />
        </span>
        <Link className="nav-logo" to="/" onClick={() => setActive(false)}>
          <h1>TrApp</h1>
        </Link>
        <ul className="main-nav" id={active ? 'active' : null}>
          <li onClick={() => setActive(false)}>
            <Link to="/signup" className="nav-links">
              Dashboard
            </Link>
          </li>
          <li onClick={() => setActive(false)}>
            <Link to="/newjob" className="nav-links">
              New Job
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-links" onClick={() => handleLogOut()}>
              Logout
            </Link>
          </li>
        </ul>
      </>
    );
  };

  return (
    <nav className="navbar">
      {status ? renderLoggedInView() : renderLoggedOutView()}
    </nav>
  );
};

export default Navbar;
