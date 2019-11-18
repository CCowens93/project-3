import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import HomePageComponent from './components/HomePage.js';
import { Link } from 'react-router-dom'
// import ProfileView from './componenets/ProfileView.js'
import ProfileView from './components/ProfileView';
import AboutMeList from  './components/AboutMe.js'



class App extends React.Component {

  render() {
    return (<div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageComponent />
            </Route>
            {/* // this.props.match.params} */}
          <Route exact path="/profile/:profileId" >
           <AboutMeList />
          <Link to='/'>Home</Link>
            </Route>
        </Switch>
        </Router>
    </div>);
  }
}

export default App
