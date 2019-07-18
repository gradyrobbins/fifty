import React, { Component } from "react"
import stock_qtr from './../img/stock_Qtr_Img.png'
import DataManager from "../../modules/DataManager";
import './CollectionDetail.css'

//this component renders when we want to EDIT the notes on a quarter
export default class QDetail extends Component {

    state = {
        singleQ: "",
        notes: "",
        isLoaded: false
    }

    //STEP 1 - Get the specific quarter that the user wants to edit, and setState with it. State will later be updated with user's changes in handleFieldChange()
    // NOTE: the "state.isLoaded" is needed because render happens before promise resolves, because componentDidMount executes a fetch call but the render happens regardless of whether the promise resolves.  we use this value to check when the promise resolves itself -- [ if(this.state.isLoaded) ]
    componentDidMount() {
        const newState = {}
        DataManager.getASpecificQ_expand(this.props.match.params.quarterId)
            .then(singleQ => {
            newState.singleQ = singleQ
                newState.notes = singleQ.notes
                newState.isLoaded = true
                console.log(" single Q name:  ", singleQ.usa.name)
                this.setState(newState)
            })
    }

    // update state upon edits to "notes" field
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // //STAGE 2 - Do some stuff to it; PUT method takes the entire new object and overwrites the old one using the old one's id in database.json
    thingsChange = (id, editedObject) => {
        return fetch(`http://localhost:5002/quarters/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        })
    };


    render() {
        // create an object that holds updated values
        const editedQuarter = {
            id: this.state.singleQ.id,
            usaId: this.state.singleQ.usaId,
            collectionId: this.state.singleQ.collectionId,
            userId: this.state.singleQ.userId,
            notes: this.state.notes
        }
        console.log("this.state.singleQ.usa :", this.state.singleQ.usa)
        return (<React.Fragment>
            <br />
            <br />
            <br />
            <br />
            <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />
            <br />



            {/* initially i was unable to access the State's Name in {this.state.singleQ.usa.name}, because the componentDidMount returned an unresolved promise and continued with the render part of this component.  Now i have a ternary/conditional, below, that determines if the promise is resolved */}
            <div key={this.state.singleQ.id} className="QDetail" >
                {this.state.isLoaded ? <h3> {this.state.singleQ.usa.name} </h3> : <h3> awaiting promise's resolution </h3>}

                {/* <h6>Specific State Quarter ID# &nbsp; {this.state.singleQ.usaId} </h6> */}
                <br />
                <div className="form-group">
                    <label htmlFor="setup">Edit notes</label>
                    <input type="text" required={true}
                        onChange={this.handleFieldChange}
                        id="notes"
                        placeholder={this.state.singleQ.notes}
                        value={this.state.notes} />
                </div>
                <button className="btn btn-primary" id={this.state.singleQ.id} onClick={() => {
                    this.thingsChange(`${this.state.singleQ.id}`, editedQuarter)
                    .then(() => { this.props.history.push(`/collection/${this.state.singleQ.collectionId}`) })
                }}> Edit </button>
                <button className="btn btn-primary" onClick={() => {
                    this.props.history.push(`/collection/${this.state.singleQ.collectionId}`)
                }}> Return without making any changes </button>
                <br />
                <br />
            </div>
        </React.Fragment>)
    }
}