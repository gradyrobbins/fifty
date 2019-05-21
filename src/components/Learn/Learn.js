import React, { Component } from "react"
import NavBar from "./../Nav/NavBar";
import USAMap from "react-usa-map";
import './Learn.css'
import FunFacts from "./FunFacts";
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

        <div className="App">
          <h3> &lt; USA Map  / &gt; div  </h3>
          <h4> maphandler() function: whichever state is clicked renders fun facts to console</h4>
          {/* <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} /> */}
          <USAMap onClick={this.mapHandler} />
        </div>


        <div>
          <FunFacts justClicked={this.state.justClicked}/>
        </div>

        {/* </div> */}

        <div>
          {/* {this.props.usas.map(item => {
            // console.log(item)
            return <div className="Card" key={item.id}>
              <h4><strong> {item.name} </strong></h4> <br /><br />
              Date of Statehood: {item.Statehood} <br />
              Capital: {item.Capital} <br />
              Nicknames: {item.Nicknames} <br />
              Motto: {item.Motto} <br />
              Flower: {item.Flower} <br />
              Bird: {item.Bird} <br />

            </div>
          })
          } */}

        </div>
      </React.Fragment>
    )
  }
}
