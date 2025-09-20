import React, { useEffect, useState } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiStackLine } from 'react-icons/ri'

const links = [
  { href: '#home', label: 'Home', Icon: AiOutlineHome },
  { href: '#about', label: 'About', Icon: BsInfoCircle },
  { href: '#experience', label: 'Experience', Icon: RiStackLine },
  { href: '#portfolio', label: 'Work', Icon: BiBook },
  { href: '#contact', label: 'Contact', Icon: BiMessageSquareDetail }
]

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  const [isOpen, setIsOpen] = useState(false)
  const [isElevated, setIsElevated] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  const handleNavigate = (href) => {
    setActiveNav(href)
    setIsOpen(false)
  }

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const onScroll = () => {
      setIsElevated(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection?.target?.id) {
          setActiveNav(`#${visibleSection.target.id}`)
        }
      },
      {
        threshold: [0.35, 0.55],
        rootMargin: '-20% 0px -40% 0px'
      }
    )

    const targets = links
      .map((link) => link.href.replace('#', ''))
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className={`${isOpen ? 'top-nav top-nav--open' : 'top-nav'}${isElevated ? ' top-nav--scrolled' : ''}`}>
        <div className="container top-nav__inner">
          <a href="#home" className="top-nav__brand" onClick={() => handleNavigate('#home')}>
            Khang Đỗ
          </a>
          <nav className={isOpen ? 'top-nav__links is-open' : 'top-nav__links'}>
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => handleNavigate(href)}
                className={activeNav === href ? 'is-active' : ''}
                aria-current={activeNav === href ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-primary top-nav__cta">
            Let&apos;s talk
          </a>
          <button
            type="button"
            className={isOpen ? 'top-nav__menu is-open' : 'top-nav__menu'}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav className="bottom-nav" aria-label="Primary mobile navigation">
        {links.map(({ href, label, Icon }) => (
          <a
            key={href}
            href={href}
            onClick={() => handleNavigate(href)}
            className={activeNav === href ? 'bottom-nav__link is-active' : 'bottom-nav__link'}
            aria-label={label}
            aria-current={activeNav === href ? 'page' : undefined}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}

export default Nav
