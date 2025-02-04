import React from "react";
import "./Footer.css";
import logo from "../../img/mlh-prep.png";

const Footer = () => {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Weather<span>App</span>
          </h3>

          <p class="footer-company-name">MLH Pod.js © 2022</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span></span> Want to contribute?
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>
              <span>Feel free to raise an issue on Github.</span>
            </p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="https://github.com/MLH-Fellowship/prep-project-22.JUL.PREP.3">
                Github Link
              </a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>Team Members</span>
            Sanjay Singh Rajpoot, Liuba, Himanshu Thakur, Chidera Innocent,
            Shehab Adel, A.S.L.Manasa, Somaditya Singh, Saswat Samal, Indira,
            Julian Willis,Sadiq Babalola, Elmar, Vy Nguyen, Di Wu
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
