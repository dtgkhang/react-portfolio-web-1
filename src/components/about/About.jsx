import React from 'react'
import './about.css'
import portrait from '../../assets/dtgk-about.jpg'
import { FaAward } from 'react-icons/fa'
import { TbSchool } from 'react-icons/tb'
import { GiOpenFolder } from 'react-icons/gi'

const highlights = [
  {
    icon: <FaAward />,
    title: 'Professional impact',
    description: 'Delivering polished web features from discovery to production.'
  },
  {
    icon: <TbSchool />,
    title: 'FPT University alumnus',
    description: 'Software Engineering graduate with a strong engineering foundation.'
  },
  {
    icon: <GiOpenFolder />,
    title: 'Product-focused projects',
    description: 'Owning end-to-end builds for dashboards, marketing sites, and mobile-first apps.'
  }
]

const About = () => {
  return (
    <section id="about">
      <h5>Meet the person</h5>
      <h2>About Me</h2>
      <div className="container about__container reveal">
        <div className="about__media reveal" style={{ '--reveal-delay': '80ms' }}>
          <div className="about__media-frame">
            <img src={portrait} alt="Khang Đỗ smiling" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {highlights.map(({ icon, title, description }, index) => (
              <article
                key={title}
                className="about__card reveal"
                style={{ '--reveal-delay': `${index * 120}ms` }}
              >
                <span className="about__icon">{icon}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="about__copy reveal" style={{ '--reveal-delay': '160ms' }}>
            <p>
              I&apos;m Khang Đỗ, a front-end engineer focused on crafting resilient, human interfaces.
              After graduating from FPT University, I jumped straight into product teams—owning journeys from wireframe to launch,
              partnering with designers, and fine-tuning the last 1% that makes experiences feel effortless.
            </p>
            <p>
              Outside of shipping features, you&apos;ll find me exploring new design systems, experimenting with motion, and mentoring
              juniors on clean, maintainable React patterns.
            </p>
          </div>
          <div className="about__cta reveal" style={{ '--reveal-delay': '240ms' }}>
            <a href="#portfolio" className="btn">Explore selected work</a>
            <a href="#contact" className="btn btn-primary">Book a discovery call</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
