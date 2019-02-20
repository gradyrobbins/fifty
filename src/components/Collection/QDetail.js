import React, { Component } from "react"
import stock_qtr from './../img/stock_Qtr_Img.png'
import DataManager from "../../modules/DataManager";
import './CollectionDetail.css'

export default class QDetail extends Component {

    state = {
        singleQ: "",
        notes: "",
        // name: ""
        isLoaded: false
    }

    //STAGE 1 - Get the quarter.
    //grab the specific quarter that the user wants to edit, and setState with it. State will later be updated with user's changes due to handleFieldChange()
    //cannot find "name" because render happens before promise resolves.  conditionally render?
    componentDidMount() {
            const newState = {}
            DataManager.getASpecificQ_expand(this.props.match.params.quarterId)
            .then(singleQ => { newState.singleQ = singleQ
                newState.notes = singleQ.notes
                newState.isLoaded = true
                console.log(" single Q name: ??", singleQ.usa.name)
                this.setState(newState)
        })
    }

    // update state upon edits to "notes" field
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // //STAGE 2 - Do some stuff to it; PUT method
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
        <br/>
        <br/>
        <br/>
        <br/>
        <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />

            <div key={this.state.singleQ.id} className="q" >

            <h5>State Quarter ID# {this.state.singleQ.usaId} </h5>

            {this.state.isLoaded ? <h3> State Name: {this.state.singleQ.usa.name} </h3> : <h3> COMING SOON </h3>}

                <br/>
            <div className="form-group">
                <label htmlFor="setup">Edit notes</label>
                <input type="text" required={true}
                    onChange={this.handleFieldChange}
                    id="notes"
                    placeholder={this.state.singleQ.notes}
                    value={this.state.notes} />
            </div>
                    <button className="btn btn-primary"  id={this.state.singleQ.id} onClick={() =>
                        {
                            this.thingsChange(`${this.state.singleQ.id}`, editedQuarter )
                            .then(() => {this.props.history.push(`/collection/${this.state.singleQ.collectionId}`)})
                        } }>
                        Edit </button>
                    <br/>
                <br/>
    </div>
    </React.Fragment>)
    }
}