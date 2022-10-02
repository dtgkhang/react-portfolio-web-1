import React from "react";
import "./header.css";
import CTA from "./CTA";
import DTGK from "../../assets/dtgk3.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <div class="wrapper">
          <ul class="dynamic-txts">
            <li>
              <span>Khang Do</span>
            </li>
            
          </ul>
          
        </div>
              <h5>Front-end Developer</h5>
          
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={DTGK} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Sroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
