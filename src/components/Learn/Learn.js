import React, { Component } from "react"
import NavBar from "./../Nav/NavBar";
import USAMap from "react-usa-map";
import './Learn.css'
import FunFacts from "./FunFacts";
import Guam from './../img/Guam.jpeg'
import VirginIslands from './../img/USVirginIslands.jpeg'
import N_Marianas from './../img/N_Mariana_Islands.jpeg'
import Puerto_Rico from './../img/PuertoRico.jpeg'
import American_Samoa from './../img/American_Samoa.jpeg'
export default class Learn extends Component {


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
        <br/>

        <div>
          <FunFacts justClicked={this.state.justClicked}/>
        </div>
        <br />
        <br/>

        <div className="App">
          {/* <h3> &lt; USA Map  / &gt; div  </h3>
          <h4> maphandler() function: whichever state is clicked renders fun facts to DOM</h4> */}
          {/* <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} /> */}
          <USAMap onClick={this.mapHandler} />
        </div>
        <br />
        <br />
        <br/>
        <div className="Territories">
          <img alt="Guam" src={Guam} className="img"
          // onClick={() => console.log("clicked Guam")}

          onClick={() => this.setState({ justClicked:
            {
                "id": 52,
                "name": "Guam",
                "abbr": "",
                "Statehood": "1 of 6 U.S. territories",
                "Capital": "Hagatna (Agana)",
                "Nicknames": "",
                "Motto": "Where America's day begins",
                "Flower": "Bougainvillea spectabilis",
                "Bird": "Marianas rose crown fruit dove",
                "image": "https://loremflickr.com/75/75",
                "year": ""
              }
            })}

              />
          <img alt="virgin Islands" src={VirginIslands} className="img"
            onClick={() => this.setState({ justClicked:
              {
                "id": 54,
                "name": "US Virgin Islands",
                "abbr": "US Virgin Islands",
                "Statehood": "1 of 6 U.S. territories",
                "Capital": "Charlotte Amalie, St. Thomas",
                "Nicknames": "",
                "Motto": "United in pride",
                "Flower": "Yellow elder or yellow cedar",
                "Bird": "Yellow breast or banana quit",
                "image": "https://loremflickr.com/75/75",
                "year": ""
              }
              })}
          />
          <img alt="N_Marianas" src={N_Marianas} className="img"
              onClick={() => this.setState({ justClicked:
                {
                  "id": 55,
                  "name": "Northern Mariana Islands",
                  "abbr": "Northern Mariana Islands",
                  "Statehood": "1 of 6 U.S. territories",
                  "Capital": "Saipan",
                  "Nicknames": "",
                  "Motto": "",
                  "Flower": "Flores Mayo",
                  "Bird": "Mariana fruit-dove",
                  "image": "https://loremflickr.com/75/75",
                  "year": ""
                }
                })}
          />
          <img alt="Puerto_Rico" src={Puerto_Rico} className="img"
            onClick={() => this.setState({ justClicked:
              {
                "id": 51,
                "name": "Puerto Rico",
                "abbr": "PR",
                "Statehood": "1 of 6 U.S. territories",
                "Capital": "San Juan",
                "Nicknames": "",
                "Motto": "Joannes Est Nomen Eius (John is his name)",
                "Flower": "Maga",
                "Bird": "Reinita",
                "image": "https://loremflickr.com/75/75",
                "year": ""
              }
              })}
          />
          <img alt="American_Samoa" src={American_Samoa} className="img"
            onClick={() => this.setState({ justClicked:
              {
                "id": 53,
                "name": "American Samoa",
                "abbr": "American Samoa",
                "Statehood": "1 of 6 U.S. territories",
                "Capital": "Pago Pago",
                "Nicknames": "The last frontier",
                "Motto": "Samoa Muamua le Atua (God is first in Samoa)",
                "Flower": "Paogo",
                "Bird": "Willow ptarmigan",
                "image": "https://loremflickr.com/75/75",
                "year": ""
              }
              })}
          />
        </div>



      </React.Fragment>
    )
  }
}
