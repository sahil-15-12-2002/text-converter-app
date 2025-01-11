import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
         <div className="collapse navbar-collapse" id="navbarSuppottedContent">
         <ul className="navbar-nav me-auto mb-2 lg-0">
            
            <li className="nav-item">
              <Link className="nav-link active" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active"  to="/FormText">FormText</Link>
            </li>
          </ul>
         </div>
        </div>
       </nav> 
      
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,

};
