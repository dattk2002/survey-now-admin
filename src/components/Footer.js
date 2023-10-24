import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <footer>
          <div class="footer">
            <div class="row">
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
              <a href="#">
                <i class="fa fa-instagram"></i>
              </a>
            </div>

            <div class="row">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Create Survey</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Sign In</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>

            <div class="row">
              EXE201 Dev Team Copyright © 2023 Survey Now - All rights reserved |
              Contact us: surveynow@gmail.com
            </div>
            
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
