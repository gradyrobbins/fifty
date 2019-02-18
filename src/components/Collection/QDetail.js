import React, { Component } from "react"
// import HasCard from "./Has/HasCard";
// import NeedsCard from "./Needs/NeedsCard"
import stock_qtr from './../img/stock_Qtr_Img.png'
// import DataManager from "../../modules/DataManager";
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


    componentDidUpdate() {
        // this.setState({singleQ: this.props.singleQ})
    };
    //STAGE 1 - Get the quarter. (it is passed down via props)

    // //STAGE 2 - Do some stuff to it; PUT
    thingsChange(id, editedObject) {
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
// const editedQuarter = {
//                                     collectionId: this.props.singleQ[0].collectionId,
//                                         id: this.props.singleQ[0].id,
//                                     notes: this.state.notes,
//                                     usaId: this.props.singleQ[0].usaId,
//                                         userId: this.props.singleQ[0].userId
//                                 }

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
                        <h5>State Quarter ID# {q.usaId}</h5>
                            <br/>
                        <div className="form-group">
                            <label htmlFor="setup">Edit notes</label>
                            <input type="text" required={true}
                                onChange={this.handleFieldChange}
                                id="notes"
                                placeholder={q.notes}
                                value={q.notes} />
                        </div>
                            <button className="btn btn-primary"  id={q.id} onClick={() =>
                                {
                                    console.log("this.state.notes", this.state.notes)
                                    // this.props.editQ(`${q.id}`, editedQuarter )
                                }
                                // const editedQuarter = {
                                //     collectionId: this.props.singleQ[0].collectionId,
                                        // id: this.props.singleQ[0].id,
                                //     notes: this.state.notes,
                                    // usaId: this.props.singleQ[0].usaId,
                                        // userId: this.props.singleQ[0].userId
                                // }




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