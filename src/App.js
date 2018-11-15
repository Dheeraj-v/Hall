import React, { Component } from 'react';

import ResponsiveMenu from 'react-responsive-navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs/aboutUs';
import ContactUs from './components/ContactUs/contactUs';
import Index from './components/Index/index';
import './App.css';
import FooterComponent from './components/footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Express App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to={'/AboutUs'} className="nav-link">About us</Link></li>
                <li className="nav-item"><Link to={'/ContactUs'} className="nav-link">Contact us</Link></li>
              </ul>
              <hr />
            </div>
          </nav>
          <br />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/ContactUs' component={ContactUs} />
          </Switch>
          <FooterComponent></FooterComponent>
        </div>
      </Router>
    );
  }
}

export default App;
