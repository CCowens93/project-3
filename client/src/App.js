import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import ProfileComponent from './components/Profile.js';
// import Navbar from './components/Navbar.js'
import AboutMeComponent from './components/AboutMe.js'
import Portfolio from './components/Portfolio.js'
import FeaturedWorkComponent from './components/FeaturedWork.js'
import ContactComponent from './components/Contact.js'
import HomePageComponent from './components/HomePage.js';
import ProfileForm from './components/ProfileForm.js';
import PortfolioForm from './components/PortfolioForm.js';








class App extends React.Component {





  render() {
    return (<div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageComponent />
            <ProfileForm />
            </Route>
          <Route exact path="/profile">
            <ProfileComponent />
            <AboutMeComponent />
            <Portfolio />
            <PortfolioForm />
            <FeaturedWorkComponent />
            <ContactComponent />
            </Route>
        </Switch>
        </Router>
    </div>);
  }
}

export default App
