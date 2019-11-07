import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import ProfileComponent from './components/Profile.js';
import BrandComponent from './components/Brand.js'
import Navbar from './components/Navbar.js'
import AboutMeComponent from './components/AboutMe.js'
import Portfolio from './components/Portfolio.js'
import FeaturedWorkComponent from './components/FeaturedWork.js'
import ContactComponent from './components/Contact.js'
import LandingPageComponent from './components/LandingPage';






class App extends React.Component {

  state = {
  }
  render() {
    return (<div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPageComponent />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Profile">
            <ProfileComponent />
            <Navbar />
            <BrandComponent />
            </Route>
        </Switch>
        <Switch>
          <Route exact path="/Profile/AboutMe">
            <AboutMeComponent />
            </Route>
        </Switch>
        <Switch>
          <Route exact path="/Profile/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Profile/FeaturedWork">
            <FeaturedWorkComponent />
          </Route>
        </Switch>
        <Switch> 
          <Route exact path="Profile/Contact">
            <ContactComponent />
          </Route>
        </Switch>
      </Router>
    </div>);
  }
}

export default App
