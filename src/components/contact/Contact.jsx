import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const channels = [
  {
    icon: <MdOutlineEmail />,
    title: 'Email',
    handle: 'dtgkhang99@gmail.com',
    href: 'mailto:dtgkhang99@gmail.com',
    cta: 'Send an email'
  },
  {
    icon: <BsMessenger />,
    title: 'Messenger',
    handle: 'Khang Đỗ',
    href: 'https://m.me/khang.do.5623',
    cta: 'Message on Messenger'
  },
  {
    icon: <FaTelegramPlane />,
    title: 'Telegram',
    handle: '@dtgk9',
    href: 'https://t.me/dtgk9',
    cta: 'Ping on Telegram'
  }
]

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_q99gr6a', 'template_o1n5t7m', form.current, 'XkMkLapwlOoeVrPO5')
      .then((result) => {
        console.log(result.text)
        if (form.current) {
          form.current.reset()
        }
      })
      .catch((error) => {
        console.log(error.text)
      })
  }

  return (
    <section id="contact">
      <h5>Work together</h5>
      <h2>Contact</h2>
      <div className="container contact__container reveal">
        <div className="contact__intro reveal" style={{ '--reveal-delay': '80ms' }}>
          <p>
            Have a product idea, need a fractional front-end partner, or want a quick audit of your current experience?
            Drop a note and I&apos;ll respond within two business days.
          </p>
        </div>
        <div className="contact__grid">
          <div className="contact__options">
            {channels.map(({ icon, title, handle, href, cta }, index) => (
              <article
                key={title}
                className="contact__card reveal"
                style={{ '--reveal-delay': `${index * 120}ms` }}
              >
                <span className="contact__icon">{icon}</span>
                <h3>{title}</h3>
                <p>{handle}</p>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {cta}
                </a>
              </article>
            ))}
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form reveal"
            style={{ '--reveal-delay': '220ms' }}
          >
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" placeholder="Your full name" required />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="How can I reach you?" required />
            <label htmlFor="message">Project details</label>
            <textarea id="message" name="message" rows="7" placeholder="Tell me about the challenge, timeline, and team." required />
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
