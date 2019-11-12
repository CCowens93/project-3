import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import HomePageComponent from './components/HomePage.js';
import ProfileForm from './components/ProfileForm.js';
import { Link } from 'react-router-dom'
// import ProfileView from './componenets/ProfileView.js'
import PortfolioList from './components/PortfolioList';


class App extends React.Component {

  render() {
    return (<div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePageComponent />
            <ProfileForm />
            </Route>
            {/* // this.props.match.params} */}
          <Route exact path="/:profileId" >
          {/* // component={}> */}
            
            <Link to='/'>Home</Link>
            </Route>
        </Switch>
        </Router>
    </div>);
  }
}

export default App
