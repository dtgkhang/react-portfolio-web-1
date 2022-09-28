import React from "react";
import "./about.css";
import ME from "../../assets/dtgk-about.jpg";
import { FaAward } from "react-icons/fa";
import { TbSchool } from "react-icons/tb";
import { GiOpenFolder } from "react-icons/gi";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3rd student</small>
            </article>
            <article className="about__card">
              <TbSchool className="about__icon" />
              <h5>GPA</h5>
              <small>3.3+ AVG</small>
            </article>
            <article className="about__card">
              <GiOpenFolder className="about__icon" />
              <h5>Project</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            inventore dolores delectus maiores enim, assumenda eum numquam
            officiis tempora sit quasi, alias suscipit. Ipsum itaque tempore,
            veritatis facere nam est!
          </p>
         <a href="#contact" className="btn btn-primary ">Let's Talk</a> 
        </div>
      </div>
    </section>
  );
};

export default About;
