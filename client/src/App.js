import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import home from './components/home.js'
import books from './components/books.js'
import meetUp from './components/meetUp.js'

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
          <Route exact path="/" component={books}/>
        </Switch>
       </Router>
    </div>
  );
}

export default App;