import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';





class Main extends React.Component {
  render(){
    return (
      <header>
      <div className="logo"><h2>Logo</h2>
      </div>
      <Router>
        <div class="nav">
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>

          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
      </header>
    )
  }
}

export default Main;
