import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import './footer.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#portfolio', label: 'Work' },
  { href: '#contact', label: 'Contact' }
]

const socials = [
  {
    href: 'https://www.linkedin.com/in/khang-do-b38456204/',
    icon: <BsLinkedin />,
    label: 'LinkedIn'
  },
  { href: 'https://instagram.com/dtgkhang', icon: <AiFillInstagram />, label: 'Instagram' },
  { href: 'https://www.facebook.com/khang.do.5623/', icon: <BsFacebook />, label: 'Facebook' }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer__inner reveal" style={{ '--reveal-delay': '120ms' }}>
        <div className="footer__brand">
          <span className="footer__logo">Khang Đỗ</span>
          <p>
            Front-end engineer partnering with product teams to ship interfaces that feel effortless and perform at scale.
          </p>
        </div>
        <ul className="footer__links">
          {links.map(({ href, label }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map(({ href, icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__note">© {currentYear} Khang Đỗ. Crafted with curiosity and caffeine.</div>
    </footer>
  )
}

export default Footer
