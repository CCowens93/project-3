import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from './components/home.js'
import portfolio from './components/portfolio.js'
import meetUp from './components/meetUp.js'
import portfolioItem from './components/portfolioItem.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={home}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={meetUp}/>
        </Switch>
        <Switch>
          <Route exact path="/portfolio/:artistId" component={portfolio}/>
        </Switch>
        <Switch>
          {/* <Route exact path="/portfolio/:artistId" component={portfolioItem}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;