import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import ApplicationViews from './ApplicationViews'
import NavBar from './components/nav/NavBar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default App;
