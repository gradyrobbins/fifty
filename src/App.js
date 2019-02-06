import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'

import './App.css';
import ApplicationViews from './ApplicationViews'
// import NavBar from './components/nav/NavBar'
// import HomePage from './components/home/HomePage'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        {/* <HomePage /> */}
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

export default App;
