import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Header from './components/nav/header'
import Section from './components/nav/section'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Section />
      </React.Fragment>
    );
  }
}

export default App;