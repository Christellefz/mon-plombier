import './Logo.css'

import Burger from './Burger.js'
import Navbar from './Navbar.js'
import { useEffect } from 'react'

const Logo = () => {
  useEffect(() => {
    const menuWrap = document.querySelector('.bm-menu-wrap')
    if (menuWrap) {
      menuWrap.setAttribute('aria-hidden', true)
    }
  }, [])
  return (
    <nav className='navContainer'>
      <div className='logo'> Excellence Sanitaire</div>
      <Burger />
      <Navbar />
    </nav>
  )
}
export default Logo
