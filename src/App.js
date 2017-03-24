import React, { Component } from 'react';
import './App.css';

import Home from './home';
import Procedures from './procedures';
import Contact from './contact';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/procedures">Procedures</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/procedures" component={Procedures} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
