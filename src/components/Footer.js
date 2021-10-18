import './Footer.css'

import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footerContainer'>
      <ul className='footerList'>
        <li className='footerItem'>mentions légales</li>
        <li className='footerItem'>cgu</li>
        <li className='footerItem'>
          <FaFacebookF />
        </li>
        <li className='footerItem'>
          <FaInstagram />
        </li>
      </ul>
    </div>
  )
}
export default Footer
