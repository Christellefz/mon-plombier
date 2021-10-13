import './Coordonnees.css'

import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Coordonnees = () => {
  return (
    <div className='coordonnees'>
      <div className='adresse'>
        <FiMapPin /> 42 Av de l`&apos;`Europe -30300 Beaucaire
      </div>
      <div className='telephone'>
        <FiPhone /> 01 23 45 67 89
      </div>
      <div className='mail'>
        <FiMail /> excel.plomb@artisan.com
      </div>
    </div>
  )
}
export default Coordonnees
