import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from './components/home.js'
import portfolio from './components/portfolio.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={home}/>
        </Switch>
        <Switch>
          <Route exact path="/portfolio/:portfolioId" component={portfolio}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;