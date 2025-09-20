import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const projects = [
  {
    image: IMG1,
    title: 'CoinAirdrop.app',
    description:
      'Web3 growth platform built with Next.js where partners launch and track multi-chain airdrop campaigns in real time.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    live: 'https://coinairdrop.app',
    github: null,
    note: 'Case study available on request.'
  },
  {
    image: IMG2,
    title: 'LinkShopee',
    description:
      'Affiliate toolkit combining a Next.js dashboard with a Chrome extension so sellers can generate deep links and automate reporting.',
    stack: ['Next.js', 'Chrome Extension', 'Firebase', 'Zustand'],
    live: 'https://linkshopee.com',
    github: null,
    note: 'Product walkthrough scheduled with partners.'
  },
  {
    image: IMG3,
    title: 'AlphaTrans Logistics',
    description:
      'Internal operations suite that streamlines shipment intake, status tracking, and customer updates for AlphaTrans logistics teams.',
    stack: ['React', 'Ant Design', 'Node.js', 'PostgreSQL'],
    live: null,
    github: null,
    note: 'Internal enterprise tool—demo under NDA.'
  },
  {
    image: IMG4,
    title: 'Occo Social',
    description:
      'React Native social platform focused on communities and live events, shipping with real-time chat and content moderation tools.',
    stack: ['React Native', 'Expo', 'Firebase', 'Realtime Database'],
    live: null,
    github: null,
    note: 'Private beta—reach out for a TestFlight invite.'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Selected work</h5>
      <h2>Case Studies</h2>
      <div className="container portfolio__grid reveal">
        {projects.map(({ image, title, description, stack, live, github, note }, index) => (
          <article
            key={title}
            className="portfolio__card reveal"
            style={{ '--reveal-delay': `${index * 120}ms` }}
          >
            <div className="portfolio__media">
              <img src={image} alt={title} />
            </div>
            <div className="portfolio__body">
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="portfolio__stack">
                {stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="portfolio__actions">
                {live ? (
                  <a href={live} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View live
                  </a>
                ) : null}
                {github ? (
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                    Case study
                  </a>
                ) : note ? (
                  <span className="portfolio__placeholder">{note}</span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
