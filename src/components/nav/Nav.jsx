import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BsInfoCircle />
      </a>
      <a href="#experience"
      onClick={() => setActiveNav("#experience")}
      className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a href="#services"
      onClick={() => setActiveNav("#services")}
      className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact"
      onClick={() => setActiveNav("#contact")}
      className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
