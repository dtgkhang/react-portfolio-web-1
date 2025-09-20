import React from 'react'
import './header.css'
import CTA from './CTA'
import portrait from '../../assets/dtgk3.png'
import HeaderSocial from './HeaderSocials'

const heroTags = ['Next.js platforms', 'Chrome extensions', 'React Native apps']

const heroStats = [
  {
    value: '2+',
    label: 'Years crafting front-end experiences'
  },
  {
    value: '10+',
    label: 'Product launches and experiments'
  },
  {
    value: '3',
    label: 'Cross-functional teams partnered with'
  }
]

const Header = () => {
  return (
    <header className="hero" id="home">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="container hero__container">
        <div className="hero__content reveal">
          <span className="hero__eyebrow">Khang Đỗ · Front-end engineer</span>
          <h1 className="hero__title">Designing resilient interface systems for fast-moving teams.</h1>
          <p className="hero__description">
            I partner with growth teams to launch revenue-focused products like CoinAirdrop.app, LinkShopee, and Occo.
            From data-heavy dashboards to mobile social experiences, I turn fuzzy ideas into measurable outcomes with purpose-built
            React and React Native stacks.
          </p>
          <CTA />
          <div className="hero__tags">
            {heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="hero__media reveal">
          <div className="hero__panel">
            <div className="hero__photo">
              <img src={portrait} alt="Portrait of Khang Đỗ" />
              <span className="hero__status">Available for product collaborations</span>
            </div>
            <div className="hero__panel-note">
              Focus areas: SaaS dashboards, marketing launches, and cross-platform apps.
            </div>
          </div>

          <div className="hero__metrics">
            {heroStats.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>

          <HeaderSocial />
        </div>
      </div>
    </header>
  )
}

export default Header
