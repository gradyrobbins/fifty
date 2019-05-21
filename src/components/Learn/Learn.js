import React, { Component } from "react"
import NavBar from "./../Nav/NavBar";
import USAMap from "react-usa-map";
import './Learn.css'
export default class List extends Component {


  constructor(props) {
    super(props);
    this.mapHandler = this.mapHandler.bind(this);
  }

  state = {
    justClicked: null,
  };

  mapHandler = (event) => {

    let result = this.props.usas.find(obj => obj.abbr === event.target.dataset.name)

    this.setState({ justClicked: result })

    console.log("this.state", this.state);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  render() {
    // console.log("<Learn /> this.props.usas ", this.props.usas)


    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <NavBar />
        <br />
        <br />
        <div>
          <h1> using NPM package install: npm i react-usa-map v1.3.0 to install clickable map.</h1>

          <h3>state's abbreviation console.log's onClickEvent</h3>

        </div>
        <h3> &lt; Clickable USA Map component / &gt; goes here </h3>
        <div className="App">
          {/* <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} /> */}
          <USAMap onClick={this.mapHandler} />
        </div>

        <h4> whichever state is clicked renders the corresponding state's card and fun facts </h4>

        <div>
          {/*
              <div className="Card" key={this.state.justClicked.id}>
              <h4><strong> {this.state.justClicked.name} </strong></h4> <br /><br />
              Date of Statehood: {this.state.justClicked.Statehood} <br />
              Capital: {this.state.justClicked.Capital} <br />
              {/* Nicknames: {this.state.Nicknames} <br />
              Motto: {this.state.Motto} <br />
              Flower: {this.state.Flower} <br />
              Bird: {this.state.Bird} <br /> */}
          {/* &lt; IMPORT AN IMAGE OF THE STATE'S BORDERS HERE &gt; */}
        </div>

        {/* </div> */}

        <div>
          {this.props.usas.map(item => {
            // console.log(item)
            return <div className="Card" key={item.id}>
              <h4><strong> {item.name} </strong></h4> <br /><br />
              Date of Statehood: {item.Statehood} <br />
              Capital: {item.Capital} <br />
              Nicknames: {item.Nicknames} <br />
              Motto: {item.Motto} <br />
              Flower: {item.Flower} <br />
              Bird: {item.Bird} <br />
              {/* &lt; IMPORT AN IMAGE OF THE STATE'S BORDERS HERE &gt; */}
            </div>
          })
          }

        </div>
      </React.Fragment>
    )
  }
}
