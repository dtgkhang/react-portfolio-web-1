import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const skillGroups = [
  {
    title: 'Front-end craft',
    items: [
      {
        name: 'React & TypeScript',
        description: 'Component-driven architecture, hooks best practices, and data fetching strategies.'
      },
      {
        name: 'Responsive systems',
        description: 'Designing adaptive layouts, motion, and micro-interactions for web and mobile.'
      },
      {
        name: 'State management',
        description: 'Modern state patterns with Zustand, Redux Toolkit, and server state with React Query.'
      }
    ]
  },
  {
    title: 'Product thinking',
    items: [
      {
        name: 'Design collaboration',
        description: 'Translating Figma into clean code, maintaining shared libraries, and iterating with designers.'
      },
      {
        name: 'Accessibility & performance',
        description: 'Auditing experiences, improving Core Web Vitals, and ensuring inclusive interactions.'
      },
      {
        name: 'User-centered experiments',
        description: 'A/B testing, analytics instrumentation, and rapid prototyping for stakeholder buy-in.'
      }
    ]
  },
  {
    title: 'Tooling & delivery',
    items: [
      {
        name: 'CI/CD & quality',
        description: 'Automated testing suites, Git workflows, and shipping confidently with feature flags.'
      },
      {
        name: 'API integration',
        description: 'RESTful and GraphQL integrations, schema modeling, and contract testing.'
      },
      {
        name: 'Documentation & mentoring',
        description: 'Educating teams through playbooks, review practices, and pairing sessions.'
      }
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills &amp; mindset</h5>
      <h2>Experience</h2>
      <div className="container experience__container reveal">
        {skillGroups.map(({ title, items }, index) => (
          <article
            key={title}
            className="experience__card reveal"
            style={{ '--reveal-delay': `${index * 140}ms` }}
          >
            <h3>{title}</h3>
            <ul>
              {items.map(({ name, description }) => (
                <li key={name}>
                  <span className="experience__icon">
                    <BsPatchCheckFill />
                  </span>
                  <div>
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience
