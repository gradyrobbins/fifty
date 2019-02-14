import React, { Component } from "react"
// import HasCard from "./Has/HasCard";
// import NeedsCard from "./Needs/NeedsCard"
import stock_qtr from './../img/stock_Qtr_Img.png'
import DataManager from "../../modules/DataManager";
import './CollectionDetail.css'

export default class QDetail extends Component {
    state ={

        // specificQ: []
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


console.log("this.props.singleQ", this.props.singleQ)

        return (
            <React.Fragment>
                <br/>
                <br/>
                <div className="collection">
                <section >
                    <div  className="card">
                        <br/>
                    <h3>One Specific Qtr Card renders here</h3>
                    <img alt="stock-qtr" src={stock_qtr} className="icon-qtr" />
                    {/* <h6>{this.fetchSpecificQ}</h6> */}
                    <h5>Notes:  (this is the field that will be editable)</h5>
                {/* <h5>this.props.singleQ</h5> */}
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                // this.fetchSpecificQ(4)
                                // this.props.history.push(`/collection/edit`)}
                            }}>
                                edit this Quarter
                        </button>
                    </div>
                </section>

                <br/>
                <section className="collections">
                {
                    this.props.singleQ.map(q =>
                        <div key={q.id} className="q" >
                            <br/>
                            <p>{q.notes}</p>
                            <button className="btn btn-primary"  id={q.id} onClick={() =>
                                {
                                // this.props.history.push(`/collection/${collection.id}`)
                                    console.log(` button # ${q.id} clicked`)
                                }}
                                >
                                edit </button>

                            <br/>
                            <h4> &lt; Progress Bar /&gt; coming soon  </h4>
                            <h5> (80% complete) </h5>
                        </div>
                    )
                }
                </section>
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