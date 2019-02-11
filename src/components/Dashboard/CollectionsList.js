import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
class CollectionsList extends Component {
    render() {
        console.log("this.props.collections", this.props.collections)

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
                                    console.log(` button # ${collection.id} clicked`)
                                }}
                                >
                                {collection.collectorsName}  </button>
                            <br/>
                        </div>

                    )
                }
                </section>

                {/* <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                    <ul className="nav nav-pills">


                            {/* <Link className="nav-link" to=`/collection/${collection.id}` >Login< /> */}



                    {/* </ul> */}
                {/* </nav>  */}





             </div>
        )
    }
}

export default CollectionsList