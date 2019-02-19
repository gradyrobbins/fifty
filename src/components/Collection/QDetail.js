import React, { Component } from "react"
// import HasCard from "./Has/HasCard";
// import NeedsCard from "./Needs/NeedsCard"
import stock_qtr from './../img/stock_Qtr_Img.png'
import DataManager from "../../modules/DataManager";
import './CollectionDetail.css'

export default class QDetail extends Component {

    state = {
        singleQ: "",
        notes: ""
    }

    // update state upon edits to fields
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    componentDidMount() {
            const newState = {}
            DataManager.getASpecificQ_expand(this.props.match.params.quarterId)
            .then(singleQ => { newState.singleQ = singleQ
                newState.notes = singleQ.notes
                console.log(" single Q: ??", singleQ)
                this.setState(newState)
        })
    }

    componentDidUpdate() {
        // const newState = {}
        // DataManager.getASpecificQ_expand(this.props.match.params.quarterId)
        // .then(singleQ => console.log("singleQ:", singleQ))
        // .then(singleQ => { newState.singleQ = singleQ
        //     console.log(" single Q: ??", singleQ)
        //     this.setState(newState)
        // })
        //     // this.setState({singleQ: this.props.singleQ})
        //
    };



    //STAGE 1 - Get the quarter. (it is passed down via props)
    // fetchSpecificQ = (quarterId) => {
        //     const newState = {}
        //         DataManager.getASpecificQ(quarterId)
        //         // DataManager.getASpecificQ_expand(quarterId)
        //     .then(singleQ => { newState.singleQ = singleQ
        //     console.log(" single Q: ??", singleQ)
        //     this.setState(newState)
        // })
        // }

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
            //***** TEST *****/
            // EDIT USER - 2 STAGES
            const editedQuarter = {
                                                    collectionId: this.state.singleQ.collectionId,
                                                        id: this.state.singleQ.id,
                                                    notes: this.state.notes,
                                                    usaId: this.state.singleQ.usaId,
                                                        userId: this.state.singleQ.userId
                                                }

                // console.log("<QDetail /> this.props", this.props)
                return (
                    <React.Fragment>
                <br/>
                <br/>
                <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />
                <div className="collection">

                <br/>
                <section className="collections">

                        <div key={this.state.singleQ.id} className="q" >
                        <h5>State Quarter ID# {this.state.singleQ.usaId}</h5>
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

                                    // console.log("this.props.singleQ :", this.state.singleQ)
                                    // console.log("this.state.notes :", this.state.notes)

                                    // // this.props.editQ(`${q.id}`, editedQuarter )
                                    this.thingsChange(`${this.state.singleQ.id}`, editedQuarter )
                                    .then(() => {this.props.history.push(`/collection/${this.state.singleQ.collectionId}`)})
                                }





                            }
                                >
                                Edit </button>

                            <br/>

                        </div>
                    )
                </section>

                <br/>

            </div>
            </React.Fragment>
        )
    }
}