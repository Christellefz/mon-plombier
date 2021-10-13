import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <ul className='navbar'>
        <Link to='/'>
          <li className='navItem'>Accueil</li>
        </Link>
        <Link to='/realisations'>
          <li className='navItem'> Réalisations</li>
        </Link>
        <Link to='/about'>
          <li className='navItem'>A propos</li>
        </Link>
        <Link to='/contact'>
          <li className='navItem'>Contact</li>
        </Link>
        <Link to='/urgence'>
          <li className='navItem'>Urgence</li>
        </Link>
      </ul>
    </>
  )
}
export default Navbar
