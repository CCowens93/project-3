import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import AboutMeComponent from './components/AboutMe.js'
import Portfolio from './components/Portfolio.js'
import FeaturedWorkComponent from './components/FeaturedWork.js'
import ContactComponent from './components/Contact.js'
import HomePageComponent from './components/HomePage.js';
import ProfileForm from './components/ProfileForm.js';
import PortfolioForm from './components/PortfolioForm.js';
import PortfolioPage from './components/PortfolioPage';
import AboutMePage from './components/AboutMePage';
import AboutMeForm from './components/AboutMeForm';
import { Link } from 'react-router-dom'




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
            <AboutMeComponent />
            <AboutMePage/>
            <AboutMeForm />
            <Portfolio />
            <PortfolioPage />
            <PortfolioForm />
            <FeaturedWorkComponent />
            <ContactComponent />
            <Link to='/'>Home</Link>
            </Route>
        </Switch>
        </Router>
    </div>);
  }
}

export default App
