

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
// import map from './img/USMap.png'
import coverImage from './img/coverImage.jpg'
import ApplicationViews from './ApplicationViews'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <ApplicationViews />
      <div className="App">

        <section>
          {/* <img src={map} alt="coverImage" className="coverImage"></img> */}
          <img src={coverImage} alt="coverImage" className="coverImage"></img>
        </section>

      </div>

      </React.Fragment>


    );


  }
}

export default App;
