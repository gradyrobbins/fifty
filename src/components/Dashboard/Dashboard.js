import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class Dashboard extends Component {
    render() {
        console.log("this.props", this.props)
        console.log("this.props.collection", this.props.collections)
        return (
            <div>

            <section className="collections">
            {
                this.props.collections.map(collection =>
                    <div key={collection.id} className="collection" >
                        <br/>
                        <button className="btn btn-primary"  id={collection.id} onClick={() =>
                            {
                            this.props.history.push(`/collection/${collection.id}`)
                            }}
                            >
                            {collection.collectorsName}  </button>
                        <br/>
                    </div>

                )
            }
            </section>
             </div>
        )
    }
}

export default Dashboard