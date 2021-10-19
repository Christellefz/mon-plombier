import './App.css'

import { Route, Switch, withRouter } from 'react-router-dom'

import About from './screens/About.js'
import Accroche from './components/Accroche.js'
import Contact from './screens/Contact.js'
import Coordonnees from './components/Coordonnees.js'
import Footer from './components/Footer.js'
import Logo from './components/Logo.js'
import Map from './components/Map.js'
import Realisations from './screens/Realisations.js'
import Urgence from './screens/Urgence.js'

const App = withRouter(({ location }) => {
  return (
    <div className='App'>
      {location.pathname !== '/' && <Logo />}
      {location.pathname !== '/' && <Footer />}
      <div className='bgContainer'></div>
      <Switch>
        <Route exact path='/'>
          <Logo />
          <Coordonnees />
          <Accroche />
          <Footer />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/realisations'>
          <Realisations />
        </Route>
        <Route exact path='/contact'>
          <Contact />
          <Map />
        </Route>
        <Route exact path='/urgence'>
          <Urgence />
        </Route>
      </Switch>
    </div>
  )
})

export default App
