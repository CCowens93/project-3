import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import HomeComponent from './components/Home.js';
import BrandComponent from './components/Brand.js'
import Navbar from './components/Navbar.js'
import AboutMe from './components/AboutMe.js'
import Portfolio from './components/Portfolio.js'
import FeaturedWorkComponent from './components/FeaturedWork.js'
import ContactComponent from './components/Contact.js'





class App extends React.Component {

  state = {
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
            <Navbar />
            <BrandComponent />
            </Route>
        </Switch>
        <Switch>
          <Route exact path="/AboutMe">
            <AboutMe />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/FeaturedWork">
            <FeaturedWorkComponent />
          </Route>
        </Switch>
        <Switch> 
          <Route exact path="/Contact">
            <ContactComponent />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App
