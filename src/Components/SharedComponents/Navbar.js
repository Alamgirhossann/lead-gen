import React from "react";
// import "./Style/style.css";
import logo from "../../images/logo- without BG.png";
import salesIcon from "../../images/Group 2875.png";
import marketingIcon from "../../images/Group 2876.png";
import telentIcon from "../../images/Group 2877.png";
import moreIcon from "../../images/Group 2878.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light nav-bg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img style={{ width: "200px" }} src={logo} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item me-4">
                <a class="nav-link active" aria-current="page" href="/whyus">
                  Why us
                </a>
              </li>
              <li class="nav-item dropdown me-4">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Use Cases
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item d-flex" href="/sales">
                      <div className="me-2">
                        <img src={salesIcon} alt="" />
                      </div>
                      <div>
                        Sales
                        <p>Convert your cold calls into hot prospects</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item d-flex" href="/marketing">
                      <div className="me-2">
                        <img src={marketingIcon} alt="" />
                      </div>
                      <div>
                        Marketing
                        <p>Grow your business and audience</p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item d-flex" href="/talentAquisition">
                      <div className="me-2">
                        <img src={telentIcon} alt="" />
                      </div>
                      <div>
                        Talent Accuisition
                        <p>Find the right fit for your team</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item d-flex" href="/muchMore">
                      <div className="me-2">
                        <img src={moreIcon} alt="" />
                      </div>
                      <div>
                        So Much More
                        <p>You ask, We provide</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" href="/pricing">
                  Pricing
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link" href="https://leadzen-dev.analystt.ai/login">
                  Log in
                </a>
              </li>
              <li class="nav-item me-4">
                <a class="nav-link started-btn px-4" href="https://tidycal.com/sonakshi">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
