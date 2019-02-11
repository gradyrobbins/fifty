import React, { Component } from "react"
import { Link } from "react-router-dom";
import HasCard from "./Has/HasCard";
import NeedsCard from "./Needs/NeedsCard"
import CollectionsList from "../Dashboard/CollectionsList";

// import stock_Qtr_Img from "./../img/stock_Qtr_Img.png"

export default class CollectionDetail extends Component {
    render() {
        /*
            Using the route parameter, find whose collection you want to display by looking at the `this.props.collections` that was passed down from ApplicationViews
        */

        const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}

        console.log("collection" , collection)

        const quarters = this.props.quarters
        console.log("this.props.quarters" , this.props.quarters)

        return (
            <React.Fragment>
            <section className="collection">
                <div key={collection.id} className="card">

                </div>
            </section>
            {/* <CollectionsList /> */}
            {/* <HasCard
                    // {...props}
                    // quarters={this.state.quarters}
            /> */}
            <br/>
            {/* <NeedsCard /> */}
            </React.Fragment>
        )
    }
}