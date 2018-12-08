import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs/aboutUs';
import ContactUs from './components/ContactUs/contactUs';
import Index from './components/Index/index';
import './App.css';
import './antd.css';
import 'antd/dist/antd.css';
import 'react-image-lightbox/style.css';
import FooterComponent from './components/footer';
import HeaderComponent from './components/Header';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <HeaderComponent></HeaderComponent>
          <br />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/home" component={Index} />
            <Route path='/AboutUs' component={AboutUs} />
            <Route path='/ContactUs' component={ContactUs} />
          </Switch>
          <FooterComponent></FooterComponent>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
