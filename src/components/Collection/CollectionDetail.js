import React, { Component } from "react"
import { Link } from "react-router-dom";
// import "./Animal.css"
// import dog from "./DogIcon.png"
// import stock_Qtr_Img from "./../img/stock_Qtr_Img.png"

export default class CollectionDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        // const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}
        const collection = this.props.collections.find(a => a.id === parseInt(this.props.match.params.collectionId)) || {}

        return (

            <section className="collection">
                <div key={collection.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {/* <img src={stock_Qtr_Img} className="icon--stock_Qtr_Img" /> */}
                            {/* {animal.name} */}
                        </h4>
                        <h6 className="card-title">{collection.name}</h6>
                        {/* <a href="#"
                            onClick={() => this.props.deleteQ(collection.id)
                                            .then(() => this.props.history.push("/collections"))}
                            className="card-link">Delete</a> */}
                    </div>
                    <div>Has card component</div>
                    <div>Needs card component</div>
                </div>
            </section>

        )
    }
}