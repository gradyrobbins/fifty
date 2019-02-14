import React, { Component } from "react"
// import HasCard from "./Has/HasCard";
// import NeedsCard from "./Needs/NeedsCard"
import stock_qtr from './../img/stock_Qtr_Img.png'
import DataManager from "../../modules/DataManager";
import './CollectionDetail.css'

export default class QDetail extends Component {
    state ={

        specificQ: []
    }


    fetchSpecificQ = (quarterId) => {
        const newState = {}
            DataManager.getASpecificQ(quarterId)
            .then(specificQ => newState.specificQ = specificQ)
            .then( (specificQ) => console.log("  this specificQ's id: ", specificQ.id))
            .then(() => this.setState(newState))
    }



    componentDidMount() {
        // this.fetchSpecificQ(this.props.quarters.id)
    };

render() {
    /*
    Using the route parameter, find whose collection you want to display by looking at the `this.props.collections` that was passed down from ApplicationViews
    */
   //​​​​​​​​​​​​​​react-router-dom stores the route params in the component’s props and it enables us to access this parameter via this.props.match.params.collectionId. Once we have the collectionId, we then find the collection with a matching ID in the quarter array, and set it in the component state as userSpecific. This is handled in DataManager.getASpecificCollection.

        // const specificQ = this.props.quarters.find(a => a.id === parseInt(this.props.quarters.id)) || {}




        return (
            <React.Fragment>
                <br/>
                <br/>
                <div className="collection">
                <section >
                    <div  className="card">
                        {/* <h3>{specificQ}</h3> */}
                        <br/>
                    <h3>One Specific Qtr Card renders here</h3>
                    <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />
                    <h5>Notes:  (this is the field that will be editable)</h5>
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/collection/edit`)}
                            }>
                                edit this Quarter
                        </button>
                    </div>
                </section>

                <br/>
                <br/>


                {/* <HasCard
                        // {...props}
                        quarters={this.state.userSpecific}
                        getASpecificCollection={this.fetchSpecificCollection}
                        deleteQ={this.deleteQ}
                        /> */}
                <br/>
                <br/>



            </div>
            </React.Fragment>
        )
    }
}