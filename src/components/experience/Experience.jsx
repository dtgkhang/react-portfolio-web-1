import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container exp__container">
        <div className="exp__frontend">
          <div className="exp__content">
            <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Internmediate</small>
              </div>
              
            </article>
            <article className='exp__details'>
            <BsPatchCheckFill className='exp__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Internmediate</small>
              </div>
            </article>
            <article className='exp__details'>
            <BsPatchCheckFill className='exp__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Internmediate</small>
              </div>
            </article>
            <article className='exp__details'>
            <BsPatchCheckFill className='exp__details-icon'/>
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Internmediate</small>
              </div>
            </article>
            <article className='exp__details'>
            <BsPatchCheckFill className='exp__details-icon'/>
              <div>
              <h4>React-Native</h4>
              <small className='text-light'>Internmediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp__backend">
          <div className="exp__content">
          <article className='exp__details'>
          
          <BsPatchCheckFill className='exp__details-icon'/>
                <div>
                <h4>Java</h4>
                <small className='text-light'>Internmediate</small>
                </div>
              </article>
              <article className='exp__details'>
              <BsPatchCheckFill className='exp__details-icon'/>
                <div>
                <h4>SQL</h4>
                <small className='text-light'>Internmediate</small>
                </div>
              </article>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Experience