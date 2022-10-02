import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import './footer.css'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DTGK</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Psortfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/khang-do-b38456204/" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com/dtgkhang"><AiFillInstagram/></a>
        <a href="https://www.facebook.com/khang.do.5623/"><BsFacebook/></a>
      </div>
    </footer>
  )
}

export default footer