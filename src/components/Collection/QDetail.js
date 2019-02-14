import React, { Component } from "react"
// import HasCard from "./Has/HasCard";
// import NeedsCard from "./Needs/NeedsCard"
import stock_qtr from './../img/stock_Qtr_Img.png'
import DataManager from "../../modules/DataManager";
import './CollectionDetail.css'

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

render() {
    /*
    Using the route parameter, find whose collection you want to display by looking at the `this.props.collections` that was passed down from ApplicationViews
    */
   //​​​​​​​​​​​​​​react-router-dom stores the route params in the component’s props and it enables us to access this parameter via this.props.match.params.collectionId. Once we have the collectionId, we then find the collection with a matching ID in the quarter array, and set it in the component state as userSpecific. This is handled in DataManager.getASpecificCollection.

        // const specificQ = this.props.quarters.find(a => a.id === parseInt(this.props.quarters.id)) || {}


// console.log("this.props.singleQ", this.props.singleQ)

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
                                    this.props.editQ(1 , this.state.notes)
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