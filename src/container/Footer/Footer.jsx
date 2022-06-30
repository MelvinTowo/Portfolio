import React from 'react'
import { useState } from 'react'
import { images } from '../../constants'
import { AppWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message:''});
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData; // process of structuring. Pulling data from the above states

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true)
    const contact = {
      _type: 'contact', 
      name: name,
      email: email,
      message: message, 
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setisFormSubmitted(true);
      })
  }

  
  return (
    <>
      <h2 className="head-text">Chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:melvintowo@gmail.com" className="p-text">melvintowo@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (214) 649-1046" className="p-text">+1 (214) 649-1046</a>
        </div>
      </div>
      {!isFormSubmitted ? 
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput}></input>
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your email" name="email" value={email} onChange={handleChangeInput}></input>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send'}</button>
        </div>
        : <div>
            <h3 className="head-text">Thank you for getting intouch with me</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(Footer, 'contact')