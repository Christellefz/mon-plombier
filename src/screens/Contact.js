import './Contact.css'

import React, { useState } from 'react'

import Map from '../components/Map.js'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'

// import Map from '../components/Map'

const Contact = () => {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    //init('user_iVVjto43c3CxPjXPNC9Me')
    emailjs
      .send(
        'service_cm4blte',
        'template_ao182af',
        {
          name,
          company,
          phone,
          email,
          message
        },
        'user_iVVjto43c3CxPjXPNC9Me'
      )
      .then(res => {
        console.log('success !', res.status)
        setName('')
        setCompany('')
        setPhone('')
        setEmail('')
        setMessage('')
      })
      .catch(err => {
        document.querySelector('.form-message').innerHTML =
          "Une erreur s'est produite, veuillez réessayer. " + err
      })
  }

  return (
    <div className='contactMapContainer'>
      <div className='contactContainer'>
        <form className='contact-form'>
          <h2>Contactez-nous</h2>
          <div className='form-content'>
            <input
              type='text'
              id='name'
              name='name'
              onChange={e => setName(e.target.value)}
              placeholder='nom *'
              value={name}
              autoComplete='off'
            />
            <input
              type='text'
              id='company'
              name='company'
              onChange={e => setCompany(e.target.value)}
              placeholder='société'
              value={company}
            />
            <input
              type='text'
              id='phone'
              name='phone'
              onChange={e => setPhone(e.target.value)}
              placeholder='téléphone'
              value={phone}
            />
            <label id='not-mail'></label>
            <input
              type='mail'
              id='email'
              name='email'
              onChange={e => setEmail(e.target.value)}
              placeholder='email *'
              value={email}
              autoComplete='off'
            />
            <textarea
              id='message'
              name='message'
              onChange={e => setMessage(e.target.value)}
              placeholder='message *'
              value={message}
            />
          </div>
          <input
            className='button'
            type='button'
            value='Envoyer'
            onClick={handleSubmit}
          />
        </form>
        <div className='text-pop-up-top,telMail'>
          <p>Tel: 06 66 36 42 27</p>
          <p>Mail: christellefz@yahoo.fr</p>
          <Map />
        </div>
      </div>
    </div>
  )
}

export default Contact
