import './App.css'

import { Route, Switch } from 'react-router-dom'

import About from './screens/About.js'
import Accroche from './components/Accroche.js'
import Contact from './screens/Contact.js'
import Coordonnees from './components/Coordonnees.js'
import Logo from './components/Logo.js'
import Realisations from './screens/Realisations.js'
import Urgence from './screens/Urgence.js'

function App() {
  return (
    <div className='App'>
      {location.pathname !== '/' && <Logo />}
      <div className='bgContainer'></div>
      <Logo />
      <Coordonnees />
      <Accroche />
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/realisations'>
          <Realisations />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/urgence'>
          <Urgence />
        </Route>
      </Switch>
    </div>
  )
}

export default App
