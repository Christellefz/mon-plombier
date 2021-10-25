import './Footer.css'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'

import Modal from './Modal.js'
import { useState } from 'react'

const Footer = () => {
  const [visible, setVisible] = useState(false)

  const showHideModal = () => {
    setVisible(!visible)
  }

  return (
    <>
      {visible ? <Modal visible={visible} /> : null}
      <div className='footerContainer'>
        <ul className='footerList'>
          <li className='footerItem'>mentions légales</li>
          <li className='footerItem'>cgu</li>
          <li className='footerItem' onClick={showHideModal}>
            <FaFacebookF />
          </li>
          <li className='footerItem' onClick={showHideModal}>
            <FaInstagram />
          </li>
        </ul>
      </div>
    </>
  )
}
export default Footer
