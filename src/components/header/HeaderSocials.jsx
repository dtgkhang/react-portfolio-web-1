import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'

const socials = [
  {
    href: 'https://www.linkedin.com/in/khang-do-b38456204/',
    icon: <BsLinkedin />,
    label: 'LinkedIn'
  },
  {
    href: 'https://github.com/',
    icon: <FaGithubSquare />,
    label: 'GitHub'
  },
  {
    href: 'https://www.facebook.com/khang.do.5623/',
    icon: <BsFacebook />,
    label: 'Facebook'
  }
]

const HeaderSocials = () => {
  return (
    <div className="hero__socials reveal reveal--instant">
      <span>Let&apos;s connect</span>
      <div className="hero__socials-links">
        {socials.map(({ href, icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default HeaderSocials
