import React, { Component } from 'react'
// import { Link } from "react-router-dom"
import "./CollectionsList.css"
class CollectionsList extends Component {
    render() {
        // console.log("this.props.collections", this.props.collections)

        return (
            <React.Fragment>
                    
                <br/>
                <br/>

                <br/>

                <section className="collections">
                <br/>
{/* <nav>
<ul className="nav nav-pills"> */}
                {
                    this.props.collections.map(collection =>


                            // <Link className="nav-link" to=/collection/:collectionId(\d+)>{collection.collectorsName}
                            // </Link>

                            <button key={collection.id} className="btn btn-primary"  id={collection.id} onClick={() =>
                                {
                                this.props.history.push(`/collection/${collection.id}`)
                                    // console.log(` button # ${collection.id} clicked`)
                                }}
                                >
                                {collection.collectorsName}  </button>


                    )
                }
                {/* </ul>
</nav> */}
                </section>

             </React.Fragment>
        )
    }
}

export default CollectionsList