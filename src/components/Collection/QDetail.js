import React, { Component } from "react"
// import HasCard from "./Has/HasCard";
// import NeedsCard from "./Needs/NeedsCard"
import stock_qtr from './../img/stock_Qtr_Img.png'
import DataManager from "../../modules/DataManager";
import './CollectionDetail.css'

// console.log("this.props", this.props)
export default class QDetail extends Component {


    state = {

    }
// update state upon edits to fields
handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}


    // fetchSpecificQ = (quarterId) => {
    //     const newState = {}
    //         DataManager.getASpecificQ(quarterId)
    //         .then(specificQ => newState.specificQ = specificQ)
    //         .then( (specificQ) => console.log("  this specificQ's id: ", specificQ.id))
    //         .then(() => this.setState(newState))
    // }



    componentDidMount() {
        // this.fetchSpecificQ(this.props.quarters.id)
    };
    //STAGE 1 - Get the id of the item.
    seeksInterestsId(id) {
      return fetch(`http://localhost:5002/quarters/${id}`)
      .then(response => response.json())
      // .then(response => form.renderEditForm(response))
    };
    // //STAGE 2 - Do some stuff to the item.
    thingsChange(id, editedObject) {
      return fetch(`http://localhost:5002/quarters/${id.notes}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedObject)
      })
    };


render() {
    //***** TEST *****/
      // EDIT USER - 2 STAGES


        return (
            <React.Fragment>
                <br/>
                <br/>
                <div className="collection">

                <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />

                <br/>
                <section className="collections">
                {
                    this.props.singleQ.map(q =>
                        <div key={q.id} className="q" >
                            <br/>
                        <div className="form-group">
                            <label htmlFor="setup">Edit notes</label>
                            <input type="text" required={true}
                                onChange={this.handleFieldChange}
                                id="notes"
                                placeholder={q.notes} />
                        </div>
                            <button className="btn btn-primary"  id={q.id} onClick={() =>
                                {
                                    console.log("this.state.notes", this.state.notes)

                                }
                            }
                                >
                                Edit </button>

                            <br/>

                        </div>
                    )
                }
                </section>



                <br/>



            </div>
            </React.Fragment>
        )
    }
}