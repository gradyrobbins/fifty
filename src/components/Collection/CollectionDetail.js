import React, { Component } from "react"
import { Link } from "react-router-dom";
// import "./Animal.css"
// import dog from "./DogIcon.png"
// import stock_Qtr_Img from "./../img/stock_Qtr_Img.png"

export default class CollectionDetail extends Component {
    render() {
        /*
            Using the route parameter, find whose collection you want to display by looking at the `this.props.collections` that was passed down from ApplicationViews
        */

        const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}

        return (

            <section className="collection">
                <div key={collection.id} className="card">
                    <div className="card-body">

                        <h6 className="card-title">{collection.name}</h6>

                    </div>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={`/collections/${collection.id}`}>${collection.name}</Link>
                    </li> */}
                </div>
            </section>

        )
    }
}