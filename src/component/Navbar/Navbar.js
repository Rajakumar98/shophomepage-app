import React from "react";
import './Navbar.css'

const navbar = () => {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
         <a className="navbar-brand" href="#">
            {" "}
            Home Page{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New Arivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-outline-dark">
            Cart 
        </button>
        </nav>
        </div>
  );
};

export default navbar;