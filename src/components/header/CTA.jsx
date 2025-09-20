import React from 'react'
import { HiOutlineArrowSmRight } from 'react-icons/hi'
import { FiArrowUpRight } from 'react-icons/fi'

const CTA = () => {
  return (
    <div className="hero__actions">
      <a href="#contact" className="btn btn-primary hero__action">
        <HiOutlineArrowSmRight aria-hidden="true" />
        <span>Start a project</span>
      </a>
      <a href="#portfolio" className="btn hero__action hero__action--ghost">
        <FiArrowUpRight aria-hidden="true" />
        <span>See recent work</span>
      </a>
    </div>
  )
}

export default CTA
