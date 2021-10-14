import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutUs from './components/pages/AboutUs'
import Committees from './components/pages/Committees'
import Constitution from './components/pages/Constitution'
import CouncilElection from './components/pages/CouncilElection'
import SrcRole from './components/pages/SrcRole'
import CurrentExecutive from './components/pages/CurrentExecutive'
//new importation
import Events from './components/pages/Events'
import Freshinfo from './components/pages/Freshinfo'
import Gallery from './components/pages/Gallery'
import Hostels from './components/pages/Hostels'
import PastExecutives from './components/pages/PastExecutives'
import ScholarAid from './components/pages/ScholarAid'
import SRCarticles from './components/pages/SRCarticles'
import SRCnews from './components/pages/SRCnews'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={AboutUs} />
        <Route path='/committees' component={Committees} />
        <Route path='/constitution' component={Constitution} />
        <Route path='/c-election' component={CouncilElection} />
        <Route path='/srcrole' component={SrcRole} />
        <Route path='/executives' component={CurrentExecutive} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/hostel' component={Hostels} />
        <Route path='/p-executives' component={PastExecutives} />
        <Route path='/scholaraid' component={ScholarAid} />
        <Route path='/srcarticles' component={SRCarticles} />
        <Route path='/news' component={SRCnews} />
        <Route path='/events' component={Events} />
        <Route path='/freshinfo' component={Freshinfo} />
      </Switch>
    </Router>
  )
}

export default App
