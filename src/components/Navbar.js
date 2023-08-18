import React, { useContext } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext"; 

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navmain">
      <div className="navbar">
        <h1>Welcome</h1>
        
        <div className="Right-navbar">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="#">SCIENCE</Link>
          </li>
          <li>
            <Link to="#">TECHNOLOGY</Link>
          </li>
          <li>
            <Link to="#">CINEMA</Link>
          </li>
          <li>
            <Link to="#">DESIGN</Link>
          </li>
          <li>
            <Link to="#">FOOD</Link>
          </li>
          <span className="write">
            <li>
              <Link to="/Write" className="write-link">Write</Link>
            </li>
          </span>
        </div>
       
        <div className="font-user">
          <FontAwesomeIcon icon={faUser} />
          {currentUser ? (
            <span>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </span>
          ) : (
            <span>
              <Link to='/Login'>Login/User</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
