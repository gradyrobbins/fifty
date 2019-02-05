import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import map from './img/USMap.png'
import coverImage from './img/coverImage.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">

        <section>
          <img src={map} alt="coverImage" className="coverImage"></img>
          <img src={coverImage} alt="coverImage" className="coverImage"></img>
        </section>
      </div>
    );
  }
}

export default App;
