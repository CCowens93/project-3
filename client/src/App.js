import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import ProfileComponent from './components/Profile.js';
import BrandComponent from './components/Brand.js'
// import Navbar from './components/Navbar.js'
import AboutMeComponent from './components/AboutMe.js'
import Portfolio from './components/Portfolio.js'
import FeaturedWorkComponent from './components/FeaturedWork.js'
import ContactComponent from './components/Contact.js'
import HomePageComponent from './components/HomePage';
import ProfileForm from './components/ProfileForm';






class App extends React.Component {

  state = {
  }
  render() {
    return (<div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageComponent />
            <ProfileForm />
            <ProfileComponent />
          </Route>
          <Route exact path="/Profile">
            <ProfileComponent />
            {/* <Navbar /> */}
            <BrandComponent />
            <AboutMeComponent />
            <Portfolio />
            <FeaturedWorkComponent />
            <ContactComponent />
            </Route>
        </Switch>
        </Router>
    </div>);
  }
}

export default App
