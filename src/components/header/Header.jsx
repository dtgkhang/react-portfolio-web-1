import React from 'react'
import './header.css'
import CTA from './CTA'
import DTGK from '../../assets/dtgk.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Khang Do</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA/>
        <HeaderSocial/> 
        <div className="me">
          <img src={DTGK} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Sroll Down</a>
      </div>
    </header>    
  )
}

export default Header