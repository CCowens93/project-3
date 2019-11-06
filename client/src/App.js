import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';




class App extends React.Component {

  state = {
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            </Route>
          <Route exact path="/writers">
              
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App
