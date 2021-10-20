import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='navbar'>
        <Link className='link' to='/'>
          <li className='navItem'>Accueil</li>
        </Link>
        <Link className='link' to='/realisations'>
          <li className='navItem'> Réalisations</li>
        </Link>
        <Link className='link' to='/about'>
          <li className='navItem'>A propos</li>
        </Link>
        <Link className='link' to='/contact'>
          <li className='navItem'>Contact</li>
        </Link>
        <Link className='link' to='/tarifs'>
          <li className='navItem'>Tarifs</li>
        </Link>
      </ul>
    </nav>
  )
}
export default Navbar
