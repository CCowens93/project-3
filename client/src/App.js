import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import HomeComponent from './components/Home.js';





class App extends React.Component {

  state = {
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
            </Route>
        </Switch>
      </Router>
    );
  }
}

export default App
