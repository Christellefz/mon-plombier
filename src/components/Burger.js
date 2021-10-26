import './Burger.css'

import { slide as Menu } from 'react-burger-menu'
import React from 'react'

const toggleMenu = ({ isOpen }) => {
  const menuWrap = document.querySelector('.bm-menu-wrap')
  isOpen
    ? menuWrap.setAttribute('aria-hidden', false)
    : menuWrap.setAttribute('aria-hidden', true)
}

const Burger = () => {
  return (
    <div className='burgerContainer'>
      <Menu noOverlay onStateChange={toggleMenu}>
        <a className='menu-item' href='/'>
          Home
        </a>
        <a className='menu-item' href='/about'>
          About
        </a>
        <a className='menu-item' href='/contact'>
          Contact
        </a>
      </Menu>
    </div>
  )
}

export default Burger
