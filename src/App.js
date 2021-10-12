import './App.css'

import Accroche from './components/Accroche.js'
import Coordonnees from './components/Coordonnees.js'
import Logo from './components/Logo.js'

function App() {
  return (
    <div className='App'>
      <div className='bgContainer'></div>
      <Logo />
      <Coordonnees />
      <Accroche />
    </div>
  )
}

export default App
