import React, { Component } from "react"
import NavBar from "./../Nav/NavBar";
import USAMap from "react-usa-map";
import './Learn.css'
export default class List extends Component {


  mapHandler = (event) => {
    console.log(event.target.dataset.name)

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
        console.log("<Learn /> this.props " , this.props)
        return (
        <React.Fragment>
            <br/>
            <br/>
            <br/>
                <NavBar />
            <br/>
            <br/>
            <div>
              <h1> using NPM package install: npm i react-usa-map v1.3.0 to install clickable map.</h1>

              <h3>state's abbreviation console.log's onClickEvent</h3>

              <div className="App">
        {/* <USAMap customize={this.statesCustomConfig()} onClick={this.mapHandler} /> */}
        <USAMap onClick={this.mapHandler} />
      </div>
            </div>
            {/* <h3> &lt; Clickable USA Map component / &gt; goes here </h3>
            <h4> whichever state is clicked renders the corresponding state's card and fun facts </h4> */}

            <div>
                {this.props.usas.map(item => {
                    // console.log(item)
                    return <div className="Card" key={item.id}>
                               <h4><strong> {item.name} </strong></h4> <br/><br/>
                                Date of Statehood: {item.Statehood} <br/>
                                Capital: {item.Capital} <br/>
                                Nicknames: {item.Nicknames} <br/>
                                Motto: {item.Motto} <br/>
                                Flower: {item.Flower} <br/>
                                Bird: {item.Bird} <br/>
                                {/* &lt; IMPORT AN IMAGE OF THE STATE'S BORDERS HERE &gt; */}
                            </div>
                        })
                }

            </div>
        </React.Fragment>
            )
    }
}
