import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa' 
import {BsFacebook} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/khang-do-b38456204/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/"><FaGithubSquare/></a>
        <a href="https://www.facebook.com/khang.do.5623/"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials