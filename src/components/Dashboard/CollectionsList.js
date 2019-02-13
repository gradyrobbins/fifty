import React, { Component } from 'react'
// import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
class CollectionsList extends Component {
    render() {
        // console.log("this.props.collections", this.props.collections)

        return (
            <div>
                <br/>
                <br/>
                <section className="collections">
                {
                    this.props.collections.map(collection =>
                        <div key={collection.id} className="collection" >
                            <br/>
                            <button className="btn btn-primary"  id={collection.id} onClick={() =>
                                {
                                this.props.history.push(`/collection/${collection.id}`)
                                    // console.log(` button # ${collection.id} clicked`)
                                }}
                                >
                                {collection.collectorsName}  </button>

                            <br/>
                            <h4> &lt; Progress Bar /&gt; goes here </h4>
                        </div>
                    )
                }
                </section>

             </div>
        )
    }
}

export default CollectionsList