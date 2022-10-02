import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio <br /> </h2>

      <div className="container portfo__container">
        <article className="portfolio__item">
          <div className="portfo__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfolio title - Coming Soon</h3>
          <div className="portfo__item-cta">
            <a href="#" className="btn" target="_blank">
              Gtihub
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfo__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Portfolio title - Coming Soon</h3>
          <div className="portfo__item-cta">
            <a href="#" className="btn" target="_blank">
              Gtihub
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfo__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Portfolio title - Coming Soon</h3>
          <div className="portfo__item-cta">
            <a href="#" className="btn" target="_blank">
              Gtihub
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfo__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Portfolio title - Coming Soon</h3>
          <div className="portfo__item-cta">
            <a href="#" className="btn" target="_blank">
              Gtihub
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfo__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Portfolio title - Coming Soon</h3>
          <div className="portfo__item-cta">
            <a href="#" className="btn" target="_blank">
              Gtihub
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfo__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Portfolio title - Coming Soon</h3>
          <div className="portfo__item-cta">
            <a href="#" className="btn" target="_blank">
              Gtihub
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
